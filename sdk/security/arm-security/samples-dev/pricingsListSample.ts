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
 * This sample demonstrates how to Lists Microsoft Defender for Cloud pricing configurations in the subscription.
 *
 * @summary Lists Microsoft Defender for Cloud pricing configurations in the subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2023-01-01/examples/Pricings/ListPricings_example.json
 */
async function getPricingsOnSubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.pricings.list();
  console.log(result);
}

async function main() {
  getPricingsOnSubscription();
}

main().catch(console.error);
