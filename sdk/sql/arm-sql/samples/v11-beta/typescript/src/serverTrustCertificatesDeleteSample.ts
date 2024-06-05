/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a server trust certificate that was uploaded from box to Sql Managed Instance.
 *
 * @summary Deletes a server trust certificate that was uploaded from box to Sql Managed Instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ServerTrustCertificatesDelete.json
 */
async function deleteServerTrustCertificate() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "38e0dc56-907f-45ba-a97c-74233baad471";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "testrg";
  const managedInstanceName = "testcl";
  const certificateName = "customerCertificateName";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverTrustCertificates.beginDeleteAndWait(
    resourceGroupName,
    managedInstanceName,
    certificateName,
  );
  console.log(result);
}

async function main() {
  deleteServerTrustCertificate();
}

main().catch(console.error);
