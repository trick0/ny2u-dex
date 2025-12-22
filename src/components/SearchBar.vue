<template>
    <div class="search-bar my-8 m-auto">
        <div @click="showFilter = !showFilter">
            <div class="flex justify-end cursor-pointer">
                <template v-if="showFilter">
                    Hide filters
                    <EyeSlashIcon class="size-6 ml-4" />
                </template>
                <template v-else>
                    Show filters
                    <AdjustmentsHorizontalIcon class="size-6 ml-4" />
                </template>
            </div>
        </div>
        <div class="row mt-8 mb-8 rounded bg-neutral-900 p-8" v-if="showFilter">
            <div class="row col-12">
                <div class="search-bar-label text-white my-4">
                    Name
                </div>
                <div class="search-bar-input bg-white rounded-full  p-3">
                    <input v-model="bouncerStore.filter" type="text" name="bouncer-name-search"
                        id="bouncer-name-search">
                </div>
            </div>
            <div class="row col-12 mt-8">
                <div class="search-bar-label text-white my-4">
                    <span>Type</span>
                    <small v-if="activeFilterTypes.length > 0" @click="bouncerStore.resetTypeFilter()"
                        class="rounded-full hover:bg-red-600 bg-red-800 cursor-pointer mx-2 py-1 px-4 border border-transparent text-sm text-white transition-all shadow-sm">reset
                    </small>
                </div>
                <div class="search-bar-types flex flex-wrap gap-2">
                    <div v-for="type of bouncerStore.bouncerTypes" @click="bouncerStore.toggleTypeFilter(type)"
                        class="rounded-md cursor-pointer py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm"
                        :class="activeFilterTypes?.includes(type) ? 'hover:bg-green-400 bg-green-600' : 'hover:bg-neutral-600 bg-neutral-800'">
                        {{ type }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useBouncerStore } from '@/stores/bouncer';
import { AdjustmentsHorizontalIcon, EyeSlashIcon } from '@heroicons/vue/24/solid';
import { computed, ref } from 'vue';
const bouncerStore = useBouncerStore();
const activeFilterTypes = computed(() => bouncerStore.activeFilterTypes)
const showFilter = ref(false);
</script>

<style>
#bouncer-name-search {
    outline: none;
    width: 100%;
}
</style>