<template>
  <div>
        <div class="w-full">
        <CarCard v-for="car in cars" :key="car.id" :car="car" @favor='handleFavorite' :favored='car.id in favorite' />
      </div>
  </div>
</template>

<script lang="ts" setup>

const favorite = useLocalStorage('favorite', {});
const handleFavorite = (id:number | string) => {
if(id in favorite.value){
  delete favorite.value[id]
}else{
  favorite.value = {
    ...favorite.value,
    [id]: true
  }
}
}
const props = defineProps({
  cars: Array,
});

</script>

<style>

</style>