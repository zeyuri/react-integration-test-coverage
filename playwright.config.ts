import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testMatch: "*.spec.*",
};
export default config;
