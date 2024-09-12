/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TableServiceProperties,
  ServiceSetPropertiesOptionalParams,
  ServiceSetPropertiesResponse,
  ServiceGetPropertiesOptionalParams,
  ServiceGetPropertiesResponse,
  ServiceGetStatisticsOptionalParams,
  ServiceGetStatisticsResponse
} from "../models/index.js";

/** Interface representing a Service. */
export interface Service {
  /**
   * Sets properties for an account's Table service endpoint, including properties for Analytics and CORS
   * (Cross-Origin Resource Sharing) rules.
   * @param tableServiceProperties The Table Service properties.
   * @param options The options parameters.
   */
  setProperties(
    tableServiceProperties: TableServiceProperties,
    options?: ServiceSetPropertiesOptionalParams
  ): Promise<ServiceSetPropertiesResponse>;
  /**
   * Gets the properties of an account's Table service, including properties for Analytics and CORS
   * (Cross-Origin Resource Sharing) rules.
   * @param options The options parameters.
   */
  getProperties(
    options?: ServiceGetPropertiesOptionalParams
  ): Promise<ServiceGetPropertiesResponse>;
  /**
   * Retrieves statistics related to replication for the Table service. It is only available on the
   * secondary location endpoint when read-access geo-redundant replication is enabled for the account.
   * @param options The options parameters.
   */
  getStatistics(
    options?: ServiceGetStatisticsOptionalParams
  ): Promise<ServiceGetStatisticsResponse>;
}
