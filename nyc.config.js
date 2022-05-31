module.exports = {
  // extends: "@istanbuljs/nyc-config-typescript",
  all: true,
  include: ["src"],
  exclude: [
    "src/**/*.spec.*",
    "src/**/*.test.*",
    "src/**/*.stories.*",
    "src/root.component.tsx",
    "src/knh-core.tsx",
  ],
  reporter: ["json", "text", "lcov"],
  "report-dir": "./coverage",
};
