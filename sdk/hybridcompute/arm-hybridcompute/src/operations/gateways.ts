/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Gateways } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Gateway,
  GatewaysListByResourceGroupNextOptionalParams,
  GatewaysListByResourceGroupOptionalParams,
  GatewaysListByResourceGroupResponse,
  GatewaysListBySubscriptionNextOptionalParams,
  GatewaysListBySubscriptionOptionalParams,
  GatewaysListBySubscriptionResponse,
  GatewaysCreateOrUpdateOptionalParams,
  GatewaysCreateOrUpdateResponse,
  GatewayUpdate,
  GatewaysUpdateOptionalParams,
  GatewaysUpdateResponse,
  GatewaysGetOptionalParams,
  GatewaysGetResponse,
  GatewaysDeleteOptionalParams,
  GatewaysDeleteResponse,
  GatewaysListByResourceGroupNextResponse,
  GatewaysListBySubscriptionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Gateways operations. */
export class GatewaysImpl implements Gateways {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class Gateways class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * The operation to get all gateways of a non-Azure machine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: GatewaysListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Gateway> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: GatewaysListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Gateway[]> {
    let result: GatewaysListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: GatewaysListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<Gateway> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The operation to get all gateways of a non-Azure machine
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: GatewaysListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Gateway> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: GatewaysListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Gateway[]> {
    let result: GatewaysListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: GatewaysListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<Gateway> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The operation to create or update a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the Gateway.
   * @param parameters Parameters supplied to the Create gateway operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    parameters: Gateway,
    options?: GatewaysCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GatewaysCreateOrUpdateResponse>,
      GatewaysCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GatewaysCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, gatewayName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      GatewaysCreateOrUpdateResponse,
      OperationState<GatewaysCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to create or update a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the Gateway.
   * @param parameters Parameters supplied to the Create gateway operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gatewayName: string,
    parameters: Gateway,
    options?: GatewaysCreateOrUpdateOptionalParams,
  ): Promise<GatewaysCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      gatewayName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the Gateway.
   * @param parameters Parameters supplied to the Update gateway operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    gatewayName: string,
    parameters: GatewayUpdate,
    options?: GatewaysUpdateOptionalParams,
  ): Promise<GatewaysUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Retrieves information about the view of a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the Gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    options?: GatewaysGetOptionalParams,
  ): Promise<GatewaysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, options },
      getOperationSpec,
    );
  }

  /**
   * The operation to delete a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the Gateway.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    gatewayName: string,
    options?: GatewaysDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GatewaysDeleteResponse>,
      GatewaysDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<GatewaysDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, gatewayName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      GatewaysDeleteResponse,
      OperationState<GatewaysDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to delete a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the Gateway.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: GatewaysDeleteOptionalParams,
  ): Promise<GatewaysDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      gatewayName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get all gateways of a non-Azure machine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: GatewaysListByResourceGroupOptionalParams,
  ): Promise<GatewaysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * The operation to get all gateways of a non-Azure machine
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: GatewaysListBySubscriptionOptionalParams,
  ): Promise<GatewaysListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: GatewaysListByResourceGroupNextOptionalParams,
  ): Promise<GatewaysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: GatewaysListBySubscriptionNextOptionalParams,
  ): Promise<GatewaysListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Gateway,
    },
    201: {
      bodyMapper: Mappers.Gateway,
    },
    202: {
      bodyMapper: Mappers.Gateway,
    },
    204: {
      bodyMapper: Mappers.Gateway,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Gateway,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Gateway,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways/{gatewayName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.GatewaysDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.GatewaysDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.GatewaysDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.GatewaysDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/gateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewaysListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridCompute/gateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewaysListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewaysListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewaysListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
