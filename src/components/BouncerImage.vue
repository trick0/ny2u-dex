<template lang="html">
    <div class="bouncer-image"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const IMAGE_HEIGHT = 32;
const props = defineProps(["id"]);
const heightPosition = computed(() => `-${props.id * IMAGE_HEIGHT}px`);
const heightPx = computed(() => `${IMAGE_HEIGHT * 2}px`);
const sizePx = computed(() => `${IMAGE_HEIGHT}px`);
</script>

<style scoped>
.bouncer-image {
    width: v-bind(sizePx);
    height: v-bind(sizePx);
    background-size: v-bind(heightPx);
    image-rendering: pixelated;
    background-image: url("/sheet.png");
    background-position-x: 0px;
    background-position-y: v-bind('heightPosition');
    animation: idle 0.5s steps(2) infinite;
}

@keyframes idle {
    from {
        background-position-x: 0px;
    }

    to {
        background-position-x: v-bind(heightPx);
    }
}
</style>