import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith("iconify-icon"),
        },
      },
    }),
    vueDevTools(),
    Components({}),
    AutoImport({
      imports: [
        // presets
        "vue",
        "vue-router",
        "pinia",
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true,
        },
      ],
      dirs: ["./hooks", "./composables", "./composables/**", "src/stores"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
