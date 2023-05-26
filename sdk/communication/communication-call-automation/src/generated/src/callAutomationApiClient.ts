/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import {
  CallConnectionImpl,
  CallMediaImpl,
  CallRecordingImpl
} from "./operations";
import {
  CallConnection,
  CallMedia,
  CallRecording
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  CallAutomationApiClientOptionalParams,
  CreateCallRequest,
  CreateCallOptionalParams,
  CreateCallResponse,
  AnswerCallRequest,
  AnswerCallOptionalParams,
  AnswerCallResponse,
  RedirectCallRequest,
  RedirectCallOptionalParams,
  RejectCallRequest,
  RejectCallOptionalParams
} from "./models";

export class CallAutomationApiClient extends coreClient.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the CallAutomationApiClient class.
   * @param endpoint The endpoint of the Azure Communication resource.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: CallAutomationApiClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: CallAutomationApiClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-azure-communication-call-automation/1.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{endpoint}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2023-03-06";
    this.callConnection = new CallConnectionImpl(this);
    this.callMedia = new CallMediaImpl(this);
    this.callRecording = new CallRecordingImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Create an outbound call.
   * @param createCallRequest The create call request.
   * @param options The options parameters.
   */
  createCall(
    createCallRequest: CreateCallRequest,
    options?: CreateCallOptionalParams
  ): Promise<CreateCallResponse> {
    return this.sendOperationRequest(
      { createCallRequest, options },
      createCallOperationSpec
    );
  }

  /**
   * Answer a call using the IncomingCallContext from Event Grid.
   * @param answerCallRequest The answer call request.
   * @param options The options parameters.
   */
  answerCall(
    answerCallRequest: AnswerCallRequest,
    options?: AnswerCallOptionalParams
  ): Promise<AnswerCallResponse> {
    return this.sendOperationRequest(
      { answerCallRequest, options },
      answerCallOperationSpec
    );
  }

  /**
   * Redirect a call.
   * @param redirectCallRequest The redirect call request.
   * @param options The options parameters.
   */
  redirectCall(
    redirectCallRequest: RedirectCallRequest,
    options?: RedirectCallOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { redirectCallRequest, options },
      redirectCallOperationSpec
    );
  }

  /**
   * Reject the call.
   * @param rejectCallRequest The reject call request.
   * @param options The options parameters.
   */
  rejectCall(
    rejectCallRequest: RejectCallRequest,
    options?: RejectCallOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { rejectCallRequest, options },
      rejectCallOperationSpec
    );
  }

  callConnection: CallConnection;
  callMedia: CallMedia;
  callRecording: CallRecording;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CallConnectionPropertiesInternal
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.createCallRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent
  ],
  mediaType: "json",
  serializer
};
const answerCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections:answer",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CallConnectionPropertiesInternal
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.answerCallRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent
  ],
  mediaType: "json",
  serializer
};
const redirectCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections:redirect",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.redirectCallRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent
  ],
  mediaType: "json",
  serializer
};
const rejectCallOperationSpec: coreClient.OperationSpec = {
  path: "/calling/callConnections:reject",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.rejectCallRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent
  ],
  mediaType: "json",
  serializer
};
