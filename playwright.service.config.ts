import { defineConfig } from "@playwright/test";
import { createAzurePlaywrightConfig, ServiceOS } from "@azure/playwright";
import { DefaultAzureCredential } from "@azure/identity";
import config from "./playwright.config";

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000";
const apiURL = "http://127.0.0.1:3001/api";

/* Learn more about service configuration at https://aka.ms/pww/docs/config */
export default defineConfig(
  config,
  createAzurePlaywrightConfig(config, {
    exposeNetwork: "<loopback>",
    connectTimeout: 3 * 60 * 1000, // 3 minutes
    os: ServiceOS.LINUX,
    credential: new DefaultAzureCredential(),
  }),
  {
    /*
    Enable Playwright Workspaces Reporter:
    Uncomment the reporter section below to upload test results and reports to Playwright Workspaces.

    Note: The HTML reporter must be included before Playwright Workspaces Reporter.
    This configuration will replace any existing reporter settings from your base config.
    If you're already using other reporters, add them to this array.
    */
    reporter: [["html", { open: "never" }], ["@azure/playwright/reporter"]],
    webServer: [
      {
        command: "npm run dev --prefix backend",
        url: "http://127.0.0.1:3001/api/health",
        reuseExistingServer: false,
        timeout: 120_000,
        env: {
          ...process.env,
          PORT: "3001",
          CORS_ORIGIN: new URL(baseURL).origin,
        },
      },
      {
        command: "npm run dev --prefix frontend",
        url: `${baseURL}/login`,
        reuseExistingServer: false,
        timeout: 120_000,
        env: {
          ...process.env,
          PORT: "3000",
          NEXT_PUBLIC_API_URL: apiURL,
        },
      },
    ],
  },
);
