<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    value: { type: Object, required: false },
});

const thing = ref(null);

onMounted(() => {
    thing.value = 'Hello Chris';
});
</script>

<template>
    <div>
        New component here!

        <NuxtPage />
    </div>
</template>
