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
  ServiceEndpointPolicyDefinition,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a service endpoint policy definition in the specified service endpoint policy.
 *
 * @summary Creates or updates a service endpoint policy definition in the specified service endpoint policy.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-11-01/examples/ServiceEndpointPolicyDefinitionCreate.json
 */
async function createServiceEndpointPolicyDefinition() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const serviceEndpointPolicyName = "testPolicy";
  const serviceEndpointPolicyDefinitionName = "testDefinition";
  const serviceEndpointPolicyDefinitions: ServiceEndpointPolicyDefinition = {
    description: "Storage Service EndpointPolicy Definition",
    service: "Microsoft.Storage",
    serviceResources: [
      "/subscriptions/subid1",
      "/subscriptions/subid1/resourceGroups/storageRg",
      "/subscriptions/subid1/resourceGroups/storageRg/providers/Microsoft.Storage/storageAccounts/stAccount"
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.serviceEndpointPolicyDefinitions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceEndpointPolicyName,
    serviceEndpointPolicyDefinitionName,
    serviceEndpointPolicyDefinitions
  );
  console.log(result);
}

async function main() {
  createServiceEndpointPolicyDefinition();
}

main().catch(console.error);
