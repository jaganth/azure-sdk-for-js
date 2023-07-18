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
  PermissionBinding,
  EventGridManagementClient
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a permission binding with the specified parameters.
 *
 * @summary Create or update a permission binding with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-06-01-preview/examples/PermissionBindings_CreateOrUpdate.json
 */
async function permissionBindingsCreateOrUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const namespaceName = "exampleNamespaceName1";
  const permissionBindingName = "examplePermissionBindingName1";
  const permissionBindingInfo: PermissionBinding = {
    clientGroupName: "exampleClientGroupName1",
    permission: "Publisher",
    topicSpaceName: "exampleTopicSpaceName1"
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.permissionBindings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    namespaceName,
    permissionBindingName,
    permissionBindingInfo
  );
  console.log(result);
}

async function main() {
  permissionBindingsCreateOrUpdate();
}

main().catch(console.error);
