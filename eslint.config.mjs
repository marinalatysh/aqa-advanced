import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];
