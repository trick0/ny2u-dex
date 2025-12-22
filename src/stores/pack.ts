import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import bouncerDB from '@/assets/bouncers.json';
import { useBouncerStore } from './bouncer';
import type { BouncerType } from '@/models/models';

export const usePackStore = defineStore('pack', () => {
  const bouncerStore = useBouncerStore();
  const packIndexHelper = ref(0);

  function newPack(): BouncerType[] {
    const pack = [] as BouncerType[];
    for (let index = 0; index < 3; index++) {
      pack.push(bouncerStore.bouncers[~~(Math.random() * bouncerStore.bouncers.length)]!)      
    }
    localStorage.setItem("lastPackOpeningTime", new Date().getTime().toString());
    packIndexHelper.value++;
    return pack;
  }

  return { packIndexHelper, newPack }
})
