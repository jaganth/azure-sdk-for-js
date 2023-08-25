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
  DeploymentStack,
  DeploymentStacksClient
} from "@azure/arm-resourcesdeploymentstacks";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Deployment Stack.
 *
 * @summary Creates or updates a Deployment Stack.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/preview/2022-08-01-preview/examples/DeploymentStackSubscriptionCreate.json
 */
async function deploymentStacksCreateOrUpdate() {
  const subscriptionId =
    process.env["RESOURCESDEPLOYMENTSTACKS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const deploymentStackName = "simpleDeploymentStack";
  const deploymentStack: DeploymentStack = {
    actionOnUnmanage: {
      managementGroups: "detach",
      resourceGroups: "delete",
      resources: "delete"
    },
    denySettings: {
      applyToChildScopes: false,
      excludedActions: ["action"],
      excludedPrincipals: ["principal"],
      mode: "denyDelete"
    },
    location: "eastus",
    parameters: { parameter1: { value: "a string" } },
    tags: { tagkey: "tagVal" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DeploymentStacksClient(credential, subscriptionId);
  const result = await client.deploymentStacks.beginCreateOrUpdateAtSubscriptionAndWait(
    deploymentStackName,
    deploymentStack
  );
  console.log(result);
}

async function main() {
  deploymentStacksCreateOrUpdate();
}

main().catch(console.error);
