<template>
    <div class="mydex-container">
        <RouterLink :to="'/'">
            <div @click="dexVisibility = true" class="mb-8 m-auto flex p-4 border-b cursor-pointer">
                <ArrowLeftCircleIcon class="size-6 mr-4" />
                Back
            </div>
        </RouterLink>

        <div class="m-auto">
            <div class="bouncer-list md:gap-4 sm:gap grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 m-auto">
                <Bouncer :class="{ 'grayscale opacity-25': !isOwned(bouncer.name) }" v-for="(bouncer) of bouncers"
                    :bouncer="bouncer" :id="bouncer.id" :key="bouncer.name" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { BouncerType } from '@/models/models';
import { useBouncerStore } from '@/stores/bouncer';
import { usePackStore } from '@/stores/pack';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';
import { computed, onMounted, ref, watch } from 'vue';
import Bouncer from '../components/Bouncer.vue';
const packStore = usePackStore();
const bouncerStore = useBouncerStore();
const bouncers = computed(() => bouncerStore.bouncers);
const packIndexHelper = computed(() => packStore.packIndexHelper);
const ownedBouncers = ref([]);
const dexVisibility = ref(false);

watch(packIndexHelper, () => {
    ownedBouncers.value = bouncerStore.getOwnedBouncers();
})

onMounted(() => {
    ownedBouncers.value = bouncerStore.getOwnedBouncers();
})

function closeModal() {
    dexVisibility.value = false;
}

function isOwned(bouncerName: string) {
    return !!ownedBouncers.value.find((b: BouncerType) => b.name == bouncerName);
}
</script>