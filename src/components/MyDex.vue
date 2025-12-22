<template>
    <div class="mydex-container">
        <div @click="dexVisibility = true" class="m-auto flex border p-8 rounded-xl justify-center cursor-pointer">
            Show my Dex
            <RectangleStackIcon class="size-6 ml-4" />
        </div>
        <Transition>
            <Modal :theme="'dark'" v-if="dexVisibility" @onClose="closeModal">
                <template #header>
                    <div class="text-xl font-bold text-center">
                        my dex
                    </div>
                </template>
                <div class="m-auto">
                    <div class="bouncer-list md:gap-4 sm:gap grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 m-auto">
                        <Bouncer :class="{ 'grayscale opacity-25': !isOwned(bouncer.name) }"
                            v-for="(bouncer) of bouncers" :bouncer="bouncer" :id="bouncer.id" :key="bouncer.name" />
                    </div>
                </div>
                <template #footer>
                    <button
                        class="inline-flex justify-center cursor-pointer rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-black/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                        @click="closeModal">
                        Close
                    </button>
                </template>
            </Modal>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import type { BouncerType } from '@/models/models';
import { useBouncerStore } from '@/stores/bouncer';
import { computed, onMounted, ref, watch } from 'vue';
import Modal from './Modal.vue';
import Bouncer from './Bouncer.vue';
import { RectangleStackIcon } from '@heroicons/vue/24/solid';
import { usePackStore } from '@/stores/pack';
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