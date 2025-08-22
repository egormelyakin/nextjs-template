const features = []; // Feature names here
const featureImports = features.map((feature) => `@${feature}`);
const featureImportsRegex = `^(${featureImports.join("|")})/(.*)$`;

const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],

  trailingComma: "es5",
  printWidth: 120,
  objectWrap: "collapse",
  arrowParens: "avoid",
  bracketSameLine: true,

  importOrder: ["^(lib|utils|config|hooks|types|components|\\.)/(.*)$", featureImportsRegex],
  importOrderSeparation: true,
};

export default config;
