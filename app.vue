<script setup>
const env = useRuntimeConfig();

useHead({
    htmlAttrs: {
        class: 'h-full',
        lang: env.DEFAULT_LOCALE,
    }
})
</script>

<template>
    <Body class="h-full"></Body>

    <div class="min-h-full">
        <NuxtLink to="/">Home</NuxtLink> -
        <NuxtLink to="subdir/parent">SUBDIR</NuxtLink>

        <main class="flex flex-col h-full">
            <div>
                <NuxtPage class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
            </div>
        </main>
    </div>

</template>
