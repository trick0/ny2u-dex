<template>
    <div class="bouncer relative bouncer-card m-auto">
        <div class="absolute bouncer-ap">{{ bouncer.ap }}</div>
        <div class="absolute uppercase text-right bouncer-name">{{ bouncer.name }}</div>
        <div class="absolute uppercase text-right bouncer-type">{{ bouncer.type }}</div>
        <div class="absolute bouncer-image"><BouncerImage :id="bouncer.id"/></div>
    </div>
</template>
<script setup lang="ts">
import BouncerImage from './BouncerImage.vue';

    const props = defineProps(["id", "bouncer"]);
</script>
<style>
    .bouncer-card {
        font-family: 'Aseprite';
        width: 384px;
        height: 384px;
        background-image: url("/empty-card-background.png");
        image-rendering: pixelated;
    }

    .bouncer-card .bouncer-ap {
        color: #fef3c0;
        font-size: 19px;
        top: 120px;
        left: 124px;
    }

    .bouncer-card .bouncer-name {
        color: #ffd541;
        font-size: 15px;
        bottom: 104px;
        right: 107px;
    }

    .bouncer-card .bouncer-type {
        color: #9cdb43;
        font-size: 15px;
        top: 134px;
        right: 104px;
    }

    .bouncer-card > .bouncer-image {
        bottom: 126px;
        left: 127px;
    }
</style>
