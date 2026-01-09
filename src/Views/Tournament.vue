<template>
    <div class="mydex-container">
        <BackButton />

        <div class="m-auto border">
            <Tournament />
        </div>
    </div>
</template>
<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import Tournament from '@/components/Tournament.vue';
</script>
