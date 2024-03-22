// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      redirectOn: "root",
    },
  },
  colorMode: {
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
