// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { CodeSigningClient, CodeSigningClientOptionalParams } from "./codeSigningClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export {
  Resource,
  SystemData,
  KnownCreatedByType,
  CreatedByType,
  ProxyResource,
  CertificateProfile,
  CertificateProfileProperties,
  KnownProfileType,
  ProfileType,
  KnownProvisioningState,
  ProvisioningState,
  KnownCertificateProfileStatus,
  CertificateProfileStatus,
  Certificate,
  KnownCertificateStatus,
  CertificateStatus,
  Revocation,
  KnownRevocationStatus,
  RevocationStatus,
  RevokeCertificate,
  TrackedResource,
  CodeSigningAccount,
  CodeSigningAccountProperties,
  AccountSku,
  KnownSkuName,
  SkuName,
  CodeSigningAccountPatch,
  CodeSigningAccountPatchProperties,
  CheckNameAvailability,
  CheckNameAvailabilityResult,
  KnownNameUnavailabilityReason,
  NameUnavailabilityReason,
  Operation,
  OperationDisplay,
  KnownOrigin,
  Origin,
  KnownActionType,
  ActionType,
  OperationsListOptionalParams,
  CodeSigningAccountsGetOptionalParams,
  CodeSigningAccountsCreateOptionalParams,
  CodeSigningAccountsUpdateOptionalParams,
  CodeSigningAccountsDeleteOptionalParams,
  CodeSigningAccountsListByResourceGroupOptionalParams,
  CodeSigningAccountsListBySubscriptionOptionalParams,
  CodeSigningAccountsCheckNameAvailabilityOptionalParams,
  CertificateProfilesGetOptionalParams,
  CertificateProfilesCreateOptionalParams,
  CertificateProfilesDeleteOptionalParams,
  CertificateProfilesListByCodeSigningAccountOptionalParams,
  CertificateProfilesRevokeCertificateOptionalParams,
} from "./models/index.js";
export {
  CertificateProfilesOperations,
  CodeSigningAccountsOperations,
  OperationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
