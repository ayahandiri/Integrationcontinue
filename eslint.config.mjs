import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["**/*.test.js"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
    },
  },
];
