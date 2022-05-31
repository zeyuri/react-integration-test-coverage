const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      useESModules: true,
      regenerator: false,
    },
  ],
];

plugins.push("babel-plugin-istanbul");

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins,
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "current node",
          },
        ],
      ],
    },
  },
};
