/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import { RemoteRendering } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RemoteRenderingRestClient } from "../remoteRenderingRestClient.js";
import {
  CreateConversionSettings,
  RemoteRenderingCreateConversionOptionalParams,
  RemoteRenderingCreateConversionResponse,
  RemoteRenderingGetConversionOptionalParams,
  RemoteRenderingGetConversionResponse,
  RemoteRenderingListConversionsOptionalParams,
  RemoteRenderingListConversionsResponse,
  RenderingSessionSettings,
  RemoteRenderingCreateSessionOptionalParams,
  RemoteRenderingCreateSessionResponse,
  RemoteRenderingGetSessionOptionalParams,
  RemoteRenderingGetSessionResponse,
  UpdateSessionSettings,
  RemoteRenderingUpdateSessionOptionalParams,
  RemoteRenderingUpdateSessionResponse,
  RemoteRenderingStopSessionOptionalParams,
  RemoteRenderingStopSessionResponse,
  RemoteRenderingListSessionsOptionalParams,
  RemoteRenderingListSessionsResponse,
  RemoteRenderingListConversionsNextOptionalParams,
  RemoteRenderingListConversionsNextResponse,
  RemoteRenderingListSessionsNextOptionalParams,
  RemoteRenderingListSessionsNextResponse
} from "../models/index.js";

/** Class containing RemoteRendering operations. */
export class RemoteRenderingImpl implements RemoteRendering {
  private readonly client: RemoteRenderingRestClient;

  /**
   * Initialize a new instance of the class RemoteRendering class.
   * @param client Reference to the service client
   */
  constructor(client: RemoteRenderingRestClient) {
    this.client = client;
  }

  /**
   * Creates a conversion using an asset stored in an Azure Blob Storage account.
   * @param accountId The Azure Remote Rendering account ID.
   * @param conversionId An ID uniquely identifying the conversion for the given account. The ID is case
   *                     sensitive, can contain any combination of alphanumeric characters including hyphens and underscores,
   *                     and cannot contain more than 256 characters.
   * @param body Request body configuring the settings for an asset conversion.
   * @param options The options parameters.
   */
  async createConversion(
    accountId: string,
    conversionId: string,
    body: CreateConversionSettings,
    options?: RemoteRenderingCreateConversionOptionalParams
  ): Promise<RemoteRenderingCreateConversionResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.createConversion",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, conversionId, body, options },
          createConversionOperationSpec
        ) as Promise<RemoteRenderingCreateConversionResponse>;
      }
    );
  }

  /**
   * Gets the status of a particular conversion.
   * @param accountId The Azure Remote Rendering account ID.
   * @param conversionId An ID uniquely identifying the conversion for the given account. The ID is case
   *                     sensitive, can contain any combination of alphanumeric characters including hyphens and underscores,
   *                     and cannot contain more than 256 characters.
   * @param options The options parameters.
   */
  async getConversion(
    accountId: string,
    conversionId: string,
    options?: RemoteRenderingGetConversionOptionalParams
  ): Promise<RemoteRenderingGetConversionResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.getConversion",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, conversionId, options },
          getConversionOperationSpec
        ) as Promise<RemoteRenderingGetConversionResponse>;
      }
    );
  }

  /**
   * Gets a list of all conversions.
   * @param accountId The Azure Remote Rendering account ID.
   * @param options The options parameters.
   */
  async listConversions(
    accountId: string,
    options?: RemoteRenderingListConversionsOptionalParams
  ): Promise<RemoteRenderingListConversionsResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.listConversions",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, options },
          listConversionsOperationSpec
        ) as Promise<RemoteRenderingListConversionsResponse>;
      }
    );
  }

  /**
   * Creates a new rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param body Settings of the session to be created.
   * @param options The options parameters.
   */
  async createSession(
    accountId: string,
    sessionId: string,
    body: RenderingSessionSettings,
    options?: RemoteRenderingCreateSessionOptionalParams
  ): Promise<RemoteRenderingCreateSessionResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.createSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, sessionId, body, options },
          createSessionOperationSpec
        ) as Promise<RemoteRenderingCreateSessionResponse>;
      }
    );
  }

  /**
   * Gets the properties of a particular rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param options The options parameters.
   */
  async getSession(
    accountId: string,
    sessionId: string,
    options?: RemoteRenderingGetSessionOptionalParams
  ): Promise<RemoteRenderingGetSessionResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.getSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, sessionId, options },
          getSessionOperationSpec
        ) as Promise<RemoteRenderingGetSessionResponse>;
      }
    );
  }

  /**
   * Updates the max lease time of a particular rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param body Settings used to update the session.
   * @param options The options parameters.
   */
  async updateSession(
    accountId: string,
    sessionId: string,
    body: UpdateSessionSettings,
    options?: RemoteRenderingUpdateSessionOptionalParams
  ): Promise<RemoteRenderingUpdateSessionResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.updateSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, sessionId, body, options },
          updateSessionOperationSpec
        ) as Promise<RemoteRenderingUpdateSessionResponse>;
      }
    );
  }

  /**
   * Stops a particular rendering session.
   * @param accountId The Azure Remote Rendering account ID.
   * @param sessionId An ID uniquely identifying the rendering session for the given account. The ID is
   *                  case sensitive, can contain any combination of alphanumeric characters including hyphens and
   *                  underscores, and cannot contain more than 256 characters.
   * @param options The options parameters.
   */
  async stopSession(
    accountId: string,
    sessionId: string,
    options?: RemoteRenderingStopSessionOptionalParams
  ): Promise<RemoteRenderingStopSessionResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.stopSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, sessionId, options },
          stopSessionOperationSpec
        ) as Promise<RemoteRenderingStopSessionResponse>;
      }
    );
  }

  /**
   * Gets a list of all rendering sessions.
   * @param accountId The Azure Remote Rendering account ID.
   * @param options The options parameters.
   */
  async listSessions(
    accountId: string,
    options?: RemoteRenderingListSessionsOptionalParams
  ): Promise<RemoteRenderingListSessionsResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.listSessions",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, options },
          listSessionsOperationSpec
        ) as Promise<RemoteRenderingListSessionsResponse>;
      }
    );
  }

  /**
   * ListConversionsNext
   * @param accountId The Azure Remote Rendering account ID.
   * @param nextLink The nextLink from the previous successful call to the ListConversions method.
   * @param options The options parameters.
   */
  async listConversionsNext(
    accountId: string,
    nextLink: string,
    options?: RemoteRenderingListConversionsNextOptionalParams
  ): Promise<RemoteRenderingListConversionsNextResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.listConversionsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, nextLink, options },
          listConversionsNextOperationSpec
        ) as Promise<RemoteRenderingListConversionsNextResponse>;
      }
    );
  }

  /**
   * ListSessionsNext
   * @param accountId The Azure Remote Rendering account ID.
   * @param nextLink The nextLink from the previous successful call to the ListSessions method.
   * @param options The options parameters.
   */
  async listSessionsNext(
    accountId: string,
    nextLink: string,
    options?: RemoteRenderingListSessionsNextOptionalParams
  ): Promise<RemoteRenderingListSessionsNextResponse> {
    return tracingClient.withSpan(
      "RemoteRenderingRestClient.listSessionsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { accountId, nextLink, options },
          listSessionsNextOperationSpec
        ) as Promise<RemoteRenderingListSessionsNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createConversionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/conversions/{conversion_id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Conversion,
      headersMapper: Mappers.RemoteRenderingCreateConversionHeaders
    },
    201: {
      bodyMapper: Mappers.Conversion,
      headersMapper: Mappers.RemoteRenderingCreateConversionHeaders
    },
    400: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    401: {
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    409: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingCreateConversionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.conversionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getConversionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/conversions/{conversion_id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Conversion,
      headersMapper: Mappers.RemoteRenderingGetConversionHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingGetConversionExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.conversionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConversionsOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/conversions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConversionList,
      headersMapper: Mappers.RemoteRenderingListConversionsHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListConversionsExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const createSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SessionProperties
    },
    201: {
      bodyMapper: Mappers.SessionProperties,
      headersMapper: Mappers.RemoteRenderingCreateSessionHeaders
    },
    400: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    401: {
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    409: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingCreateSessionExceptionHeaders,
      isError: true
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionProperties
    },
    401: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingGetSessionExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SessionProperties
    },
    401: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    422: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingUpdateSessionExceptionHeaders,
      isError: true
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const stopSessionOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions/{session_id}/:stop",
  httpMethod: "POST",
  responses: {
    204: {
      headersMapper: Mappers.RemoteRenderingStopSessionHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    404: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingStopSessionExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSessionsOperationSpec: coreClient.OperationSpec = {
  path: "/accounts/{account_id}/sessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionsList
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListSessionsExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.accountId],
  headerParameters: [Parameters.accept],
  serializer
};
const listConversionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConversionList,
      headersMapper: Mappers.RemoteRenderingListConversionsNextHeaders
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListConversionsNextExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSessionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionsList
    },
    401: {
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    },
    403: {
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    },
    429: {
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.RemoteRenderingListSessionsNextExceptionHeaders,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.accountId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
