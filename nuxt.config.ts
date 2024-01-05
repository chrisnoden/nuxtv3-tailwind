export default defineNuxtConfig({
    build: {
        transpile: ['@heroicons/vue']
    },
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
        // @see https://nuxt.com/modules/eslint and https://github.com/nuxt/eslint-config
        '@nuxtjs/eslint-module',
        // @see https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        // @see https://github.com/nuxt-community/google-fonts-module
        '@nuxtjs/google-fonts',
    ],
    runtimeConfig: {
        public: {
            // these env vars are available in the client runtime
            DEFAULT_LOCALE: process.env.DEFAULT_LOCALE,
        }
    },
})
