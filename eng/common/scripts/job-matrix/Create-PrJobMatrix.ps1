<#
.SYNOPSIS
Generates a combined PR job matrix from a package properties folder. It is effectively a combination of
Create-JobMatrix and distribute-packages-to-matrix

This script is intended to be used within an Azure DevOps pipeline to generate a job matrix for a PR.

.EXAMPLE
./eng/common/scripts/Create-PRJobMatrix $(Build.ArtifactStagingDirectory)/PackageProperties
#>

[CmdletBinding()]
param (
  [Parameter(Mandatory = $true)][string] $PackagePropertiesFolder,
  [Parameter(Mandatory = $true)][string] $PRMatrixFile,
  [Parameter(Mandatory = $true)][string] $PRMatrixSetting,
  [Parameter(Mandatory = $False)][string] $DisplayNameFilter,
  [Parameter(Mandatory = $False)][array] $Filters,
  [Parameter(Mandatory = $False)][array] $Replace,
  [Parameter()][switch] $CI = ($null -ne $env:SYSTEM_TEAMPROJECTID)
)

. $PSScriptRoot/job-matrix-functions.ps1
. $PSScriptRoot/../Helpers/Package-Helpers.ps1
$BATCHSIZE = 10

if (!(Test-Path $PackagePropertiesFolder)) {
  Write-Error "Package Properties folder doesn't exist"
  exit 1
}

Write-Host "Generating PR job matrix for $PackagePropertiesFolder"

# this will become a parameter in the future, we will pass MatrixConfigs as a parameter
# these will be the "default" matrices that we will use to generate the PR matrix in lieu of
# a matrix file
$configs = @(
  [PsCustomObject]@{
    Name      = "default_platform_matrix"
    Path      = $PRMatrixFile
    Selection = "sparse"
  }
)

# calculate general targeting information and create our batches prior to generating any matrix
# this prototype doesn't handle direct and indirect, it just batches for simplicity of the proto
$packageProperties = Get-ChildItem -Recurse "$PackagePropertiesFolder" *.json `
| ForEach-Object { Get-Content -Path $_.FullName | ConvertFrom-Json } `
| ForEach-Object { [PSCustomObject]$_ }

# set default matrix config for each package if there isn't an override
$packageProperties | ForEach-Object {
  if (-not $_.CIMatrixConfigs) {
    $_.CIMatrixConfigs = $configs
  }
}

# The key here is that after we group the packages by the matrix config objects, we can use the first item's MatrixConfig
# to generate the matrix for the group, no reason to have to parse the key value backwards to get the matrix config.
$matrixBatchesByConfig = Group-ByObjectKey $packageProperties "CIMatrixConfigs"

$OverallResult = @()
foreach ($matrixBatchKey in $matrixBatchesByConfig.Keys) {
  Write-Host "Generating config for $($matrixConfig.Path)"
  $matrixBatch = $matrixBatchesByConfig[$matrixBatchKey]
  $matrixConfigs = $matrixBatch | Select-Object -First 1 -ExpandProperty CIMatrixConfigs

  $matrixResults = @()
  foreach ($matrixConfig in $matrixConfigs) {
    $matrixResults = GenerateMatrixForConfig `
      -ConfigPath $matrixConfig.Path `
      -Selection $matrixConfig.Selection `
      -DisplayNameFilter $DisplayNameFilter `
      -Filters $Filters `
      -Replace $Replace

    $packageBatches = Split-ArrayIntoBatches -InputArray $matrixBatch -BatchSize $BATCHSIZE

    # we only need to modify the generated job name if there is more than one matrix config or batch in the matrix
    $matrixSuffixNecessary = $matrixConfigs.Count -gt 1
    $batchSuffixNecessary = $packageBatches.Length -gt 1

    foreach ($batch in $packageBatches) {
      # to understand this iteration, one must understand that the matrix is a list of hashtables, each with a couple keys:
      # [
      #  { "name": "jobname", "parameters": { matrixSetting1: matrixValue1, ...} },
      # ]
      foreach ($matrixOutputItem in $matrixResults) {
        $namesForBatch = ($batch | ForEach-Object { $_.ArtifactName }) -join "-"
        # we just need to iterate across them, grab the parameters hashtable, and add the new key
        # if there is more than one batch, we will need to add a suffix including the batch name to the job name
        $matrixOutputItem["parameters"]["$PRMatrixSetting"] = $namesForBatch

        if ($matrixSuffixNecessary) {
          $matrixOutputItem["name"] = $matrixOutputItem["name"] + $matrixConfig.Name
        }

        if ($batchSuffixNecessary) {
          $matrixOutputItem["name"] = $matrixOutputItem["name"] + $namesForBatch
        }

        $OverallResult += $matrixOutputItem
      }
    }
  }
}

$serialized = SerializePipelineMatrix $OverallResult

Write-Output $serialized.pretty

if ($CI) {
  Write-Output "##vso[task.setVariable variable=matrix;isOutput=true]$($serialized.compressed)"
}
