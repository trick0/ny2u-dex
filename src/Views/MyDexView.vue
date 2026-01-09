<template>
    <div class="mydex-container">
        <BackButton />

        <div class="m-auto">
            <div
                class="bouncer-list md:gap-4 sm:gap grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 m-auto justify-items-center">
                <Bouncer :class="{ 'grayscale opacity-25': !isOwned(bouncer.name) }" v-for="(bouncer) of bouncers"
                    :bouncer="bouncer" :id="bouncer.id" :key="bouncer.name" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import type { BouncerType } from '@/models/models';
import { useBouncerStore } from '@/stores/bouncer';
import { usePackStore } from '@/stores/pack';
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