module.exports = {
  preset: "ts-jest",
  transformIgnorePatterns: ["/node_modules/(?!three/examples/)"],
  transform: {
    "node_modules/three/examples/.+.(j|t)sx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@pageComponents/(.+)$": "<rootDir>/src/pageComponents/$1",
    "^@feature/(.+)$": "<rootDir>/src/feature/$1",
    "^@features/(.+)$": "<rootDir>/src/features/$1",
    "^@hooks/(.+)$": "<rootDir>/src/hooks/$1",
    "^@provider/(.+)$": "<rootDir>/src/provider/$1",
    "^@persistence/(.+)$": "<rootDir>/src/persistence/$1",
    "^@v3/graphql/(.+)$": "<rootDir>/../../packages/graphql/$1",
  },
};
