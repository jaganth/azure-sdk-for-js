/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ContainerAppsAuthConfigs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  AuthConfig,
  ContainerAppsAuthConfigsListByContainerAppNextOptionalParams,
  ContainerAppsAuthConfigsListByContainerAppOptionalParams,
  ContainerAppsAuthConfigsListByContainerAppResponse,
  ContainerAppsAuthConfigsGetOptionalParams,
  ContainerAppsAuthConfigsGetResponse,
  ContainerAppsAuthConfigsCreateOrUpdateOptionalParams,
  ContainerAppsAuthConfigsCreateOrUpdateResponse,
  ContainerAppsAuthConfigsDeleteOptionalParams,
  ContainerAppsAuthConfigsListByContainerAppNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContainerAppsAuthConfigs operations. */
export class ContainerAppsAuthConfigsImpl implements ContainerAppsAuthConfigs {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ContainerAppsAuthConfigs class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Container App AuthConfigs in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  public listByContainerApp(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsAuthConfigsListByContainerAppOptionalParams
  ): PagedAsyncIterableIterator<AuthConfig> {
    const iter = this.listByContainerAppPagingAll(
      resourceGroupName,
      containerAppName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByContainerAppPagingPage(
          resourceGroupName,
          containerAppName,
          options,
          settings
        );
      }
    };
  }

  private async *listByContainerAppPagingPage(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsAuthConfigsListByContainerAppOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AuthConfig[]> {
    let result: ContainerAppsAuthConfigsListByContainerAppResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByContainerApp(
        resourceGroupName,
        containerAppName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByContainerAppNext(
        resourceGroupName,
        containerAppName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByContainerAppPagingAll(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsAuthConfigsListByContainerAppOptionalParams
  ): AsyncIterableIterator<AuthConfig> {
    for await (const page of this.listByContainerAppPagingPage(
      resourceGroupName,
      containerAppName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Container App AuthConfigs in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  private _listByContainerApp(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsAuthConfigsListByContainerAppOptionalParams
  ): Promise<ContainerAppsAuthConfigsListByContainerAppResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, options },
      listByContainerAppOperationSpec
    );
  }

  /**
   * Get a AuthConfig of a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param authConfigName Name of the Container App AuthConfig.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerAppName: string,
    authConfigName: string,
    options?: ContainerAppsAuthConfigsGetOptionalParams
  ): Promise<ContainerAppsAuthConfigsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, authConfigName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the AuthConfig for a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param authConfigName Name of the Container App AuthConfig.
   * @param authConfigEnvelope Properties used to create a Container App AuthConfig
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    containerAppName: string,
    authConfigName: string,
    authConfigEnvelope: AuthConfig,
    options?: ContainerAppsAuthConfigsCreateOrUpdateOptionalParams
  ): Promise<ContainerAppsAuthConfigsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        containerAppName,
        authConfigName,
        authConfigEnvelope,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a Container App AuthConfig.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param authConfigName Name of the Container App AuthConfig.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    containerAppName: string,
    authConfigName: string,
    options?: ContainerAppsAuthConfigsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, authConfigName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByContainerAppNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param nextLink The nextLink from the previous successful call to the ListByContainerApp method.
   * @param options The options parameters.
   */
  private _listByContainerAppNext(
    resourceGroupName: string,
    containerAppName: string,
    nextLink: string,
    options?: ContainerAppsAuthConfigsListByContainerAppNextOptionalParams
  ): Promise<ContainerAppsAuthConfigsListByContainerAppNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerAppName, nextLink, options },
      listByContainerAppNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByContainerAppOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthConfigCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs/{authConfigName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthConfig
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName,
    Parameters.authConfigName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs/{authConfigName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AuthConfig
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.authConfigEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName,
    Parameters.authConfigName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/authConfigs/{authConfigName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName,
    Parameters.authConfigName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByContainerAppNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthConfigCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
