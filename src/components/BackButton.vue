<template>
    <RouterLink :to="'/'">
        <div class="mb-4 pb-4 m-auto flex px-4 mr-4 cursor-pointer border-b">
            <ArrowLeftCircleIcon class="size-6 mr-4" />
            Back
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';


</script>