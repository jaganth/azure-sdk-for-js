/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Settings,
  HybridComputeManagementClient,
} from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the base Settings of the target resource.
 *
 * @summary Update the base Settings of the target resource.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-07-31-preview/examples/settings/SettingsPatch.json
 */
async function networkConfigurationsPatch() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "hybridRG";
  const baseProvider = "Microsoft.HybridCompute";
  const baseResourceType = "machines";
  const baseResourceName = "testMachine";
  const settingsResourceName = "default";
  const parameters: Settings = {
    gatewayResourceId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/gateways/newGateway",
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.settingsOperations.patch(
    resourceGroupName,
    baseProvider,
    baseResourceType,
    baseResourceName,
    settingsResourceName,
    parameters,
  );
  console.log(result);
}

async function main() {
  networkConfigurationsPatch();
}

main().catch(console.error);
