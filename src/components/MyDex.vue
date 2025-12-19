<template>
    <div class="mydex-container">
        <div @click="dexVisibility = true" style="width: 720px" class="m-auto">
            Show my Dex
        </div>
        <Transition>
            <Modal :size="'modal-xl'" v-if="dexVisibility" @onClose="closeModal">
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
                        class="inline-flex justify-center cursor-pointer rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black inset-ring inset-ring-black/5 hover:bg-black/20 sm:mt-0 sm:w-auto"
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
import { computed, onMounted, ref } from 'vue';
import Modal from './Modal.vue';
import Bouncer from './Bouncer.vue';

const bouncerStore = useBouncerStore();
const bouncers = computed(() => bouncerStore.bouncers);
const ownedBouncers = ref([]);
const dexVisibility = ref(false);

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