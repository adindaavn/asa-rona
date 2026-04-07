// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },
  app: {
    head: {
      title: 'ASA RONA | Interior Design Studio',
      meta: [
        { name: 'description', content: 'Premium interior design studio focusing on minimalist aesthetics.' }
      ],
    }
  }
})
