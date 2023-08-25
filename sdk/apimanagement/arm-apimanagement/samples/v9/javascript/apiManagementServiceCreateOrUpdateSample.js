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
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateMultiRegionServiceWithCustomHostname.json
 */
async function apiManagementCreateMultiRegionServiceWithCustomHostname() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    additionalLocations: [
      {
        disableGateway: true,
        location: "East US",
        sku: { name: "Premium", capacity: 1 },
      },
    ],
    apiVersionConstraint: { minApiVersion: "2019-01-01" },
    hostnameConfigurations: [
      {
        type: "Proxy",
        certificatePassword: "Password",
        defaultSslBinding: true,
        encodedCertificate: "****** Base 64 Encoded Certificate ************",
        hostName: "gateway1.msitesting.net",
      },
      {
        type: "Management",
        certificatePassword: "Password",
        encodedCertificate: "****** Base 64 Encoded Certificate ************",
        hostName: "mgmt.msitesting.net",
      },
      {
        type: "Portal",
        certificatePassword: "Password",
        encodedCertificate: "****** Base 64 Encoded Certificate ************",
        hostName: "portal1.msitesting.net",
      },
    ],
    location: "West US",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Premium", capacity: 1 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
    virtualNetworkType: "None",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateService.json
 */
async function apiManagementCreateService() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    location: "South Central US",
    publisherEmail: "foo@contoso.com",
    publisherName: "foo",
    sku: { name: "Developer", capacity: 1 },
    tags: { name: "Contoso", test: "User" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceHavingMsi.json
 */
async function apiManagementCreateServiceHavingMsi() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    identity: { type: "SystemAssigned" },
    location: "West US",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Consumption", capacity: 0 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceInVnetWithPublicIP.json
 */
async function apiManagementCreateServiceInVnetWithPublicIP() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    location: "East US 2 EUAP",
    publicIpAddressId:
      "/subscriptions/subid/resourceGroups/rgName/providers/Microsoft.Network/publicIPAddresses/apimazvnet",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Premium", capacity: 2 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
    virtualNetworkConfiguration: {
      subnetResourceId:
        "/subscriptions/subid/resourceGroups/rgName/providers/Microsoft.Network/virtualNetworks/apimcus/subnets/tenant",
    },
    virtualNetworkType: "External",
    zones: ["1", "2"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceInZones.json
 */
async function apiManagementCreateServiceInZones() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    location: "North europe",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Premium", capacity: 2 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
    zones: ["1", "2"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceWithCustomHostnameKeyVault.json
 */
async function apiManagementCreateServiceWithCustomHostnameKeyVault() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    apiVersionConstraint: { minApiVersion: "2019-01-01" },
    hostnameConfigurations: [
      {
        type: "Proxy",
        defaultSslBinding: true,
        hostName: "gateway1.msitesting.net",
        identityClientId: "329419bc-adec-4dce-9568-25a6d486e468",
        keyVaultId: "https://rpbvtkeyvaultintegration.vault.azure.net/secrets/msitestingCert",
      },
      {
        type: "Management",
        hostName: "mgmt.msitesting.net",
        identityClientId: "329419bc-adec-4dce-9568-25a6d486e468",
        keyVaultId: "https://rpbvtkeyvaultintegration.vault.azure.net/secrets/msitestingCert",
      },
      {
        type: "Portal",
        hostName: "portal1.msitesting.net",
        identityClientId: "329419bc-adec-4dce-9568-25a6d486e468",
        keyVaultId: "https://rpbvtkeyvaultintegration.vault.azure.net/secrets/msitestingCert",
      },
    ],
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourceGroups/rg1/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1":
          {},
      },
    },
    location: "North Europe",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Premium", capacity: 1 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
    virtualNetworkType: "None",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceWithNatGatewayEnabled.json
 */
async function apiManagementCreateServiceWithNatGatewayEnabled() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    location: "East US",
    natGatewayState: "Enabled",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Premium", capacity: 1 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceWithSystemCertificates.json
 */
async function apiManagementCreateServiceWithSystemCertificates() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    certificates: [
      {
        certificatePassword: "Password",
        encodedCertificate: "*******Base64 encoded Certificate******************",
        storeName: "CertificateAuthority",
      },
    ],
    location: "Central US",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Basic", capacity: 1 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateServiceWithUserAssignedIdentity.json
 */
async function apiManagementCreateServiceWithUserAssignedIdentity() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourcegroups/rg1/providers/MicrosoftManagedIdentity/userAssignedIdentities/apimService1":
          {},
      },
    },
    location: "West US",
    publisherEmail: "apim@autorestsdk.com",
    publisherName: "autorestsdk",
    sku: { name: "Consumption", capacity: 0 },
    tags: { tag1: "value1", tag2: "value2", tag3: "value3" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 *
 * @summary Creates or updates an API Management service. This is long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUndelete.json
 */
async function apiManagementUndelete() {
  const subscriptionId = process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const parameters = {
    location: "South Central US",
    publisherEmail: "foo@contoso.com",
    publisherName: "foo",
    restore: true,
    sku: { name: "Developer", capacity: 1 },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiManagementService.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementCreateMultiRegionServiceWithCustomHostname();
  apiManagementCreateService();
  apiManagementCreateServiceHavingMsi();
  apiManagementCreateServiceInVnetWithPublicIP();
  apiManagementCreateServiceInZones();
  apiManagementCreateServiceWithCustomHostnameKeyVault();
  apiManagementCreateServiceWithNatGatewayEnabled();
  apiManagementCreateServiceWithSystemCertificates();
  apiManagementCreateServiceWithUserAssignedIdentity();
  apiManagementUndelete();
}

main().catch(console.error);
