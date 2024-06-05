/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Security Compliance Result
 *
 * @summary Security Compliance Result
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2017-08-01/examples/ComplianceResults/GetComplianceResults_example.json
 */
async function getComplianceResultsOnSubscription() {
  const resourceId = "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const complianceResultName = "DesignateMoreThanOneOwner";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.complianceResults.get(
    resourceId,
    complianceResultName,
  );
  console.log(result);
}

async function main() {
  getComplianceResultsOnSubscription();
}

main().catch(console.error);
