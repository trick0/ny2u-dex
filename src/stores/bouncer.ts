import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import bouncerDB from '@/assets/bouncers.json';
import typeDB from '@/assets/types.json';

export const useBouncerStore = defineStore('bouncer', () => {

  const bouncers = ref(bouncerDB.map((b, index) => ({ ...b, id: index})));
  const bouncerTypes = ref(typeDB);
  const filter = ref();
  const activeFilterTypes = ref([] as string[]);
  const filteredBouncersByText = computed(() => bouncers.value.filter((bouncer) => filter.value ? bouncer.name.includes(filter.value) : bouncer))
  const filteredBouncers = computed(() => activeFilterTypes.value.length > 0 ? activeFilterTypes.value.map((type: string) => bouncers.value.filter(bouncer => bouncer.type == type)).flat() : filteredBouncersByText.value)
  const bouncersCount = computed(() => bouncers.value.length)

  function toggleTypeFilter(filterType: string) {
    if(activeFilterTypes.value.includes(filterType)) {
      activeFilterTypes.value = activeFilterTypes.value.filter((f) => f != filterType)
      return;
    }

    activeFilterTypes.value.push(filterType);
  }

  function resetTypeFilter() {
    activeFilterTypes.value = []
  }
  
  function getBouncerById(id: number) {
    return bouncers.value[id];
  }

  function getBouncerByType(id: number) {
    return bouncers.value[id];
  }

  function getOwnedBouncers() {
    const ownedBouncers = localStorage.getItem("bouncers");
    const bouncers = ownedBouncers ? JSON.parse(ownedBouncers || "") || [] : [];
    return bouncers;
  }

  function setOwnedBouncers(bouncers: {}) {
    localStorage.setItem("bouncers", JSON.stringify(bouncers));
  }

  return { bouncers, bouncerTypes, activeFilterTypes, filteredBouncers, bouncersCount, filter, getBouncerById, getBouncerByType, toggleTypeFilter, resetTypeFilter, getOwnedBouncers, setOwnedBouncers }
})
