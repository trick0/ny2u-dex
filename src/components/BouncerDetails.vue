<template>
    <div>
        <div class="my-4 text-xs cursor-pointer font-bold" @click="toggle">
            Show {{ mode == 0 ? "card" : "details" }} view
        </div>
        <hr>
        <br>
        <div v-if="mode == 0">
            <div class="bouncer-type my-2">
                <span class="font-bold">Type:</span>
                <span
                    class="rounded-md p-2 m-2 border border-transparent text-sm text-white bg-neutral-800 transition-all shadow-sm">
                    {{ bouncer.type }}
                </span>
            </div>
            <div class="bouncer-baseYeetPower my-2">
                <span class="font-bold">Base Yeet Power:</span>
                <span>{{ bouncer.baseYeetPower }}</span>
            </div>
            <div class="bouncer-ap my-2">
                <span class="font-bold">AP:</span>
                <span>{{ bouncer.ap }}</span>
            </div>
        </div>
        <BouncerCard v-else :id :bouncer />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BouncerCard from './BouncerCard.vue';

const props = defineProps(["id", "bouncer"]);
const mode = ref(0);

onMounted(() => {
    addEventListener("keypress", (event) => {
        if (event.key == "-") {
            toggle();
        }
    })
})

function toggle() {
    mode.value = mode.value == 0
        ? 1
        : 0
}
</script>
