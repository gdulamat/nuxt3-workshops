// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@t3headless/nuxt-typo3'
  ],
  typo3: {
    api: {
      baseUrl: 'https://pwa-demo.ddev.site/api'
    }
  },
  components: {
    dirs: [
      {
        path: '@/components/T3',
        global: true,
        pathPrefix: false
      }
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
