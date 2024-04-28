// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const pagesDirs = fs.readdirSync(
  path.resolve(__dirname, "../../apps/web/src/pages"),
);

const featuresDirs = fs.readdirSync(
  path.resolve(__dirname, "../../apps/web/src/features"),
);

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  env: {
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true },
  plugins: [
    "@typescript-eslint",
    "import",
    "import-access",
    "strict-dependencies",
  ],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/unbound-method": "off",
    "import-access/jsdoc": ["error"],
    "strict-dependencies/strict-dependencies": [
      "error",
      [
        ...pagesDirs.map((name) => ({
          module: `src/pages/${name}`,
          allowReferenceFrom: [`src/app/**/page.tsx`],
          allowSameModule: true,
        })),
        ...pagesDirs.map((name) => ({
          module: `src/pages/${name}/**`,
          allowReferenceFrom: [`src/pages/${name}/**`],
          allowSameModule: true,
        })),
        ...pagesDirs.map((name) => ({
          module: `src/pages/${name}/server`,
          allowReferenceFrom: [`src/pages/${name}/components/*Server.tsx`],
          allowSameModule: true,
        })),
        ...featuresDirs.map((name) => ({
          module: `src/features/${name}`,
          allowReferenceFrom: [`src/pages/*/components/*Client.tsx`],
          allowSameModule: true,
        })),
        {
          module: "src/components/ui",
          allowReferenceFrom: [
            "src/feature",
            "src/pages/**/components/*",
            "src/components/page",
            "src/components/molecules",
            "src/components/organisms",
            "src/app", // NG
          ],
          allowSameModule: true,
        },
      ],
    ],
  },
  ignorePatterns: [
    "**/hasuraGraphql.tsx",
    "**/hasuraHelperKidsGraphql.tsx",
    "**/*.config.js",
    "**/*.config.cjs",
    "**/.eslintrc.cjs",
    "**/package.json",
    ".next",
    "dist",
    "pnpm-lock.yaml",
    "tailwind.config.ts",
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
