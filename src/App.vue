<script setup lang="ts">
import type { RouterView } from 'vue-router';
</script>

<template>
  <div class="text-6xl font-bold mx-5 my-8 text-center">
    ??? DEX
  </div>
  <div class="app-container m-auto p-4">
    <RouterView />
  </div>
</template>

<style>
html {
  overflow-y: scroll;
}

.app-container {
  max-width: 720px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
