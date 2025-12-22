<template>
    <div>
        <div v-if="isNewPackAvailable" @click="openPack"
            class="openPack rounded-xl cursor-pointer text-center my-4 border border-emerald-600 hover:border-emerald-900 hover:bg-emerald-600 hover:text-black p-4">
            New pack available!
        </div>
        <Transition>
            <Modal :theme="'dark'" v-if="isPackOpening" @onClose="closeModal">
                <template #header>
                    <div class="text-xl font-bold text-center">
                        New pack!
                    </div>
                </template>
                <div class="flex justify-center">
                    <div v-for="bouncer of newBouncers" class="mx-4">
                        <Bouncer :bouncer="bouncer" :id="bouncer.id" :key="bouncer.name" />
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
import { computed, onMounted, ref } from 'vue';
import Modal from './Modal.vue';
import { usePackStore } from '@/stores/pack';
import type { BouncerType } from '@/models/models';
import Bouncer from './Bouncer.vue';
import { useBouncerStore } from '@/stores/bouncer';

const packStore = usePackStore();
const bouncerStore = useBouncerStore();
const isNewPackAvailable = ref(false)
const isPackOpening = ref(false);
const newBouncers = ref([] as BouncerType[]);

onMounted(() => {
    CheckCanOpenPack();
})

function openPack() {
    isPackOpening.value = true;
    newBouncers.value = packStore.newPack();
    bouncerStore.addBouncers(newBouncers.value);
    CheckCanOpenPack();
}

function CheckCanOpenPack() {
    if (localStorage.getItem("lastPackOpeningTime") == null) {
        isNewPackAvailable.value = true;
        return;
    }

    const lastPackOpening = localStorage.getItem("lastPackOpeningTime") || "0";
    const lastPackDate = new Date(Number(lastPackOpening));

    isNewPackAvailable.value = new Date().getTime() - 86400000 >= lastPackDate.getTime();
}

function closeModal() {
    isPackOpening.value = false;
}
</script>