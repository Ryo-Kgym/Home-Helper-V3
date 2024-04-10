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
        {
          module: "src/feature",
          allowReferenceFrom: ["src/app"],
          allowSameModule: true,
        },
        {
          module: "src/components/ui",
          allowReferenceFrom: [
            "src/feature",
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
