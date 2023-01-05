import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pokemon-sv-raid-strategy",
  plugins: [react()],
});
