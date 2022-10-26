/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WorkloadNetworkVMGroup, AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create a vm group by id in a private cloud workload network.
 *
 * @summary Create a vm group by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/WorkloadNetworks_CreateVMGroups.json
 */
async function workloadNetworksCreateVMGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const vmGroupId = "vmGroup1";
  const workloadNetworkVMGroup: WorkloadNetworkVMGroup = {
    displayName: "vmGroup1",
    members: ["564d43da-fefc-2a3b-1d92-42855622fa50"],
    revision: 1
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreateVMGroupAndWait(
    resourceGroupName,
    privateCloudName,
    vmGroupId,
    workloadNetworkVMGroup
  );
  console.log(result);
}

workloadNetworksCreateVMGroup().catch(console.error);
