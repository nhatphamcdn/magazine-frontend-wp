// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  runtimeConfig: {
    wpApiUrl: process.env.NUXT_WP_API_URL,
  },
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/default-theme.css',
    '~/styles/vars.css',
    '~/styles/global.css',
  ],
})