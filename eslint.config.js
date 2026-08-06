import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const arrowFunctionRules = {
  "no-restricted-syntax": [
    "error",
    {
      selector: "FunctionDeclaration",
      message:
        "Utiliser une fonction fléchée assignée à une constante.",
    },
    {
      selector: "FunctionExpression",
      message:
        "Utiliser une fonction fléchée plutôt qu’une function expression.",
    },
  ],
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: false,
    },
  ],
};

export default defineConfig(
  {
    ignores: [
      "coverage/**",
      "dist/**",
      "docs/sources/**",
      "node_modules/**",
    ],
  },
  {
    files: [
      "eslint.config.js",
    ],
    extends: [
      js.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: arrowFunctionRules,
  },
  {
    files: [
      "src/**/*.ts",
      "tests/**/*.ts",
      "vitest.config.ts",
    ],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      ...arrowFunctionRules,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          disallowTypeAnnotations: false,
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          allowExpressions: false,
          allowHigherOrderFunctions: false,
          allowIIFEs: false,
          allowTypedFunctionExpressions: true,
        },
      ],
    },
  },
);
