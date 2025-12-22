<template>
    <div>
        <RouterLink :to="'my'">
            <div class="mb-8 m-auto flex p-4 border-b cursor-pointer">
                <RectangleStackIcon class="size-6 mr-4" />
                My Dex
            </div>
        </RouterLink>
        <Pack />
        <Completion />
        <SearchBar />
        <BouncerList />
    </div>
</template>
<script setup lang="ts">
import BouncerList from '@/components/BouncerList.vue';
import Completion from '@/components/Completion.vue';
import Pack from '@/components/Pack.vue';
import SearchBar from '@/components/SearchBar.vue';
import { RectangleStackIcon } from '@heroicons/vue/24/solid';
import type { RouterLink } from 'vue-router';
</script>