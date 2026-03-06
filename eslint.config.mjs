import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.url is the current file's URL
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
];

export default eslintConfig;
