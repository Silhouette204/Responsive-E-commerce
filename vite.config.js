import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({

  base: "./",
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
         products: "products.html",
          contact: "contacts.html",
           blog: "blog.html",
      },
    },
  },
});
