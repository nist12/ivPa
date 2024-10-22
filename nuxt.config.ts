// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: ['@vueuse/motion/nuxt', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },
  runtimeConfig: {
    strapiApiToken: process.env.STRAPI_API_TOKEN, // nur auf dem Server verfügbar
    public: {}, // falls du öffentliche Variablen hast
  }
})