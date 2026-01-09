<template>
    <div>
        <div class="flex border-b">
            <RouterLink v-for="route of routes" :to="route.to">
                <div class="mb-4 m-auto flex px-4 mr-4 cursor-pointer">
                    <component :is="route.icon" class="size-6 mr-4" />
                    {{ route.label }}
                </div>
            </RouterLink>
        </div>
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
import { RectangleStackIcon, TrophyIcon } from '@heroicons/vue/24/solid';
import type { RouterLink } from 'vue-router';

const routes = [
    { label: 'My Dex', to: 'my', icon: RectangleStackIcon },
    { label: 'Tournament', to: 'tournament', icon: TrophyIcon }
]
</script>