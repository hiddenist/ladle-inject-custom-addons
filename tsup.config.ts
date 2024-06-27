import { defineConfig } from "tsup"

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/**/*.{ts,tsx}", "!**/*.{test,stories}.{ts,tsx}"],
  splitting: false,
  minify: true,
  clean: true,
})
