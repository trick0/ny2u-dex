<template>
    <div class="completion my-8 px-2 m-auto">
        <span class="mx-3">
            {{ progress }} / 151
        </span>
        <div class="bar rounded-xl relative border-2 border-neutral-500 p-2 m-2">
            <div class="progress rounded-xl border-2 border-emerald-700 bg-emerald-600 absolute"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useBouncerStore } from '@/stores/bouncer';
import { computed } from 'vue';

const bouncerStore = useBouncerStore();
const progress = computed(() => bouncerStore.bouncers.length)
const width = computed(() => `${~~(100 * (progress.value / 151))}%`)
</script>
<style>
.completion {
    max-width: 720px;
}

.progress {
    animation: progress ease-out 1s forwards;
    animation-delay: 1s;
    top: 3px;
    bottom: 3px;
    left: 3px;
}

@keyframes progress {
    0% {
        width: 0%;
    }

    100% {
        width: v-bind(width);
    }
}
</style>