/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a network manager security admin configuration.
 *
 * @summary Creates or updates a network manager security admin configuration.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/NetworkManagerSecurityAdminConfigurationPut.json
 */
async function createNetworkManagerSecurityAdminConfiguration() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const securityAdminConfiguration = {
    description: "A sample policy",
    applyOnNetworkIntentPolicyBasedServices: ["None"],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.securityAdminConfigurations.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    configurationName,
    securityAdminConfiguration,
  );
  console.log(result);
}

async function main() {
  createNetworkManagerSecurityAdminConfiguration();
}

main().catch(console.error);
