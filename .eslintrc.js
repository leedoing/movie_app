module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // "eslint-config-airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "comma-dangle": ["error", "never"],
    "jsx-a11y/img-has-alt": [0],
    "jsx-quotes": ["error", "prefer-single"],
    "no-confusing-arrow": [0],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-no-bind": [0],
    "react/prop-types": [1],
    "react/require-default-props": [0]
  }
};
