/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { KeyVaultManagementClient } from "@azure/arm-keyvault";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The List operation gets information about the managed HSM Pools associated with the subscription.
 *
 * @summary The List operation gets information about the managed HSM Pools associated with the subscription.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-02-01/examples/ManagedHsm_ListBySubscription.json
 */
async function listManagedHsmPoolsInASubscription() {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedHsms.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listManagedHsmPoolsInASubscription();
}

main().catch(console.error);
