<template>
    <div class="modal-container flex justify-center items-center fixed w-full h-full m-0 bg-black/75">
        <div class="back fixed w-full h-full m-0 bg-black/75" @click="closeModal"></div>
        <div :class="[size, theme]" class="modal relative md:max-w-md sm:max-w-sm lg:max-w-lg m-auto rounded p-4">
            <slot name="header"></slot>
            <div class="my-4">
                <slot></slot>
            </div>
            <div class="my-4">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(["size", "theme"]);
const emits = defineEmits(["onClose"]);

const theme = computed(() => props.theme == "dark" ? "bg-neutral-800 text-white" : "bg-white text-neutral-800")

function closeModal() {
    console.log('on close');

    emits("onClose");
}
</script>

<style>
.modal-container {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    animation: enter ease-out 350ms forwards;
}

.modal {
    width: 720px
}

.modal-xl {
    width: 1200px !important;
    max-width: 1200px !important;
}

@keyframes enter {
    from {
        margin-top: -15px;
        margin-bottom: 0px;
    }

    to {
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
</style>