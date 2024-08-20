<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img
        src="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2022TOC040001_1280_01"
        alt=""
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-4"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        class="text-red-400 cursor-pointer"
        @click="emits('deleteClick', listing.id, listing.image)"
      >
        Delete
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  listing: Object,
});

const emits = defineEmits(["deleteClick"]);
</script>
