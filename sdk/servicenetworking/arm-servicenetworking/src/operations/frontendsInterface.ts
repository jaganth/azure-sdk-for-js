/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { FrontendsInterface } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceNetworkingManagementClient } from "../serviceNetworkingManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Frontend,
  FrontendsInterfaceListByTrafficControllerNextOptionalParams,
  FrontendsInterfaceListByTrafficControllerOptionalParams,
  FrontendsInterfaceListByTrafficControllerResponse,
  FrontendsInterfaceGetOptionalParams,
  FrontendsInterfaceGetResponse,
  FrontendsInterfaceCreateOrUpdateOptionalParams,
  FrontendsInterfaceCreateOrUpdateResponse,
  FrontendUpdate,
  FrontendsInterfaceUpdateOptionalParams,
  FrontendsInterfaceUpdateResponse,
  FrontendsInterfaceDeleteOptionalParams,
  FrontendsInterfaceListByTrafficControllerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FrontendsInterface operations. */
export class FrontendsInterfaceImpl implements FrontendsInterface {
  private readonly client: ServiceNetworkingManagementClient;

  /**
   * Initialize a new instance of the class FrontendsInterface class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceNetworkingManagementClient) {
    this.client = client;
  }

  /**
   * List Frontend resources by TrafficController
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param options The options parameters.
   */
  public listByTrafficController(
    resourceGroupName: string,
    trafficControllerName: string,
    options?: FrontendsInterfaceListByTrafficControllerOptionalParams
  ): PagedAsyncIterableIterator<Frontend> {
    const iter = this.listByTrafficControllerPagingAll(
      resourceGroupName,
      trafficControllerName,
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
        return this.listByTrafficControllerPagingPage(
          resourceGroupName,
          trafficControllerName,
          options,
          settings
        );
      }
    };
  }

  private async *listByTrafficControllerPagingPage(
    resourceGroupName: string,
    trafficControllerName: string,
    options?: FrontendsInterfaceListByTrafficControllerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Frontend[]> {
    let result: FrontendsInterfaceListByTrafficControllerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByTrafficController(
        resourceGroupName,
        trafficControllerName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByTrafficControllerNext(
        resourceGroupName,
        trafficControllerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByTrafficControllerPagingAll(
    resourceGroupName: string,
    trafficControllerName: string,
    options?: FrontendsInterfaceListByTrafficControllerOptionalParams
  ): AsyncIterableIterator<Frontend> {
    for await (const page of this.listByTrafficControllerPagingPage(
      resourceGroupName,
      trafficControllerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Frontend resources by TrafficController
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param options The options parameters.
   */
  private _listByTrafficController(
    resourceGroupName: string,
    trafficControllerName: string,
    options?: FrontendsInterfaceListByTrafficControllerOptionalParams
  ): Promise<FrontendsInterfaceListByTrafficControllerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, trafficControllerName, options },
      listByTrafficControllerOperationSpec
    );
  }

  /**
   * Get a Frontend
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param frontendName Frontends
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    options?: FrontendsInterfaceGetOptionalParams
  ): Promise<FrontendsInterfaceGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, trafficControllerName, frontendName, options },
      getOperationSpec
    );
  }

  /**
   * Create a Frontend
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param frontendName Frontends
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    resource: Frontend,
    options?: FrontendsInterfaceCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<FrontendsInterfaceCreateOrUpdateResponse>,
      FrontendsInterfaceCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FrontendsInterfaceCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        trafficControllerName,
        frontendName,
        resource,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      FrontendsInterfaceCreateOrUpdateResponse,
      OperationState<FrontendsInterfaceCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Frontend
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param frontendName Frontends
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    resource: Frontend,
    options?: FrontendsInterfaceCreateOrUpdateOptionalParams
  ): Promise<FrontendsInterfaceCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      trafficControllerName,
      frontendName,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a Frontend
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param frontendName Frontends
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    properties: FrontendUpdate,
    options?: FrontendsInterfaceUpdateOptionalParams
  ): Promise<FrontendsInterfaceUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        trafficControllerName,
        frontendName,
        properties,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Delete a Frontend
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param frontendName Frontends
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    options?: FrontendsInterfaceDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, trafficControllerName, frontendName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Frontend
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param frontendName Frontends
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    trafficControllerName: string,
    frontendName: string,
    options?: FrontendsInterfaceDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      trafficControllerName,
      frontendName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByTrafficControllerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param trafficControllerName traffic controller name for path
   * @param nextLink The nextLink from the previous successful call to the ListByTrafficController
   *                 method.
   * @param options The options parameters.
   */
  private _listByTrafficControllerNext(
    resourceGroupName: string,
    trafficControllerName: string,
    nextLink: string,
    options?: FrontendsInterfaceListByTrafficControllerNextOptionalParams
  ): Promise<FrontendsInterfaceListByTrafficControllerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, trafficControllerName, nextLink, options },
      listByTrafficControllerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByTrafficControllerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FrontendListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.trafficControllerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Frontend
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.trafficControllerName,
    Parameters.frontendName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Frontend
    },
    201: {
      bodyMapper: Mappers.Frontend
    },
    202: {
      bodyMapper: Mappers.Frontend
    },
    204: {
      bodyMapper: Mappers.Frontend
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.trafficControllerName,
    Parameters.frontendName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Frontend
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.trafficControllerName,
    Parameters.frontendName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.trafficControllerName,
    Parameters.frontendName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTrafficControllerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FrontendListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.trafficControllerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
