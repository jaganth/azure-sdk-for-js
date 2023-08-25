/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DeploymentStacksClient } = require("@azure/arm-resourcesdeploymentstacks");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a Deployment Stack with a given name.
 *
 * @summary Gets a Deployment Stack with a given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/preview/2022-08-01-preview/examples/DeploymentStackManagementGroupGet.json
 */
async function deploymentStacksGet() {
  const managementGroupId = "myMg";
  const deploymentStackName = "simpleDeploymentStack";
  const credential = new DefaultAzureCredential();
  const client = new DeploymentStacksClient(credential);
  const result = await client.deploymentStacks.getAtManagementGroup(
    managementGroupId,
    deploymentStackName
  );
  console.log(result);
}

async function main() {
  deploymentStacksGet();
}

main().catch(console.error);
