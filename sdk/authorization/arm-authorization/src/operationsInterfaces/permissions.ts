/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Permission,
  PermissionsListForResourceGroupOptionalParams,
  PermissionsListForResourceOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Permissions. */
export interface Permissions {
  /**
   * Gets all permissions the caller has for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listForResourceGroup(
    resourceGroupName: string,
    options?: PermissionsListForResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Permission>;
  /**
   * Gets all permissions the caller has for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get the permissions for.
   * @param options The options parameters.
   */
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: PermissionsListForResourceOptionalParams
  ): PagedAsyncIterableIterator<Permission>;
}
