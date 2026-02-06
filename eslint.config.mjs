import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import("eslint").Linter.Config[]} */
const config = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    // TypeScript files: disable rules that TypeScript handles better
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off", // TypeScript compiler handles this
      "no-unused-vars": "off", // Use @typescript-eslint/no-unused-vars via next config
    },
  },
  {
    ignores: [".next/", "node_modules/", "out/"],
  },
];

export default config;
