/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  AutonomousDatabase as AutonomousDatabaseMapper,
  AutonomousDatabaseUpdate as AutonomousDatabaseUpdateMapper,
  PeerDbDetails as PeerDbDetailsMapper,
  GenerateAutonomousDatabaseWalletDetails as GenerateAutonomousDatabaseWalletDetailsMapper,
  CloudExadataInfrastructure as CloudExadataInfrastructureMapper,
  CloudExadataInfrastructureUpdate as CloudExadataInfrastructureUpdateMapper,
  CloudVmCluster as CloudVmClusterMapper,
  CloudVmClusterUpdate as CloudVmClusterUpdateMapper,
  AddRemoveDbNode as AddRemoveDbNodeMapper,
  PrivateIpAddressesFilter as PrivateIpAddressesFilterMapper,
  OracleSubscription as OracleSubscriptionMapper,
  OracleSubscriptionUpdate as OracleSubscriptionUpdateMapper,
  AutonomousDatabaseBackup as AutonomousDatabaseBackupMapper,
  AutonomousDatabaseBackupUpdate as AutonomousDatabaseBackupUpdateMapper,
  DbNodeAction as DbNodeActionMapper,
  VirtualNetworkAddress as VirtualNetworkAddressMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-09-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const autonomousdatabasename: OperationURLParameter = {
  parameterPath: "autonomousdatabasename",
  mapper: {
    constraints: {
      MaxLength: 30,
      MinLength: 1,
    },
    serializedName: "autonomousdatabasename",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: AutonomousDatabaseMapper,
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: AutonomousDatabaseUpdateMapper,
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: PeerDbDetailsMapper,
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: GenerateAutonomousDatabaseWalletDetailsMapper,
};

export const cloudexadatainfrastructurename: OperationURLParameter = {
  parameterPath: "cloudexadatainfrastructurename",
  mapper: {
    serializedName: "cloudexadatainfrastructurename",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: CloudExadataInfrastructureMapper,
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: CloudExadataInfrastructureUpdateMapper,
};

export const cloudvmclustername: OperationURLParameter = {
  parameterPath: "cloudvmclustername",
  mapper: {
    serializedName: "cloudvmclustername",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: CloudVmClusterMapper,
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: CloudVmClusterUpdateMapper,
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: AddRemoveDbNodeMapper,
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: PrivateIpAddressesFilterMapper,
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const adbscharsetname: OperationURLParameter = {
  parameterPath: "adbscharsetname",
  mapper: {
    serializedName: "adbscharsetname",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const adbsncharsetname: OperationURLParameter = {
  parameterPath: "adbsncharsetname",
  mapper: {
    serializedName: "adbsncharsetname",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const autonomousdbversionsname: OperationURLParameter = {
  parameterPath: "autonomousdbversionsname",
  mapper: {
    serializedName: "autonomousdbversionsname",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dbsystemshapename: OperationURLParameter = {
  parameterPath: "dbsystemshapename",
  mapper: {
    serializedName: "dbsystemshapename",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dnsprivateviewocid: OperationURLParameter = {
  parameterPath: "dnsprivateviewocid",
  mapper: {
    constraints: {
      MaxLength: 255,
      MinLength: 1,
    },
    serializedName: "dnsprivateviewocid",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dnsprivatezonename: OperationURLParameter = {
  parameterPath: "dnsprivatezonename",
  mapper: {
    serializedName: "dnsprivatezonename",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const giversionname: OperationURLParameter = {
  parameterPath: "giversionname",
  mapper: {
    serializedName: "giversionname",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource3: OperationParameter = {
  parameterPath: "resource",
  mapper: OracleSubscriptionMapper,
};

export const properties3: OperationParameter = {
  parameterPath: "properties",
  mapper: OracleSubscriptionUpdateMapper,
};

export const adbbackupid: OperationURLParameter = {
  parameterPath: "adbbackupid",
  mapper: {
    serializedName: "adbbackupid",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource4: OperationParameter = {
  parameterPath: "resource",
  mapper: AutonomousDatabaseBackupMapper,
};

export const properties4: OperationParameter = {
  parameterPath: "properties",
  mapper: AutonomousDatabaseBackupUpdateMapper,
};

export const dbserverocid: OperationURLParameter = {
  parameterPath: "dbserverocid",
  mapper: {
    constraints: {
      MaxLength: 255,
      MinLength: 1,
    },
    serializedName: "dbserverocid",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const dbnodeocid: OperationURLParameter = {
  parameterPath: "dbnodeocid",
  mapper: {
    constraints: {
      MaxLength: 255,
      MinLength: 1,
    },
    serializedName: "dbnodeocid",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: DbNodeActionMapper,
};

export const virtualnetworkaddressname: OperationURLParameter = {
  parameterPath: "virtualnetworkaddressname",
  mapper: {
    constraints: {
      MaxLength: 63,
      MinLength: 1,
    },
    serializedName: "virtualnetworkaddressname",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const resource5: OperationParameter = {
  parameterPath: "resource",
  mapper: VirtualNetworkAddressMapper,
};
