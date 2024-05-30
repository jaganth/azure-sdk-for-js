/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  AzureDevOpsOrg,
  AzureDevOpsOrgsListOptionalParams,
  AzureDevOpsOrgsListAvailableOptionalParams,
  AzureDevOpsOrgsListAvailableResponse,
  AzureDevOpsOrgsGetOptionalParams,
  AzureDevOpsOrgsGetResponse,
  AzureDevOpsOrgsCreateOrUpdateOptionalParams,
  AzureDevOpsOrgsCreateOrUpdateResponse,
  AzureDevOpsOrgsUpdateOptionalParams,
  AzureDevOpsOrgsUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureDevOpsOrgs. */
export interface AzureDevOpsOrgs {
  /**
   * Returns a list of Azure DevOps organizations onboarded to the connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: AzureDevOpsOrgsListOptionalParams,
  ): PagedAsyncIterableIterator<AzureDevOpsOrg>;
  /**
   * Returns a list of all Azure DevOps organizations accessible by the user token consumed by the
   * connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  listAvailable(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: AzureDevOpsOrgsListAvailableOptionalParams,
  ): Promise<AzureDevOpsOrgsListAvailableResponse>;
  /**
   * Returns a monitored Azure DevOps organization resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    options?: AzureDevOpsOrgsGetOptionalParams,
  ): Promise<AzureDevOpsOrgsGetResponse>;
  /**
   * Creates or updates monitored Azure DevOps organization details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param azureDevOpsOrg The Azure DevOps organization resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    azureDevOpsOrg: AzureDevOpsOrg,
    options?: AzureDevOpsOrgsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureDevOpsOrgsCreateOrUpdateResponse>,
      AzureDevOpsOrgsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates monitored Azure DevOps organization details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param azureDevOpsOrg The Azure DevOps organization resource payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    azureDevOpsOrg: AzureDevOpsOrg,
    options?: AzureDevOpsOrgsCreateOrUpdateOptionalParams,
  ): Promise<AzureDevOpsOrgsCreateOrUpdateResponse>;
  /**
   * Updates monitored Azure DevOps organization details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param azureDevOpsOrg The Azure DevOps organization resource payload.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    azureDevOpsOrg: AzureDevOpsOrg,
    options?: AzureDevOpsOrgsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureDevOpsOrgsUpdateResponse>,
      AzureDevOpsOrgsUpdateResponse
    >
  >;
  /**
   * Updates monitored Azure DevOps organization details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param orgName The Azure DevOps organization name.
   * @param azureDevOpsOrg The Azure DevOps organization resource payload.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    securityConnectorName: string,
    orgName: string,
    azureDevOpsOrg: AzureDevOpsOrg,
    options?: AzureDevOpsOrgsUpdateOptionalParams,
  ): Promise<AzureDevOpsOrgsUpdateResponse>;
}
