export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/icon", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/delta-logo.png" }, // Agrega el favicon aquí
      ],
    },
  },

  // Variables de entorno
  runtimeConfig: {
    public: {
      api_url: process.env.NUXT_API_BASE_URL,
    },
  },
});
