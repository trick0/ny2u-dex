<script setup lang="ts">
import BouncerList from './components/BouncerList.vue';
import Completion from './components/Completion.vue';
import SearchBar from './components/SearchBar.vue';
import { useBouncerStore } from './stores/bouncer';
const bouncerStore = useBouncerStore();
</script>

<template>
  <div class="text-6xl font-bold mx-5 my-8 text-center">
    ??? DEX
  </div>
  <div>
    <SearchBar />
    <Completion />
    <BouncerList />
  </div>
</template>

<style scoped></style>
