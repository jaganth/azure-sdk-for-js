/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PriceSheet } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CostManagementClient } from "../costManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PriceSheetDownloadOptionalParams,
  PriceSheetDownloadResponse,
  PriceSheetDownloadByBillingProfileOptionalParams,
  PriceSheetDownloadByBillingProfileResponse
} from "../models";

/** Class containing PriceSheet operations. */
export class PriceSheetImpl implements PriceSheet {
  private readonly client: CostManagementClient;

  /**
   * Initialize a new instance of the class PriceSheet class.
   * @param client Reference to the service client
   */
  constructor(client: CostManagementClient) {
    this.client = client;
  }

  /**
   * Gets a URL to download the pricesheet for an invoice. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The options parameters.
   */
  async beginDownload(
    billingAccountName: string,
    billingProfileName: string,
    invoiceName: string,
    options?: PriceSheetDownloadOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PriceSheetDownloadResponse>,
      PriceSheetDownloadResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PriceSheetDownloadResponse> => {
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
      args: { billingAccountName, billingProfileName, invoiceName, options },
      spec: downloadOperationSpec
    });
    const poller = await createHttpPoller<
      PriceSheetDownloadResponse,
      OperationState<PriceSheetDownloadResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Gets a URL to download the pricesheet for an invoice. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceName The ID that uniquely identifies an invoice.
   * @param options The options parameters.
   */
  async beginDownloadAndWait(
    billingAccountName: string,
    billingProfileName: string,
    invoiceName: string,
    options?: PriceSheetDownloadOptionalParams
  ): Promise<PriceSheetDownloadResponse> {
    const poller = await this.beginDownload(
      billingAccountName,
      billingProfileName,
      invoiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a URL to download the current month's pricesheet for a billing profile. The operation is
   * supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer
   * Agreement.Due to Azure product growth, the Azure price sheet download experience in this preview
   * version will be updated from a single csv file to a Zip file containing multiple csv files, each
   * with max 200k records.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  async beginDownloadByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: PriceSheetDownloadByBillingProfileOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PriceSheetDownloadByBillingProfileResponse>,
      PriceSheetDownloadByBillingProfileResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PriceSheetDownloadByBillingProfileResponse> => {
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
      args: { billingAccountName, billingProfileName, options },
      spec: downloadByBillingProfileOperationSpec
    });
    const poller = await createHttpPoller<
      PriceSheetDownloadByBillingProfileResponse,
      OperationState<PriceSheetDownloadByBillingProfileResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Gets a URL to download the current month's pricesheet for a billing profile. The operation is
   * supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer
   * Agreement.Due to Azure product growth, the Azure price sheet download experience in this preview
   * version will be updated from a single csv file to a Zip file containing multiple csv files, each
   * with max 200k records.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  async beginDownloadByBillingProfileAndWait(
    billingAccountName: string,
    billingProfileName: string,
    options?: PriceSheetDownloadByBillingProfileOptionalParams
  ): Promise<PriceSheetDownloadByBillingProfileResponse> {
    const poller = await this.beginDownloadByBillingProfile(
      billingAccountName,
      billingProfileName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const downloadOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices/{invoiceName}/providers/Microsoft.CostManagement/pricesheets/default/download",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DownloadURL
    },
    201: {
      bodyMapper: Mappers.DownloadURL
    },
    202: {
      bodyMapper: Mappers.DownloadURL
    },
    204: {
      bodyMapper: Mappers.DownloadURL
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const downloadByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.CostManagement/pricesheets/default/download",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DownloadURL
    },
    201: {
      bodyMapper: Mappers.DownloadURL
    },
    202: {
      bodyMapper: Mappers.DownloadURL
    },
    204: {
      bodyMapper: Mappers.DownloadURL
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
