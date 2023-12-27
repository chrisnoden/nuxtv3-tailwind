<script setup>
const env = useRuntimeConfig();

useHead({
    htmlAttrs: {
        class: 'h-full',
        lang: env.public.DEFAULT_LOCALE,
    }
})
</script>

<template>
    <Body class="h-full"></Body>

    <div class="min-h-full relative">
        <div class="static top-0 left-0 right-0 bg-gray-100 p-4 z-10">
            <NuxtLink to="/">Home</NuxtLink> -
            <NuxtLink to="/subdir/parent">SUBDIR</NuxtLink>
        </div>

        <main class="flex flex-col h-full">
            <NuxtPage class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
        </main>
    </div>

</template>
