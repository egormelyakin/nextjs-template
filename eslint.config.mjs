import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import checkFile from "eslint-plugin-check-file";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const projectFolders = ["assets", "components", "config", "hooks", "lib", "stores", "testing", "types", "utils"];

const settings = {
  "boundaries/include": ["src/**/*"],
  "boundaries/elements": [
    { mode: "full", type: "shared", pattern: projectFolders.map((folder) => `src/${folder}/**/*`) },
    { mode: "full", type: "feature", capture: ["featureName"], pattern: ["src/features/*/**/*"] },
    { mode: "full", type: "app", capture: ["_", "fileName"], pattern: ["src/app/**/*"] },
  ],
};

const boundariesRules = {
  default: "disallow",
  rules: [
    { from: "shared", allow: ["shared"] },
    { from: "feature", allow: ["shared", ["feature", { featureName: "${from.featureName}" }]] },
    { from: "app", allow: ["app", "shared", "feature"] },
  ],
};

const rules = {
  "prefer-arrow-callback": "error",
  "prefer-template": "error",
  "prefer-const": "error",
  semi: ["error", "always"],
  quotes: ["error", "double"],

  "check-file/filename-naming-convention": [
    "error",
    { "**/*.{ts,tsx}": "KEBAB_CASE" },
    { ignoreMiddleExtensions: true },
  ],
  "check-file/folder-naming-convention": ["error", { "src/**": "KEBAB_CASE" }],

  "boundaries/no-unknown": "error",
  "boundaries/no-unknown-files": "error",
  "boundaries/element-types": ["error", boundariesRules],
};

const config = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  { plugins: { "check-file": checkFile, boundaries }, ...{ settings, rules } },
  js.configs.recommended,
];

export default config;
