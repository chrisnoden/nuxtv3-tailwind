<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    value: { type: Object, required: false },
});

const thing = ref<string>();

onMounted(() => {
    thing.value = 'Hello Chris';
});
</script>

<template>
    <div>
        New component here!
        {{ thing }}

        <NuxtPage />
    </div>
</template>
