/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous operation. Status of the
operation can be fetched using GetProtectionPolicyOperationResult API.
 *
 * @summary Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous operation. Status of the
operation can be fetched using GetProtectionPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/ProtectionPolicies_Delete.json
 */
async function deleteAzureVMProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName = process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "testPolicy1";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.beginDeleteAndWait(
    vaultName,
    resourceGroupName,
    policyName,
  );
  console.log(result);
}

async function main() {
  deleteAzureVMProtectionPolicy();
}

main().catch(console.error);
