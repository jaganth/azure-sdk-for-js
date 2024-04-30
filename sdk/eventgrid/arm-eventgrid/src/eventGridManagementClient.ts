/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  CaCertificatesImpl,
  ChannelsImpl,
  ClientGroupsImpl,
  ClientsImpl,
  DomainsImpl,
  DomainTopicsImpl,
  DomainTopicEventSubscriptionsImpl,
  TopicEventSubscriptionsImpl,
  DomainEventSubscriptionsImpl,
  EventSubscriptionsImpl,
  SystemTopicEventSubscriptionsImpl,
  NamespaceTopicEventSubscriptionsImpl,
  PartnerTopicEventSubscriptionsImpl,
  NamespacesImpl,
  NamespaceTopicsImpl,
  OperationsImpl,
  PartnerConfigurationsImpl,
  PartnerDestinationsImpl,
  PartnerNamespacesImpl,
  PartnerRegistrationsImpl,
  PartnerTopicsImpl,
  NetworkSecurityPerimeterConfigurationsImpl,
  PermissionBindingsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  SystemTopicsImpl,
  TopicsImpl,
  ExtensionTopicsImpl,
  TopicSpacesImpl,
  TopicTypesImpl,
  VerifiedPartnersImpl,
} from "./operations";
import {
  CaCertificates,
  Channels,
  ClientGroups,
  Clients,
  Domains,
  DomainTopics,
  DomainTopicEventSubscriptions,
  TopicEventSubscriptions,
  DomainEventSubscriptions,
  EventSubscriptions,
  SystemTopicEventSubscriptions,
  NamespaceTopicEventSubscriptions,
  PartnerTopicEventSubscriptions,
  Namespaces,
  NamespaceTopics,
  Operations,
  PartnerConfigurations,
  PartnerDestinations,
  PartnerNamespaces,
  PartnerRegistrations,
  PartnerTopics,
  NetworkSecurityPerimeterConfigurations,
  PermissionBindings,
  PrivateEndpointConnections,
  PrivateLinkResources,
  SystemTopics,
  Topics,
  ExtensionTopics,
  TopicSpaces,
  TopicTypes,
  VerifiedPartners,
} from "./operationsInterfaces";
import { EventGridManagementClientOptionalParams } from "./models";

export class EventGridManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the EventGridManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials that uniquely identify a Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: EventGridManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: EventGridManagementClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: EventGridManagementClientOptionalParams | string,
    options?: EventGridManagementClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: EventGridManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-eventgrid/14.2.0-beta.4`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2024-06-01-preview";
    this.caCertificates = new CaCertificatesImpl(this);
    this.channels = new ChannelsImpl(this);
    this.clientGroups = new ClientGroupsImpl(this);
    this.clients = new ClientsImpl(this);
    this.domains = new DomainsImpl(this);
    this.domainTopics = new DomainTopicsImpl(this);
    this.domainTopicEventSubscriptions = new DomainTopicEventSubscriptionsImpl(
      this,
    );
    this.topicEventSubscriptions = new TopicEventSubscriptionsImpl(this);
    this.domainEventSubscriptions = new DomainEventSubscriptionsImpl(this);
    this.eventSubscriptions = new EventSubscriptionsImpl(this);
    this.systemTopicEventSubscriptions = new SystemTopicEventSubscriptionsImpl(
      this,
    );
    this.namespaceTopicEventSubscriptions =
      new NamespaceTopicEventSubscriptionsImpl(this);
    this.partnerTopicEventSubscriptions =
      new PartnerTopicEventSubscriptionsImpl(this);
    this.namespaces = new NamespacesImpl(this);
    this.namespaceTopics = new NamespaceTopicsImpl(this);
    this.operations = new OperationsImpl(this);
    this.partnerConfigurations = new PartnerConfigurationsImpl(this);
    this.partnerDestinations = new PartnerDestinationsImpl(this);
    this.partnerNamespaces = new PartnerNamespacesImpl(this);
    this.partnerRegistrations = new PartnerRegistrationsImpl(this);
    this.partnerTopics = new PartnerTopicsImpl(this);
    this.networkSecurityPerimeterConfigurations =
      new NetworkSecurityPerimeterConfigurationsImpl(this);
    this.permissionBindings = new PermissionBindingsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.systemTopics = new SystemTopicsImpl(this);
    this.topics = new TopicsImpl(this);
    this.extensionTopics = new ExtensionTopicsImpl(this);
    this.topicSpaces = new TopicSpacesImpl(this);
    this.topicTypes = new TopicTypesImpl(this);
    this.verifiedPartners = new VerifiedPartnersImpl(this);
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
        next: SendRequest,
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
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  caCertificates: CaCertificates;
  channels: Channels;
  clientGroups: ClientGroups;
  clients: Clients;
  domains: Domains;
  domainTopics: DomainTopics;
  domainTopicEventSubscriptions: DomainTopicEventSubscriptions;
  topicEventSubscriptions: TopicEventSubscriptions;
  domainEventSubscriptions: DomainEventSubscriptions;
  eventSubscriptions: EventSubscriptions;
  systemTopicEventSubscriptions: SystemTopicEventSubscriptions;
  namespaceTopicEventSubscriptions: NamespaceTopicEventSubscriptions;
  partnerTopicEventSubscriptions: PartnerTopicEventSubscriptions;
  namespaces: Namespaces;
  namespaceTopics: NamespaceTopics;
  operations: Operations;
  partnerConfigurations: PartnerConfigurations;
  partnerDestinations: PartnerDestinations;
  partnerNamespaces: PartnerNamespaces;
  partnerRegistrations: PartnerRegistrations;
  partnerTopics: PartnerTopics;
  networkSecurityPerimeterConfigurations: NetworkSecurityPerimeterConfigurations;
  permissionBindings: PermissionBindings;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  systemTopics: SystemTopics;
  topics: Topics;
  extensionTopics: ExtensionTopics;
  topicSpaces: TopicSpaces;
  topicTypes: TopicTypes;
  verifiedPartners: VerifiedPartners;
}
