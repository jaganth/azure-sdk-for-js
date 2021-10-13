/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/accountsMappers";
import * as Parameters from "../models/parameters";
import { VisualStudioResourceProviderClientContext } from "../visualStudioResourceProviderClientContext";

/** Class representing a Accounts. */
export class Accounts {
  private readonly client: VisualStudioResourceProviderClientContext;

  /**
   * Create a Accounts.
   * @param {VisualStudioResourceProviderClientContext} client Reference to the service client.
   */
  constructor(client: VisualStudioResourceProviderClientContext) {
    this.client = client;
  }

  /**
   * Checks if the specified Visual Studio Team Services account name is available. Resource name can
   * be either an account name or an account name and PUID.
   * @summary Accounts_CheckNameAvailability
   * @param body Parameters describing the name to check availability for.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(body: Models.CheckNameAvailabilityParameter, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCheckNameAvailabilityResponse>;
  /**
   * @param body Parameters describing the name to check availability for.
   * @param callback The callback
   */
  checkNameAvailability(body: Models.CheckNameAvailabilityParameter, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  /**
   * @param body Parameters describing the name to check availability for.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(body: Models.CheckNameAvailabilityParameter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  checkNameAvailability(body: Models.CheckNameAvailabilityParameter, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): Promise<Models.AccountsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.AccountsCheckNameAvailabilityResponse>;
  }

  /**
   * Gets all Visual Studio Team Services account resources under the resource group linked to the
   * specified Azure subscription.
   * @summary Accounts_ListByResourceGroup
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AccountResourceListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountResourceListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountResourceListResult>, callback?: msRest.ServiceCallback<Models.AccountResourceListResult>): Promise<Models.AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AccountsListByResourceGroupResponse>;
  }

  /**
   * Creates or updates a Visual Studio Team Services account resource.
   * @summary Accounts_CreateOrUpdate
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body The request data.
   * @param resourceName Name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, body: Models.AccountResourceRequest, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body The request data.
   * @param resourceName Name of the resource.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, body: Models.AccountResourceRequest, resourceName: string, callback: msRest.ServiceCallback<Models.AccountResource>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body The request data.
   * @param resourceName Name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, body: Models.AccountResourceRequest, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountResource>): void;
  createOrUpdate(resourceGroupName: string, body: Models.AccountResourceRequest, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountResource>, callback?: msRest.ServiceCallback<Models.AccountResource>): Promise<Models.AccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        body,
        resourceName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AccountsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a Visual Studio Team Services account resource.
   * @summary Accounts_Delete
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param resourceName Name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param resourceName Name of the resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param resourceName Name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the Visual Studio Team Services account resource details.
   * @summary Accounts_Get
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param resourceName Name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param resourceName Name of the resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.AccountResource>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param resourceName Name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountResource>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountResource>, callback?: msRest.ServiceCallback<Models.AccountResource>): Promise<Models.AccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccountsGetResponse>;
  }

  /**
   * Updates tags for Visual Studio Team Services account resource.
   * @summary Accounts_Update
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body The request data.
   * @param resourceName Name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccountsUpdateResponse>
   */
  update(resourceGroupName: string, body: Models.AccountTagRequest, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccountsUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body The request data.
   * @param resourceName Name of the resource.
   * @param callback The callback
   */
  update(resourceGroupName: string, body: Models.AccountTagRequest, resourceName: string, callback: msRest.ServiceCallback<Models.AccountResource>): void;
  /**
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param body The request data.
   * @param resourceName Name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, body: Models.AccountTagRequest, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccountResource>): void;
  update(resourceGroupName: string, body: Models.AccountTagRequest, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccountResource>, callback?: msRest.ServiceCallback<Models.AccountResource>): Promise<Models.AccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        body,
        resourceName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccountsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/microsoft.visualstudio/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.CheckNameAvailabilityParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.AccountResourceRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccountResource
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccountResource
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.AccountTagRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccountResource
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
