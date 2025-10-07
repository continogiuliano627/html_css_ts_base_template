// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [
  // 🌐 Ignora rutas globalmente (este bloque se aplica SIEMPRE)
  {
    ignores: ["public/dist/**", "node_modules/**", "stylelint.config.cjs"],
  },

  // 🧠 Config base JS
  js.configs.recommended,

  // 🧠 Config TS
  ...tseslint.configs.recommended,

  // ⚙️ Reglas personalizadas para TS/TSX
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...prettier.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
