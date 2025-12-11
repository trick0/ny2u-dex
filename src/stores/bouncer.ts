import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import bouncerDB from '@/assets/bouncers.json';

export const useBouncerStore = defineStore('bouncer', () => {

  const bouncers = ref(bouncerDB.map((b, index) => ({ ...b, id: index})));
  const filter = ref();
  const filteredBouncer = computed(() => bouncers.value.filter((bouncer) => filter.value ? bouncer.name.includes(filter.value) : bouncer))
  const bouncersCount = computed(() => bouncers.value.length)
  
  function getBouncer(id: number) {
    return bouncers.value[id];
  }

  return { bouncers, filteredBouncer, bouncersCount, filter, getBouncer }
})
