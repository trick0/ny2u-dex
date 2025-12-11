<template lang="html">
    <div class="bouncer-list md:gap-4 sm:gap grid md:grid-cols-5 sm:grid-cols-3 m-auto">
        <Bouncer v-for="(bouncer) of bouncers" :bouncer="bouncer" :id="bouncer.id" :key="bouncer.name" />
    </div>
</template>

<script setup lang="ts">
import { useBouncerStore } from '@/stores/bouncer';
import Bouncer from './Bouncer.vue';
import { computed } from 'vue';
const bouncerStore = useBouncerStore();
const bouncers = computed(() => bouncerStore.filteredBouncers);
</script>

<style>
.bouncer-list {
    max-width: 720px;
}
</style>