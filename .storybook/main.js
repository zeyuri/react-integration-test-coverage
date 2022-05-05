const isDev = process.env.NODE_ENV;

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  features: {
    babelModeV7: true,
    // storyStoreV7: true, if this is enabled storybook lazy build kicks in and the coverage will only work for files access in the test
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.stats = {
      colors: true,
    };
    config.mode = "development";
    config.devtool = "inline-source-map";
    // Return the altered config
    return config;
  },
};
