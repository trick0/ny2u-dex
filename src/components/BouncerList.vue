<template lang="html">
    <div class="bouncer-list md:gap-4 sm:gap grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 m-auto">
        <Bouncer v-for="(bouncer) of bouncers" :bouncer="bouncer" :id="bouncer.id" :key="bouncer.name"
            @click="selectBouncer(bouncer)" />
        <Modal v-if="selectedBouncer && selectedBouncer.name" @onClose="closeModal">
            <template #header>
                <div class="bouncer-name text-3xl font-bold my-2 capitalize flex flex-inline items-center">
                    <div class="bouncer-image-background bg-neutral-900 rounded-full flex justify-center items-center">
                        <BouncerImage :id="selectedBouncer.id" />
                    </div>
                    <span class="ml-4">
                        {{ selectedBouncer.name }}
                    </span>
                </div>
                <hr>
            </template>
            <div>
                <div class="bouncer-type my-2">
                    <span class="font-bold">Type:</span>
                    <span
                        class="rounded-md p-2 m-2 border border-transparent text-sm text-white bg-neutral-800 transition-all shadow-sm">
                        {{ selectedBouncer.type }}
                    </span>
                </div>
                <div class="bouncer-baseYeetPower my-2">
                    <span class="font-bold">Base Yeet Power:</span>
                    <span>{{ selectedBouncer.baseYeetPower }}</span>
                </div>
                <div class="bouncer-ap my-2">
                    <span class="font-bold">AP:</span>
                    <span>{{ selectedBouncer.ap }}</span>
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
    </div>
</template>

<script setup lang="ts">
import { useBouncerStore } from '@/stores/bouncer';
import { computed, ref } from 'vue';
import BouncerImage from './BouncerImage.vue';
import Bouncer from './Bouncer.vue';
import Modal from './Modal.vue';
import type { BouncerType } from '@/models/models';
import type BouncerImageVue from './BouncerImage.vue';

const bouncerStore = useBouncerStore();
const bouncers = computed(() => bouncerStore.filteredBouncers);
const selectedBouncer = ref();

function selectBouncer(bouncer: BouncerType) {
    selectedBouncer.value = bouncer;
}

function closeModal() {
    selectedBouncer.value = null;
}

</script>

<style>
.bouncer-list {
    max-width: 720px;
}

.bouncer-image-background {
    width: 64px;
    height: 64px;
}
</style>