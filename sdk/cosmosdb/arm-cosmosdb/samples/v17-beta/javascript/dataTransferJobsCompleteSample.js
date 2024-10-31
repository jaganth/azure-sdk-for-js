/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Completes a Data Transfer Online Job.
 *
 * @summary Completes a Data Transfer Online Job.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-09-01-preview/examples/data-transfer-service/CosmosDBDataTransferJobComplete.json
 */
async function cosmosDbDataTransferJobComplete() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "e35cc6eb-c8e3-447b-8de6-b83328cd0098";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const jobName = "j1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.dataTransferJobs.complete(resourceGroupName, accountName, jobName);
  console.log(result);
}

async function main() {
  cosmosDbDataTransferJobComplete();
}

main().catch(console.error);
