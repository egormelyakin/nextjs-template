import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import boundaries from "eslint-plugin-boundaries";
import checkFile from "eslint-plugin-check-file";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

const projectFolders = ["assets", "components", "config", "hooks", "lib", "stores", "testing", "types", "utils"];

export default tseslint.config(
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    plugins: { "check-file": checkFile, boundaries },
    settings: {
      "boundaries/elements": [
        { mode: "full", type: "shared", pattern: projectFolders.map((folder) => `src/${folder}/**`) },
        { mode: "full", type: "feature", capture: ["featureName"], pattern: ["src/features/*/**"] },
        { mode: "full", type: "app", pattern: ["src/app/**"] },
      ],
      "boundaries/include": ["src/**/*"],
    },
    rules: {
      "boundaries/no-unknown": "error",
      "boundaries/no-unknown-files": "error",
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          message: "Can't import ${dependency.type} files from ${file.type} files",
          rules: [
            { from: "shared", allow: ["shared"] },
            { from: "feature", allow: ["shared", ["feature", { featureName: "${from.featureName}" }]] },
            { from: "app", allow: ["app", "shared", "feature"] },
          ],
        },
      ],

      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
      "@next/next/no-img-element": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"],

      "check-file/filename-naming-convention": [
        "error",
        { "**/*.{ts,tsx}": "KEBAB_CASE" },
        { ignoreMiddleExtensions: true },
      ],
      "check-file/folder-naming-convention": ["error", { "src/**": "KEBAB_CASE" }],
    },
    languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
  },
  eslintConfigPrettier
);
