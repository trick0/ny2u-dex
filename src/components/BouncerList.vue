<template lang="html">
    <div class="bouncer-list gap-4 grid grid-cols-5 m-auto">
        <Bouncer v-for="(bouncer, index) of bouncers" :bouncer="bouncer" :id="index" :key="bouncer.name" />
    </div>
</template>

<script setup lang="ts">
import { useBouncerStore } from '@/stores/bouncer';
import Bouncer from './Bouncer.vue';
import { computed } from 'vue';
const bouncerStore = useBouncerStore();
const bouncers = computed(() => bouncerStore.filteredBouncer);
</script>

<style>
.bouncer-list {
    width: 720px;
}
</style>