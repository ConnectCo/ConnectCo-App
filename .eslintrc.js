// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: "expo",
  ignorePatterns: ["/dist/*"],
  plugins: ["simple-import-sort"],
  rules: {
    "import/namespace": ["error", { allowComputed: true }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^expo"],
          ["^react"],
          ["^@"],
          ["^[a-z]"],
          ["^@/"],
          ["^\\./", "^\\.\\./"],
        ],
      },
    ],
  },
};
