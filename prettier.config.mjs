const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],

  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 120,

  importOrder: ["^[./]", "^@/(.*)$"],
  importOrderSeparation: true,
};

export default config;
