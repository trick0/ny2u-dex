<template>
    <div class="bouncer m-4">
        <div
            class="transition-all duration-300 ease-in-out hover:bg-gray-800 bg-gray-900 hover:m-2 image aspect-square cursor-pointer border-5 hover:border-gray-400 rounded-full flex justify-center items-center">
            <BouncerImage :id="id" />
        </div>
        <div class="name my-4 rounded-full bg-white text-gray-900 text-center">
            {{ bouncer.name }}
        </div>
        <div class="type text-xs text-center text-gray-400">
            {{ bouncer.type }}
        </div>
    </div>
</template>

<script setup lang="ts">
import BouncerImage from './BouncerImage.vue';

const props = defineProps(["id", "bouncer"]);
</script>