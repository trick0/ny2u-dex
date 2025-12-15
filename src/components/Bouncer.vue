<template>
    <div class="bouncer sm:m-8 md:m-4 m-4">
        <div
            class="transition-all duration-300 ease-in-out hover:bg-neutral-800 bg-neutral-900 hover:m-2 image aspect-square cursor-pointer border-5 hover:border-gray-400 rounded-full flex justify-center items-center">
            <BouncerImage :id="id" :key="bouncer.name" />
        </div>
        <div class="name my-4 rounded-full bg-white text-gray-900 text-center text-sm font-bold uppercase">
            {{ bouncer.name }}
        </div>
        <div class="type text-xs text-center text-gray-400 capitalize">
            {{ bouncer.type }}
        </div>
    </div>
</template>

<script setup lang="ts">
import BouncerImage from './BouncerImage.vue';
const props = defineProps(["id", "bouncer"]);
</script>