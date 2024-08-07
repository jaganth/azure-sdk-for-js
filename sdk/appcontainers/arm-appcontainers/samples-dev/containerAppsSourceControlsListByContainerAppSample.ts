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
 * This sample demonstrates how to Get the Container App SourceControls in a given resource group.
 *
 * @summary Get the Container App SourceControls in a given resource group.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2024-03-01/examples/SourceControls_ListByContainer.json
 */
async function listAppSourceControls() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "651f8027-33e8-4ec4-97b4-f6e9f3dc8744";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "workerapps-rg-xj";
  const containerAppName = "testcanadacentral";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.containerAppsSourceControls.listByContainerApp(
    resourceGroupName,
    containerAppName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAppSourceControls();
}

main().catch(console.error);
