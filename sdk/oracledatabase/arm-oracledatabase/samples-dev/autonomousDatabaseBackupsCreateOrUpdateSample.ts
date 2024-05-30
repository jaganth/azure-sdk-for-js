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
  AutonomousDatabaseBackup,
  OracleDatabaseManagementClient,
} from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a AutonomousDatabaseBackup
 *
 * @summary Create a AutonomousDatabaseBackup
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/preview/2023-09-01-preview/examples/autonomousDatabaseBackup_create.json
 */
async function createAutonomousDatabaseBackup() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const autonomousdatabasename = "databasedb1";
  const adbbackupid = "1711644130";
  const resource: AutonomousDatabaseBackup = {
    properties: {
      autonomousDatabaseId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Oracle.Database/autonomousDatabases/databasedb1",
      displayName: "Nightly Backup",
      retentionPeriodInDays: 365,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result =
    await client.autonomousDatabaseBackups.beginCreateOrUpdateAndWait(
      resourceGroupName,
      autonomousdatabasename,
      adbbackupid,
      resource,
    );
  console.log(result);
}

async function main() {
  createAutonomousDatabaseBackup();
}

main().catch(console.error);
