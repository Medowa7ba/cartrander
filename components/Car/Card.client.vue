<template>
  <div>
            <div class="shadow border w-full relative overflow-hidden mb-5 cursor-pointer h-[200px]">
            <img class="absolute w-7  right-5 top-2 z-20" :src="favored ? heartFilled : heartOutline" @click="emit('favor', car.id)">
            <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
              <NuxtImg src="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2022TOC040001_1280_01" class="w-[300px] h-full" />
              <div class="p-4 flex flex-col">
                  <div>
                    <h1 class="text-2xl text-blue-700">{{car.name}}</h1>
                    <p class="text-gray-700">{{car.description}}</p>
                  </div>
                  <h1 class="mt-auto text-xl">${{car.price}}</h1>
              </div>
            </div>
        </div>
  
  </div>
</template>

<script  setup lang="ts">
import heartFilled from '@/assets/002 heartFilled.png'
import heartOutline from '@/assets/002 heartOutline.png'
const props = defineProps({
    car: Object,
    favored: Boolean,
})
const emit = defineEmits('favor')
</script>

<style>

</style>