import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  // vite.config.js
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Allow Vite to manage chunks
      },
    },
  },

  // optimizeDeps: {
  //   include: ["axios"], // Include axios in the optimized dependencies
  // },
  // Add Content Security Policy configuration
  // Make sure to replace 'https://node-sage-six.vercel.app' with your actual API domain
  serverMiddleware: {
    configure: (app) => {
      return (req, res, next) => {
        res.setHeader(
          "Content-Security-Policy",
          "default-src 'self' 'https://node-sage-six.vercel.app' 'https://node-git-main-mohamedalifaidi.vercel.app' ; connect-src 'self' 'https://node-sage-six.vercel.app' 'https://node-git-main-mohamedalifaidi.vercel.app' 'https://node-res2s48hy-mohamedalifaidi.vercel.app';"
        );
        next();
      };
    },
  },
});
