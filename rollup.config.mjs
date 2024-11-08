import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    typescript({
      include: "src/**/*",
    }),
    nodeResolve(),
  ],
  external: ["obs-studio-node", "node-mac-permissions"],
});
