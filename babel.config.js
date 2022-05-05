const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      useESModules: true,
      regenerator: false,
    },
  ],
];

if (process.env.NODE_ENV !== "test") {
  plugins.push("babel-plugin-istanbul");
}

module.exports = {
  presets: [
    "@babel/preset-env",
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
