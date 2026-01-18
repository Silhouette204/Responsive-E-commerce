import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
         contact: "contacts.html",
          blog: "blog.html",
      },
    },
  },
});
