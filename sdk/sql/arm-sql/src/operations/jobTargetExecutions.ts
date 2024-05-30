/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JobTargetExecutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  JobExecution,
  JobTargetExecutionsListByJobExecutionNextOptionalParams,
  JobTargetExecutionsListByJobExecutionOptionalParams,
  JobTargetExecutionsListByJobExecutionResponse,
  JobTargetExecutionsListByStepNextOptionalParams,
  JobTargetExecutionsListByStepOptionalParams,
  JobTargetExecutionsListByStepResponse,
  JobTargetExecutionsGetOptionalParams,
  JobTargetExecutionsGetResponse,
  JobTargetExecutionsListByJobExecutionNextResponse,
  JobTargetExecutionsListByStepNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobTargetExecutions operations. */
export class JobTargetExecutionsImpl implements JobTargetExecutions {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobTargetExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists target executions for all steps of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  public listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams,
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listByJobExecutionPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByJobExecutionPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          jobExecutionId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByJobExecutionPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JobExecution[]> {
    let result: JobTargetExecutionsListByJobExecutionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByJobExecution(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByJobExecutionNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByJobExecutionPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams,
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listByJobExecutionPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the target executions of a job step execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  public listByStep(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams,
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listByStepPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByStepPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          jobExecutionId,
          stepName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByStepPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JobExecution[]> {
    let result: JobTargetExecutionsListByStepResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByStep(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByStepNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByStepPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams,
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listByStepPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      jobExecutionId,
      stepName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists target executions for all steps of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  private _listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams,
  ): Promise<JobTargetExecutionsListByJobExecutionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        options,
      },
      listByJobExecutionOperationSpec,
    );
  }

  /**
   * Lists the target executions of a job step execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  private _listByStep(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams,
  ): Promise<JobTargetExecutionsListByStepResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        options,
      },
      listByStepOperationSpec,
    );
  }

  /**
   * Gets a target execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param targetId The target id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    targetId: string,
    options?: JobTargetExecutionsGetOptionalParams,
  ): Promise<JobTargetExecutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        targetId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListByJobExecutionNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param nextLink The nextLink from the previous successful call to the ListByJobExecution method.
   * @param options The options parameters.
   */
  private _listByJobExecutionNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    nextLink: string,
    options?: JobTargetExecutionsListByJobExecutionNextOptionalParams,
  ): Promise<JobTargetExecutionsListByJobExecutionNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        nextLink,
        options,
      },
      listByJobExecutionNextOperationSpec,
    );
  }

  /**
   * ListByStepNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param nextLink The nextLink from the previous successful call to the ListByStep method.
   * @param options The options parameters.
   */
  private _listByStepNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    nextLink: string,
    options?: JobTargetExecutionsListByStepNextOptionalParams,
  ): Promise<JobTargetExecutionsListByStepNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobExecutionId,
        stepName,
        nextLink,
        options,
      },
      listByStepNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByJobExecutionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/targets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult,
    },
    default: {},
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion3,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByStepOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult,
    },
    default: {},
  },
  queryParameters: [
    Parameters.skip,
    Parameters.apiVersion3,
    Parameters.createTimeMin,
    Parameters.createTimeMax,
    Parameters.endTimeMin,
    Parameters.endTimeMax,
    Parameters.isActive,
    Parameters.top,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/executions/{jobExecutionId}/steps/{stepName}/targets/{targetId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
    Parameters.targetId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByJobExecutionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByStepNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobExecutionId,
    Parameters.stepName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
