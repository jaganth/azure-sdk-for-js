/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/snapshotsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a Snapshots. */
export class Snapshots {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a Snapshots.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,snapshotName,snapshot,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SnapshotsCreateOrUpdateResponse>;
  }

  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsUpdateResponse>
   */
  update(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,snapshotName,snapshot,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SnapshotsUpdateResponse>;
  }

  /**
   * Gets information about a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsGetResponse>
   */
  get(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param callback The callback
   */
  get(resourceGroupName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
  get(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Snapshot>, callback?: msRest.ServiceCallback<Models.Snapshot>): Promise<Models.SnapshotsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        snapshotName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SnapshotsGetResponse>;
  }

  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,snapshotName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists snapshots under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SnapshotList>, callback?: msRest.ServiceCallback<Models.SnapshotList>): Promise<Models.SnapshotsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.SnapshotsListByResourceGroupResponse>;
  }

  /**
   * Lists snapshots under a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SnapshotList>, callback?: msRest.ServiceCallback<Models.SnapshotList>): Promise<Models.SnapshotsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SnapshotsListResponse>;
  }

  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsGrantAccessResponse>
   */
  grantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsGrantAccessResponse> {
    return this.beginGrantAccess(resourceGroupName,snapshotName,grantAccessData,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SnapshotsGrantAccessResponse>;
  }

  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  revokeAccess(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRevokeAccess(resourceGroupName,snapshotName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        snapshotName,
        snapshot,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        snapshotName,
        snapshot,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        snapshotName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginGrantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        snapshotName,
        grantAccessData,
        options
      },
      beginGrantAccessOperationSpec,
      options);
  }

  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed
   * after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The
   * max name length is 80 characters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRevokeAccess(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        snapshotName,
        options
      },
      beginRevokeAccessOperationSpec,
      options);
  }

  /**
   * Lists snapshots under a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SnapshotList>, callback?: msRest.ServiceCallback<Models.SnapshotList>): Promise<Models.SnapshotsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.SnapshotsListByResourceGroupNextResponse>;
  }

  /**
   * Lists snapshots under a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SnapshotsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SnapshotsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SnapshotList>, callback?: msRest.ServiceCallback<Models.SnapshotList>): Promise<Models.SnapshotsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SnapshotsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/snapshots",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "snapshot",
    mapper: {
      ...Mappers.Snapshot,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    202: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "snapshot",
    mapper: {
      ...Mappers.SnapshotUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Snapshot
    },
    202: {
      bodyMapper: Mappers.Snapshot
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginGrantAccessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/beginGetAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "grantAccessData",
    mapper: {
      ...Mappers.GrantAccessData,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessUri
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRevokeAccessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/{snapshotName}/endGetAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.snapshotName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
