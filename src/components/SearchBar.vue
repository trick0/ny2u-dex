<template>
    <div class="search-bar m-auto mt-8">
        <div class="search-bar-label text-white pl-8">
            search
        </div>
        <div class="search-bar-input bg-white rounded-full m-5 p-3">
            <input v-model="bouncerStore.filter" type="text" name="bouncer-name-search" id="bouncer-name-search">
        </div>
    </div>
</template>
<script setup lang="ts">
import { useBouncerStore } from '@/stores/bouncer';

const bouncerStore = useBouncerStore();

</script>

<style>
.search-bar {
    max-width: 600px;
    color: #191919;
}

#bouncer-name-search {
    outline: none;
    width: 100%;
}
</style>