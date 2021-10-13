/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * A generic Azure Resource Manager resource.
 */
export interface Resource extends BaseResource {
  /**
   * Unique identifier of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource location.
   */
  location?: string;
  /**
   * Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The response to an account resource GET request.
 */
export interface AccountResource extends Resource {
  /**
   * Resource properties.
   */
  properties?: { [propertyName: string]: string };
}

/**
 * The response to an account resource list GET request.
 */
export interface AccountResourceListResult {
  /**
   * Array of resource details.
   */
  value?: AccountResource[];
}

/**
 * The body of a Patch request to add tags to a Visual Studio account resource.
 */
export interface AccountTagRequest {
  /**
   * The custom tags of the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The body of a PUT request to modify a Visual Studio account resource.
 */
export interface AccountResourceRequest {
  /**
   * The account name.
   */
  accountName?: string;
  /**
   * The Azure instance location.
   */
  location?: string;
  /**
   * The type of the operation.
   */
  operationType?: any;
  /**
   * The custom properties of the resource.
   */
  properties?: { [propertyName: string]: string };
  /**
   * The custom tags of the resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The body of a POST request to check name availability.
 */
export interface CheckNameAvailabilityParameter {
  /**
   * The name of the resource to check availability for.
   */
  resourceName?: string;
  /**
   * The type of resource to check availability for.
   */
  resourceType?: string;
}

/**
 * The response to a name availability request.
 */
export interface CheckNameAvailabilityResult {
  /**
   * The message describing the detailed reason.
   */
  message?: string;
  /**
   * The value which indicates whether the provided name is available.
   */
  nameAvailable?: boolean;
}

/**
 * Plan data for an extension resource.
 */
export interface ExtensionResourcePlan {
  /**
   * Name of the plan.
   */
  name?: string;
  /**
   * Product name.
   */
  product?: string;
  /**
   * Optional: the promotion code associated with the plan.
   */
  promotionCode?: string;
  /**
   * Name of the extension publisher.
   */
  publisher?: string;
  /**
   * A string that uniquely identifies the plan version.
   */
  version?: string;
}

/**
 * The response to an extension resource GET request.
 */
export interface ExtensionResource extends Resource {
  /**
   * The extension plan that was purchased.
   */
  plan?: ExtensionResourcePlan;
  /**
   * Resource properties.
   */
  properties?: { [propertyName: string]: string };
}

/**
 * The response to an extension resource list GET request.
 */
export interface ExtensionResourceListResult {
  /**
   * Array of extension resource details.
   */
  value?: ExtensionResource[];
}

/**
 * The body of an extension resource PUT request.
 */
export interface ExtensionResourceRequest {
  /**
   * The Azure region of the Visual Studio account associated with this request (i.e
   * 'southcentralus'.)
   */
  location?: string;
  /**
   * Extended information about the plan being purchased for this extension resource.
   */
  plan?: ExtensionResourcePlan;
  /**
   * A dictionary of extended properties. This property is currently unused.
   */
  properties?: { [propertyName: string]: string };
  /**
   * A dictionary of user-defined tags to be stored with the extension resource.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Properties of an operation supported by the resource provider.
 */
export interface OperationProperties {
  /**
   * The description of the resource operation.
   */
  description?: string;
  /**
   * The operation name.
   */
  operation?: string;
  /**
   * The provider name.
   */
  provider?: string;
  /**
   * The resource name.
   */
  resource?: string;
}

/**
 * Properties of an operation supported by the resource provider.
 */
export interface Operation {
  /**
   * The properties of the resource operation.
   */
  display?: OperationProperties;
  /**
   * The name of the resource operation.
   */
  name?: string;
}

/**
 * Container for a list of operations supported by a resource provider.
 */
export interface OperationListResult {
  /**
   * A list of operations supported by a resource provider.
   */
  value?: Operation[];
}

/**
 * A Visual Studio Team Services project resource.
 */
export interface ProjectResource extends Resource {
  /**
   * Key/value pair of resource properties.
   */
  properties?: { [propertyName: string]: string };
}

/**
 * The response to a request to list Team Services project resources in a resource group/account.
 */
export interface ProjectResourceListResult {
  /**
   * List of project resource details.
   */
  value?: ProjectResource[];
}

/**
 * Optional Parameters.
 */
export interface ProjectsCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * This parameter is ignored and should be set to an empty string.
   */
  validating?: string;
}

/**
 * Optional Parameters.
 */
export interface ProjectsGetJobStatusOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The job identifier.
   */
  jobId?: string;
}

/**
 * Optional Parameters.
 */
export interface ProjectsBeginCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * This parameter is ignored and should be set to an empty string.
   */
  validating?: string;
}

/**
 * An interface representing VisualStudioResourceProviderClientOptions.
 */
export interface VisualStudioResourceProviderClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type AccountsCheckNameAvailabilityResponse = CheckNameAvailabilityResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckNameAvailabilityResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AccountsListByResourceGroupResponse = AccountResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccountResourceListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AccountsCreateOrUpdateResponse = AccountResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccountResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AccountsGetResponse = AccountResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccountResource;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AccountsUpdateResponse = AccountResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AccountResource;
    };
};

/**
 * Contains response data for the listByAccount operation.
 */
export type ExtensionsListByAccountResponse = ExtensionResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ExtensionResourceListResult;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ExtensionsCreateResponse = ExtensionResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ExtensionResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ExtensionsGetResponse = ExtensionResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ExtensionResource;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ExtensionsUpdateResponse = ExtensionResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ExtensionResource;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ProjectsListByResourceGroupResponse = ProjectResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProjectResourceListResult;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ProjectsCreateResponse = ProjectResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProjectResource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ProjectsGetResponse = ProjectResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProjectResource;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ProjectsUpdateResponse = ProjectResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProjectResource;
    };
};

/**
 * Contains response data for the getJobStatus operation.
 */
export type ProjectsGetJobStatusResponse = ProjectResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProjectResource;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ProjectsBeginCreateResponse = ProjectResource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProjectResource;
    };
};
