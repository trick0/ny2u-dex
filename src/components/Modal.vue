<template>
    <div class="modal-container flex justify-center items-center fixed w-full h-full m-0 bg-black/75">
        <div class="back fixed w-full h-full m-0 bg-black/75" @click="closeModal"></div>
        <div class="modal relative md:max-w-md sm:max-w-sm lg:max-w-lg m-auto bg-white rounded text-neutral-800 p-4">
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
const emits = defineEmits(["onClose"]);
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
}

.modal {
    width: 720px
}
</style>