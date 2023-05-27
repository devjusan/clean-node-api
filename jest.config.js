module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCorageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
