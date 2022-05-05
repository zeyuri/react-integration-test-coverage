module.exports = {
  // extends: "@istanbuljs/nyc-config-typescript",
  all: true,
  include: ["src"],
  reporter: ["json", "text"],
  exclude: [
    "src/**/*.spec.*",
    "src/**/*.test.*",
    "src/**/*.stories.*",
    "src/root.component.tsx",
    "src/konoha-core-mfe.tsx",
  ],
  "report-dir": "./coverage/integration",
};
