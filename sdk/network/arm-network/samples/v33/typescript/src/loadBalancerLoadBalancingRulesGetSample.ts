/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the specified load balancer load balancing rule.
 *
 * @summary Gets the specified load balancer load balancing rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/LoadBalancerLoadBalancingRuleGet.json
 */
async function loadBalancerLoadBalancingRuleGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const loadBalancerName = "lb1";
  const loadBalancingRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerLoadBalancingRules.get(
    resourceGroupName,
    loadBalancerName,
    loadBalancingRuleName,
  );
  console.log(result);
}

async function main() {
  loadBalancerLoadBalancingRuleGet();
}

main().catch(console.error);
