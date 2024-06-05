/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { ReplicationUsages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesClient } from "../recoveryServicesClient";
import {
  ReplicationUsage,
  ReplicationUsagesListOptionalParams,
  ReplicationUsagesListResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationUsages operations. */
export class ReplicationUsagesImpl implements ReplicationUsages {
  private readonly client: RecoveryServicesClient;

  /**
   * Initialize a new instance of the class ReplicationUsages class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesClient) {
    this.client = client;
  }

  /**
   * Fetches the replication usages of the vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: ReplicationUsagesListOptionalParams,
  ): PagedAsyncIterableIterator<ReplicationUsage> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          vaultName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: ReplicationUsagesListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ReplicationUsage[]> {
    let result: ReplicationUsagesListResponse;
    result = await this._list(resourceGroupName, vaultName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    options?: ReplicationUsagesListOptionalParams,
  ): AsyncIterableIterator<ReplicationUsage> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Fetches the replication usages of the vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: ReplicationUsagesListOptionalParams,
  ): Promise<ReplicationUsagesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/replicationUsages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicationUsageList,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
