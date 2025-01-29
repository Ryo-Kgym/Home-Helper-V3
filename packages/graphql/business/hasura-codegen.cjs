const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

/*
echo ONEFORALL_GRAPHQL_ENDPOINT=https://hoge >> ../.env
*/

module.exports = {
  overwrite: true,
  schema: process.env.ONEFORALL_GRAPHQL_ENDPOINT,
  documents: "./business/**/**.graphql",
  generates: {
    "./business/generated/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "typed",
      },
      plugins:
        ["typescript", "typescript-operations", "typed-document-node",
          {
            add: {
              content: "import { YYYYmmDD, TZDateTime } from '@/type/date/date';"
            }
          }
        ],
      config: {
        onlyOperationTypes: true,
        enumsAsTypes: true,
        scalars: {
          bpchar: "string",
          date: "YYYYmmDD",
          timestamp: "string",
          numeric: "number",
          timestamptz: "TZDateTime",
        },
        defaultScalarType: "unknown",
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
      },
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
  },
};
