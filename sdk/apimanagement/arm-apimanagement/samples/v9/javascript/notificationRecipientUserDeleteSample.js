/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Removes the API Management user from the list of Notification.
 *
 * @summary Removes the API Management user from the list of Notification.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementDeleteNotificationRecipientUser.json
 */
async function apiManagementDeleteNotificationRecipientUser() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const notificationName = "RequestPublisherNotificationMessage";
  const userId = "576823d0a40f7e74ec07d642";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.notificationRecipientUser.delete(
    resourceGroupName,
    serviceName,
    notificationName,
    userId
  );
  console.log(result);
}

async function main() {
  apiManagementDeleteNotificationRecipientUser();
}

main().catch(console.error);
