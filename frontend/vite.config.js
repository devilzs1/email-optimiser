import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: "#2f8d46",
        background_color: "#2EC6FE",
        icons: [
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "icon512_maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "icon512_rounded.png",
            type: "image/png",
          },
        ],
        orientation: "any",
        display: "standalone",
        dir: "auto",
        lang: "en-US",
        name: "Email-Optimisation",
        short_name: "e-Optimiser",
        scope: "/",
        start_url: "/",
      },
      workbox: {
        runtimeCaching : [{
          urlPattern : ({url}) =>{
            return url.pathname.startsWith("/api")
          },
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse:{
              statuses: [0,200]
            }
          }
        }]
      }
    }),
  ],
});
