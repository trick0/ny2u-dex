<script setup lang="ts">
import BouncerList from './components/BouncerList.vue';
import Completion from './components/Completion.vue';
import MyDex from './components/MyDex.vue';
import Pack from './components/Pack.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <div class="text-6xl font-bold mx-5 my-8 text-center">
    ??? DEX
  </div>
  <div class="app-container m-auto">
    <Pack />
    <MyDex />
    <Completion />
    <SearchBar />
    <BouncerList />
  </div>
</template>

<style>
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
