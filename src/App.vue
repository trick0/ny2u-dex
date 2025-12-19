<script setup lang="ts">
import BouncerList from './components/BouncerList.vue';
import Completion from './components/Completion.vue';
import MyDex from './components/MyDex.vue';
import SearchBar from './components/SearchBar.vue';
import { useBouncerStore } from './stores/bouncer';
const bouncerStore = useBouncerStore();
</script>

<template>
  <div class="text-6xl font-bold mx-5 my-8 text-center">
    ??? DEX
  </div>
  <div>
    <MyDex />
    <SearchBar />
    <Completion />
    <BouncerList />
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
