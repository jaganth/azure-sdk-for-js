/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster.
 *
 * @summary Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-15-preview/examples/CosmosDBManagedCassandraStatus.json
 */
async function cosmosDbManagedCassandraStatus() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.status(
    resourceGroupName,
    clusterName
  );
  console.log(result);
}

async function main() {
  cosmosDbManagedCassandraStatus();
}

main().catch(console.error);
