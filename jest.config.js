module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$",
  coverageDirectory: "coverage/unit",
  coverageReporters: ["json", "text"],
  collectCoverageFrom: [
    "**/*.{js,tsx}",
    "!**/node_modules/**",
    "!**/*.stories.*",
    "!src/**/*.spec.*",
    "!src/**/*.test.*",
    "!src/root.component.tsx",
    "!src/konoha-core-mfe.tsx",
  ],
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
