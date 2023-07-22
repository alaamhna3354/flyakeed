import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";
export default defineNuxtConfig({
  modules: [
    "@invictus.codes/nuxt-vuetify",
    "@pinia/nuxt",
  ],
  css: [
    "@/assets/styles/scss/custom.scss",
    "@/assets/styles/scss/animate/animate.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      title: "FlyAkeed",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Ecommerce Site" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "icon",
          href: "/icons/fav.png",
          type: "image/x-icon",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
        },
        
      ],
    },
  },
  runtimeConfig: {
    serverApiBase: "https://admin.horsesuae.online",
    serverApi: {
      AuthLoginApi: "/api/identity/token",
    },
    public: {
      apiBase: "https://admin.horsesuae.online",
      api: {
        AuthLoginApi: "/api/identity/token",
      },
    },
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
