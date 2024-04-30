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
  PartnerTopic,
  PartnerTopicsListBySubscriptionOptionalParams,
  PartnerTopicsListByResourceGroupOptionalParams,
  PartnerTopicsGetOptionalParams,
  PartnerTopicsGetResponse,
  PartnerTopicsCreateOrUpdateOptionalParams,
  PartnerTopicsCreateOrUpdateResponse,
  PartnerTopicsDeleteOptionalParams,
  PartnerTopicUpdateParameters,
  PartnerTopicsUpdateOptionalParams,
  PartnerTopicsUpdateResponse,
  PartnerTopicsActivateOptionalParams,
  PartnerTopicsActivateResponse,
  PartnerTopicsDeactivateOptionalParams,
  PartnerTopicsDeactivateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PartnerTopics. */
export interface PartnerTopics {
  /**
   * List all the partner topics under an Azure subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: PartnerTopicsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<PartnerTopic>;
  /**
   * List all the partner topics under a resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: PartnerTopicsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<PartnerTopic>;
  /**
   * Get properties of a partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsGetOptionalParams,
  ): Promise<PartnerTopicsGetResponse>;
  /**
   * Asynchronously creates a new partner topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param partnerTopicInfo Partner Topic information.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    partnerTopicName: string,
    partnerTopicInfo: PartnerTopic,
    options?: PartnerTopicsCreateOrUpdateOptionalParams,
  ): Promise<PartnerTopicsCreateOrUpdateResponse>;
  /**
   * Delete existing partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete existing partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Asynchronously updates a partner topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param partnerTopicUpdateParameters PartnerTopic update information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    partnerTopicName: string,
    partnerTopicUpdateParameters: PartnerTopicUpdateParameters,
    options?: PartnerTopicsUpdateOptionalParams,
  ): Promise<PartnerTopicsUpdateResponse>;
  /**
   * Activate a newly created partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param options The options parameters.
   */
  activate(
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsActivateOptionalParams,
  ): Promise<PartnerTopicsActivateResponse>;
  /**
   * Deactivate specific partner topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerTopicName Name of the partner topic.
   * @param options The options parameters.
   */
  deactivate(
    resourceGroupName: string,
    partnerTopicName: string,
    options?: PartnerTopicsDeactivateOptionalParams,
  ): Promise<PartnerTopicsDeactivateResponse>;
}
