module.exports = {
  preset: "ts-jest",
  transformIgnorePatterns: ["/node_modules/(?!three/examples/)"],
  transform: {
    "node_modules/three/examples/.+.(j|t)sx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^~/hooks/(.+)$": "<rootDir>/src/hooks/$1",
    "^~/provider/(.+)$": "<rootDir>/src/provider/$1",
    "^~/persistence/(.+)$": "<rootDir>/src/persistence/$1",
    "^~/server/(.+)$": "<rootDir>/src/server/$1",
    "^@v3/graphql/(.+)$": "<rootDir>/../../packages/graphql/$1",
  },
};
