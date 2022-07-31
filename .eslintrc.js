module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
  },
  rules: {
    "quotes": ["error", "double"],
    "no-unused-vars": "off“,
    "indent": "off",
    "semi": "off",
    "max-len": "off"
  },
};
