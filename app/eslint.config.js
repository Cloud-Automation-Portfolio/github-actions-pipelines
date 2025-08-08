// app/eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // keep it simple for the lab:
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off"
    },
  },
];
