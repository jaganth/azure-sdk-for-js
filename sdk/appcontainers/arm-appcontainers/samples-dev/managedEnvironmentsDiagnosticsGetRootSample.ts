/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the properties of a Managed Environment used to host container apps.
 *
 * @summary Get the properties of a Managed Environment used to host container apps.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2024-03-01/examples/ManagedEnvironments_Get.json
 */
async function getEnvironmentsByName() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "jlaw-demo1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironmentsDiagnostics.getRoot(
    resourceGroupName,
    environmentName,
  );
  console.log(result);
}

async function main() {
  getEnvironmentsByName();
}

main().catch(console.error);
