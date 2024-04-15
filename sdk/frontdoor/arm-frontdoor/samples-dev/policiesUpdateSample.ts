/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, FrontDoorManagementClient } from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patch a specific frontdoor webApplicationFirewall policy for tags update under the specified subscription and resource group.
 *
 * @summary Patch a specific frontdoor webApplicationFirewall policy for tags update under the specified subscription and resource group.
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2024-02-01/examples/WafPolicyPatch.json
 */
async function patchesSpecificPolicy() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "rg1";
  const policyName = "Policy1";
  const parameters: TagsObject = { tags: { key1: "value1", key2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.policies.beginUpdateAndWait(
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

async function main() {
  patchesSpecificPolicy();
}

main().catch(console.error);
