const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

/*
echo ONEFORALL_GRAPHQL_ENDPOINT=https://hoge >> ../.env
*/

module.exports = {
  overwrite: true,
  schema: process.env.ONEFORALL_GRAPHQL_ENDPOINT,
  documents: "./household/**/**.graphql",
  generates: {
    "./household/generated/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "typed",
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        onlyOperationTypes: true,
        enumsAsTypes: true,
        scalars: {
          Date: "Date",
          Datetime: "Date",
        },
        defaultScalarType: "unknown",
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
      },
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
    // "./household/index.ts": {
    //   config: {
    //     onlyOperationTypes: true,
    //     withHooks: true,
    //   },
    //   plugins: ["typescript", "typescript-operations", "typescript-urql"],
    //   hooks: {
    //     afterOneFileWrite: ["prettier --write"],
    //   },
    // },
    // "./household/type.ts": {
    //   config: {
    //     enumsAsTypes: true,
    //     onlyOperationTypes: true,
    //   },
    //   plugins: ["typescript", "typescript-operations", "typed-document-node"],
    //   hooks: {
    //     afterOneFileWrite: ["prettier --write"],
    //   },
    // },
    // "./household/schema.json": {
    //   plugins: ["introspection"],
    // },
  },
};
