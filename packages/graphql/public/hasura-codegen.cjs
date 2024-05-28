const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

/*
echo ONEFORALL_GRAPHQL_ENDPOINT=https://hoge >> .env
*/

module.exports = {
  overwrite: true,
  schema: process.env.ONEFORALL_GRAPHQL_ENDPOINT,
  documents: "./public/**/**.graphql",
  generates: {
    "./public/index.ts": {
      config: {
        onlyOperationTypes: true,
        withHooks: true,
      },
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
    "./public/type.ts": {
      config: {
        enumsAsTypes: true,
        onlyOperationTypes: true,
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
    "./public/schema.json": {
      plugins: ["introspection"],
    },
  },
};
