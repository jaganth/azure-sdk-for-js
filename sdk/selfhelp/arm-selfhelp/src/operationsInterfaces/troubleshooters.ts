/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TroubleshootersCreateOptionalParams,
  TroubleshootersCreateResponse,
  TroubleshootersGetOptionalParams,
  TroubleshootersGetResponse,
  TroubleshootersContinueOptionalParams,
  TroubleshootersContinueResponse,
  TroubleshootersEndOptionalParams,
  TroubleshootersEndResponse,
  TroubleshootersRestartOptionalParams,
  TroubleshootersRestartResponse,
} from "../models";

/** Interface representing a Troubleshooters. */
export interface Troubleshooters {
  /**
   * Creates the specific troubleshooter action under a resource or subscription using the ‘solutionId’
   * and  ‘properties.parameters’ as the trigger. <br/> Azure Troubleshooters help with hard to classify
   * issues, reducing the gap between customer observed problems and solutions by guiding the user
   * effortlessly through the troubleshooting process. Each Troubleshooter flow represents a problem area
   * within Azure and has a complex tree-like structure that addresses many root causes. These flows are
   * prepared with the help of Subject Matter experts and customer support engineers by carefully
   * considering previous support requests raised by customers. Troubleshooters terminate at a well
   * curated solution based off of resource backend signals and customer manual selections.
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  create(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersCreateOptionalParams,
  ): Promise<TroubleshootersCreateResponse>;
  /**
   * Gets troubleshooter instance result which includes the step status/result of the troubleshooter
   * resource name that is being executed.<br/> Get API is used to retrieve the result of a
   * Troubleshooter instance, which includes the status and result of each step in the Troubleshooter
   * workflow. This API requires the Troubleshooter resource name that was created using the Create API.
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  get(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersGetOptionalParams,
  ): Promise<TroubleshootersGetResponse>;
  /**
   * Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the
   * respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are
   * required for the specific troubleshooter to progress into the next step in the process. This API is
   * used after the Troubleshooter has been created using the Create API.
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  continue(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersContinueOptionalParams,
  ): Promise<TroubleshootersContinueResponse>;
  /**
   * Ends the troubleshooter action
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  end(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersEndOptionalParams,
  ): Promise<TroubleshootersEndResponse>;
  /**
   * Restarts the troubleshooter API using applicable troubleshooter resource name as the input.<br/> It
   * returns new resource name which should be used in subsequent request. The old resource name is
   * obsolete after this API is invoked.
   * @param scope scope = resourceUri of affected resource.<br/> For example:
   *              /subscriptions/0d0fcd2e-c4fd-4349-8497-200edb3923c6/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-non-read
   *
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  restart(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersRestartOptionalParams,
  ): Promise<TroubleshootersRestartResponse>;
}
