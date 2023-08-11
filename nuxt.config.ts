// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootTag: 'main',
    rootId: 's-u-g',
  },
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  tailwindcss: {
    viewer: false,
  },
  experimental: {
    watcher: 'parcel',
  },
  ui: {
    icons: ['ph'],
  },
  modules: ['@nuxthq/ui', '@vueuse/nuxt'],
})