// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  API_VERSION,
  InternalEnvironmentVariables,
  MINIMUM_SUPPORTED_PLAYWRIGHT_VERSION,
  ServiceEnvironmentVariable,
} from "../../src/common/constants.js";
import * as utils from "../../src/utils/utils.js";
import {
  getAccessToken,
  getServiceBaseURL,
  getAndSetRunId,
  getServiceWSEndpoint,
  validateServiceUrl,
  validateMptPAT,
  exitWithFailureMessage,
  fetchOrValidateAccessToken,
  emitReportingUrl,
  populateValuesFromServiceUrl,
} from "../../src/utils/utils.js";
import * as EntraIdAccessTokenModule from "../../src/common/entraIdAccessToken.js";
import * as packageManager from "../../src/utils/packageManager.js";
import { describe, it, assert, expect, vi, beforeEach, afterEach } from "vitest";
import process from "node:process";

describe("Service Utils", () => {
  beforeEach(() => {
    vi.stubEnv(
      InternalEnvironmentVariables.MPT_PLAYWRIGHT_VERSION,
      MINIMUM_SUPPORTED_PLAYWRIGHT_VERSION,
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("should return access token set in env variable", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");
    expect(getAccessToken()).to.equal("test");
  });

  it("should return undefined if access token is not set in env variable", () => {
    assert.isUndefined(getAccessToken());
  });

  it("should return service base url set in env variable", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_URL, "test");
    expect(getServiceBaseURL()).to.equal("test");
  });

  it("should return undefined if service base url is not set in env variable", () => {
    assert.isUndefined(getServiceBaseURL());
  });

  it("should return and set run id set in env variable", () => {
    const runId = getAndSetRunId();
    expect(runId).to.be.a("string");
    expect(process.env[InternalEnvironmentVariables.MPT_SERVICE_RUN_ID]).to.equal(runId);
  });

  it("should return service base url with query params and should escape runID", () => {
    vi.stubEnv(
      ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_URL,
      "wss://eastus.api.playwright.microsoft.com/accounts/1234/browsers",
    );
    const runId = "2021-10-11T07:00:00.000Z";
    const escapeRunId = encodeURIComponent(runId);
    const os = "windows";
    const expected = `wss://eastus.api.playwright.microsoft.com/accounts/1234/browsers?runId=${escapeRunId}&os=${os}&api-version=${API_VERSION}`;
    expect(getServiceWSEndpoint(runId, os)).to.equal(expected);
  });

  it("should escape special character in runId", () => {
    vi.stubEnv(
      ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_URL,
      "wss://eastus.api.playwright.microsoft.com/accounts/1234/browsers",
    );
    const runId = "2021-10-11T07:00:00.000Z";
    const escapeRunId = encodeURIComponent(runId);
    const os = "windows";
    const expected = `wss://eastus.api.playwright.microsoft.com/accounts/1234/browsers?runId=${escapeRunId}&os=${os}&api-version=${API_VERSION}`;
    expect(getServiceWSEndpoint(runId, os)).to.equal(expected);
  });

  it("should exit with error message if service url is not set", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_URL, "");
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateServiceUrl()).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should be no-op if service url is set", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_URL, "test");
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateServiceUrl()).not.to.throw();
    expect(exitStub).not.toHaveBeenCalled();
  });

  it("should exit with error message if MPT PAT is not set", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "");
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateMptPAT(exitWithFailureMessage)).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should exit with error message if MPT PAT is not valid", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateMptPAT(exitWithFailureMessage)).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should exit with error message if invalid token is set in env variable", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");
    vi.spyOn(utils, "parseJwt").mockReturnValue({});
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateMptPAT(exitWithFailureMessage)).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should exit with error message if MPT PAT is expired", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");
    vi.spyOn(utils, "parseJwt").mockReturnValue({ exp: Date.now() / 1000 - 10 });
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateMptPAT(exitWithFailureMessage)).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should be no-op if MPT PAT is valid", () => {
    vi.mock("node:process", { spy: true });

    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");

    vi.spyOn(utils, "parseJwt").mockReturnValue({ exp: Date.now() / 1000 + 10 });

    expect(() => validateMptPAT(exitWithFailureMessage)).not.to.throw();
  });

  it("Should exit with an error message if the MPT PAT and service URL are from different workspaces", () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");

    vi.spyOn(utils, "parseJwt").mockReturnValue({
      aid: "eastasia_c24330dd-9249-4ae8-9ba9-b5766060427c",
    });

    vi.spyOn(utils, "populateValuesFromServiceUrl").mockReturnValue({
      region: "",
      accountId: "eastasia_8bda26b5-300f-4f4f-810d-eae055e4a69b",
    });

    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateMptPAT(exitWithFailureMessage)).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should be no-op if the MPT PAT and service URL are from same workspaces", () => {
    vi.spyOn(process, "exit");

    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "test");

    vi.spyOn(utils, "parseJwt").mockReturnValue({
      aid: "eastasia_8bda26b5-300f-4f4f-810d-eae055e4a69b",
    });

    vi.spyOn(utils, "populateValuesFromServiceUrl").mockReturnValue({
      region: "",
      accountId: "eastasia_8bda26b5-300f-4f4f-810d-eae055e4a69b",
    });

    expect(() => validateMptPAT(exitWithFailureMessage)).not.to.throw();
  });

  it("should not exit the process if workspace URL is mismatched", () => {
    const exitStub = vi.spyOn(process, "exit");

    vi.stubEnv(
      "PLAYWRIGHT_SERVICE_URL",
      "wss://eastus.api.playwright.microsoft.com/accounts/wrong-id/browsers",
    );

    const result = populateValuesFromServiceUrl();

    expect(result).to.deep.equal({ region: "eastus", accountId: "wrong-id" });
    expect(exitStub).not.toHaveBeenCalled();
  });

  it("should return entra access token (not close to expiry)", async () => {
    const tokenMock = "test";
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, tokenMock);

    const entraIdAccessToken = {
      token: tokenMock,
      doesEntraIdAccessTokenNeedRotation: vi.fn().mockReturnValue(false),
      fetchEntraIdAccessToken: vi.fn(),
    };

    vi.spyOn(EntraIdAccessTokenModule, "EntraIdAccessToken").mockReturnValue(
      entraIdAccessToken as any,
    );

    const token = await fetchOrValidateAccessToken();

    expect(entraIdAccessToken.doesEntraIdAccessTokenNeedRotation).toHaveBeenCalled();
    expect(entraIdAccessToken.fetchEntraIdAccessToken).not.toHaveBeenCalled();

    expect(token).to.equal(tokenMock);
  });

  it("should fetch entra access token if expired", async () => {
    const tokenMock = "test";
    const newTokenMock = "newTest";
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, tokenMock);
    const entraIdAccessToken = {
      token: tokenMock,
      doesEntraIdAccessTokenNeedRotation: vi.fn().mockReturnValue(true),
      fetchEntraIdAccessToken: vi.fn().mockImplementation(() => {
        process.env[ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN] = newTokenMock;
      }),
    };

    vi.spyOn(EntraIdAccessTokenModule, "EntraIdAccessToken").mockReturnValue(
      entraIdAccessToken as any,
    );

    const token = await fetchOrValidateAccessToken();
    expect(entraIdAccessToken.doesEntraIdAccessTokenNeedRotation).toHaveBeenCalled();
    expect(entraIdAccessToken.fetchEntraIdAccessToken).toHaveBeenCalled();

    expect(token).to.equal(newTokenMock);
  });

  it("should fetch entra access token using passed credentials if expired", async () => {
    const tokenMock = "test";
    const newTokenMock = "newTest";
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, tokenMock);

    const expiry = Date.now();

    vi.spyOn(utils, "parseJwt").mockReturnValue({ exp: expiry / 1000 });

    const credential = {
      getToken: vi.fn().mockResolvedValue({
        token: newTokenMock,
        expiresOnTimestamp: Date.now() / 1000,
      }),
    };

    const token = await fetchOrValidateAccessToken(credential);

    expect(credential.getToken).toHaveBeenCalled();
    expect(token).to.equal(newTokenMock);
  });

  it("should return mpt pat", async () => {
    const tokenMock = "test";
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, tokenMock);
    const entraIdAccessToken = {
      token: "",
      doesEntraIdAccessTokenNeedRotation: vi.fn().mockReturnValue(false),
      fetchEntraIdAccessToken: vi.fn(),
    };

    vi.spyOn(EntraIdAccessTokenModule, "EntraIdAccessToken").mockReturnValue(
      entraIdAccessToken as any,
    );

    const token = await fetchOrValidateAccessToken();

    expect(entraIdAccessToken.doesEntraIdAccessTokenNeedRotation).not.toHaveBeenCalled();
    expect(entraIdAccessToken.fetchEntraIdAccessToken).not.toHaveBeenCalled();
    expect(token).to.equal(tokenMock);
  });

  it("should throw error if no auth token is set", async () => {
    vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_ACCESS_TOKEN, "");

    const entraIdAccessToken = {
      token: "",
    };

    vi.spyOn(EntraIdAccessTokenModule, "EntraIdAccessToken").mockReturnValue(
      entraIdAccessToken as any,
    );

    await expect(fetchOrValidateAccessToken()).rejects.toThrow();
  });

  it("should print error message and exit", () => {
    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      return undefined as never;
    });
    const consoleErrorSpy = vi.spyOn(console, "error");

    exitWithFailureMessage({ key: "error", message: "error message" });

    expect(exitStub).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith("error message");
  });

  it("should be able to parse and set reporting environment url", () => {
    const testRubrics = [
      {
        serviceUrl:
          "wss://eastus.api.playwright.microsoft.com/accounts/eastus_bd830e63-6120-40cb-8cd7-f0739502d888/browsers",
        reportingUrl: "https://eastus.reporting.api.playwright.microsoft.com",
      },
      {
        serviceUrl:
          "wss://westus.api.playwright.microsoft.com/accounts/cd830e63-6120-40cb-8cd7-f0739502d777/browsers",
        reportingUrl: "https://westus.reporting.api.playwright.microsoft.com",
      },
      {
        serviceUrl:
          "wss://eastus.api.playwright-int.io/accounts/eastus_bd830e63-6120-40cb-8cd7-f0739502d888/browsers",
        reportingUrl: "https://eastus.reporting.api.playwright-int.io",
      },
      {
        serviceUrl:
          "wss://eastasia.api.playwright-test.io/accounts/eastus_bd830e63-6120-40cb-8cd7-f0739502d888/browsers",
        reportingUrl: "https://eastasia.reporting.api.playwright-test.io",
      },
    ];

    testRubrics.forEach(({ serviceUrl, reportingUrl }) => {
      vi.stubEnv(ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_URL, serviceUrl);

      emitReportingUrl();

      expect(process.env[ServiceEnvironmentVariable.PLAYWRIGHT_SERVICE_REPORTING_URL]).to.equal(
        reportingUrl,
      );
    });
  });

  it("should return version info with major only", () => {
    const version = "1";

    const versionInfo = utils.getVersionInfo(version);

    expect(versionInfo.major).to.equal(1);
    expect(versionInfo.minor).to.equal(0);
    expect(versionInfo.patch).to.equal(0);
  });

  it("should return version info with major, minor only", () => {
    const version = "1.47";

    const versionInfo = utils.getVersionInfo(version);

    expect(versionInfo.major).to.equal(1);
    expect(versionInfo.minor).to.equal(47);
    expect(versionInfo.patch).to.equal(0);
  });

  it("should return version info with major, minor and patch", () => {
    const version = "1.47.1";

    const versionInfo = utils.getVersionInfo(version);

    expect(versionInfo.major).to.equal(1);
    expect(versionInfo.minor).to.equal(47);
    expect(versionInfo.patch).to.equal(1);
  });

  it("should remove extra characters from version", () => {
    const version = "1.47.1-beta";

    const versionInfo = utils.getVersionInfo(version);

    expect(versionInfo.major).to.equal(1);
    expect(versionInfo.minor).to.equal(47);
    expect(versionInfo.patch).to.equal(1);
  });

  it("should return version info with empty version", () => {
    const version = "";

    const versionInfo = utils.getVersionInfo(version);

    expect(versionInfo.major).to.equal(0);
    expect(versionInfo.minor).to.equal(0);
    expect(versionInfo.patch).to.equal(0);
  });

  it("should exit with error message if installed version is less than minimum supported version", () => {
    vi.spyOn(utils, "getPlaywrightVersion").mockReturnValue("1.46.0");

    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => utils.validatePlaywrightVersion()).to.throw();
    expect(exitStub).toHaveBeenCalledWith(1);
  });

  it("should be no-op if installed version is greater than minimum supported version (patch change)", () => {
    vi.spyOn(utils, "getPlaywrightVersion").mockReturnValue("1.47.1");

    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => utils.validatePlaywrightVersion()).not.to.throw();
    expect(exitStub).not.toHaveBeenCalled();
  });

  it("should be no-op if installed version is greater than minimum supported version (minor change)", () => {
    vi.spyOn(utils, "getPlaywrightVersion").mockReturnValue("1.48.0");

    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => utils.validatePlaywrightVersion()).not.to.throw();
    expect(exitStub).not.toHaveBeenCalled();
  });

  it("should be no-op if installed version is greater than minimum supported version (major change)", () => {
    vi.spyOn(utils, "getPlaywrightVersion").mockReturnValue("2.0.0");

    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => utils.validatePlaywrightVersion()).not.to.throw();
    expect(exitStub).not.toHaveBeenCalled();
  });

  it("should be no-op if installed version is equal to minimum supported version", () => {
    vi.spyOn(utils, "getPlaywrightVersion").mockReturnValue(MINIMUM_SUPPORTED_PLAYWRIGHT_VERSION);

    const exitStub = vi.spyOn(process, "exit").mockImplementation(() => {
      throw new Error();
    });

    expect(() => utils.validatePlaywrightVersion()).not.to.throw();
    expect(exitStub).not.toHaveBeenCalled();
  });

  it("should return playwright version from env variable", () => {
    vi.stubEnv(InternalEnvironmentVariables.MPT_PLAYWRIGHT_VERSION, "1.2.0");
    expect(utils.getPlaywrightVersion()).to.equal("1.2.0");
  });

  it("should fetch playwright version and set it in env variable", () => {
    const mockVersion = "1.2.3";
    vi.stubEnv(InternalEnvironmentVariables.MPT_PLAYWRIGHT_VERSION, undefined);

    vi.spyOn(packageManager, "getPackageManager").mockReturnValue({
      runCommand: vi.fn().mockReturnValue("echo"),
      getVersionFromStdout: vi.fn().mockReturnValue(mockVersion),
    });

    const version = utils.getPlaywrightVersion();

    expect(version).to.equal(mockVersion);
    expect(process.env[InternalEnvironmentVariables.MPT_PLAYWRIGHT_VERSION]).to.equal(mockVersion);
  });

  it("should return region and accountId from a valid service URL", () => {
    vi.stubEnv(
      "PLAYWRIGHT_SERVICE_URL",
      "wss://eastus.api.playwright.microsoft.com/accounts/1234/browsers",
    );

    const result = populateValuesFromServiceUrl();
    expect(result).to.deep.equal({ region: "eastus", accountId: "1234" });
  });

  it("should return null for an invalid service URL", () => {
    vi.stubEnv("PLAYWRIGHT_SERVICE_URL", "invalid-url");

    const result = populateValuesFromServiceUrl();
    assert.isNull(result);
  });

  it("should return null if PLAYWRIGHT_SERVICE_URL is not set", () => {
    const result = populateValuesFromServiceUrl();
    assert.isNull(result);
  });
});
