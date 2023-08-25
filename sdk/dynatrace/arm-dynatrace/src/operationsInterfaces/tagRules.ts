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
  TagRule,
  TagRulesListOptionalParams,
  TagRulesGetOptionalParams,
  TagRulesGetResponse,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesCreateOrUpdateResponse,
  TagRulesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TagRules. */
export interface TagRules {
  /**
   * List all TagRule by monitorName
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams
  ): PagedAsyncIterableIterator<TagRule>;
  /**
   * Get a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Monitor resource name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesGetOptionalParams
  ): Promise<TagRulesGetResponse>;
  /**
   * Create a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Monitor resource name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    resource: TagRule,
    options?: TagRulesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<TagRulesCreateOrUpdateResponse>,
      TagRulesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Monitor resource name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    resource: TagRule,
    options?: TagRulesCreateOrUpdateOptionalParams
  ): Promise<TagRulesCreateOrUpdateResponse>;
  /**
   * Delete a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Monitor resource name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a TagRule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Monitor resource name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesDeleteOptionalParams
  ): Promise<void>;
}
