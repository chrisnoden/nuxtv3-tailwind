import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['@heroicons/vue']
    },
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        // Doc: https://github.com/nuxt-community/google-fonts-module
        '@nuxtjs/google-fonts',
    ],
    components: {
        global: true,
        dirs: [
            '~/components',
        ],
    },
    css: [
        '~/assets/css/tailwind.scss',
        // our project css
        '~/assets/css/app.scss',
    ],
    googleFonts: {
        families: {
            Inter: true
        }
    },
    modules: [
    ],
    nitro: {
        preset: 'node-server'
    },
    runtimeConfig: {
        public: {
            // these env vars are available in the client runtime
            DEFAULT_LOCALE: process.env.DEFAULT_LOCALE,
        }
    },
})
