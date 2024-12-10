## Usage

```bash
npx create-next-app@latest . --use-npm --example "https://github.com/egormelyakin/nextjs-template"
```

## Implied Project Structure

```c
.
├── .vscode // VSCode settings
├── node_modules
├── src
│   ├── app // App Router
│   │   ├── page.tsx   // page component at /
│   │   ├── layout.tsx // layout component at /
│   │   └── about
│   │       ├── page.tsx   // page component at /about
│   │       └── layout.tsx // layout component at /about
│   ├── assets     // Static assets - images, fonts, etc.
│   ├── components // Reusable components for entire app
│   ├── config     // Global configuration - env variables, etc.
│   ├── features
│   │   ├── feature1       // Same structure as src/, with feature
│   │   │   ├── components // specific items. Features don't have to
│   │   │   └── hooks      // have all directories
│   │   └── feature2
│   │       ├── config
│   │       └── lib
│   ├── hooks      // Custom hooks shared across the app
│   ├── lib        // Reusable libraries
│   ├── stores     // Global state stores
│   ├── testing    // Testing utilities
│   ├── types      // Shared TypeScript types
│   └── utils      // Shared utility functions
├── .gitignore
├── esling.config.mjs   // ESLint configuration
├── next.config.ts      // Next.js configuration
├── package-lock.json
├── package.json
├── postcss.config.mjs  // PostCSS configuration
├── prettier.config.mjs // Prettier configuration
├── README.md
├── tailwind.config.ts  // Tailwind CSS configuration
└── tsconfig.ts         // TypeScript configuration
```

## Features

- TypeScript
  - Structure-specific import aliases
- Next.js
  - Typed routes (experimental)
- Tailwind CSS
- ESLint
  - Folder naming convention
  - File naming convention
  - Structure-specific import boundaries
- Prettier
  - Import sorting
  - Tailwind CSS support
