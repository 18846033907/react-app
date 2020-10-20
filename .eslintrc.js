module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react", "import", "jsx-a11y"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
