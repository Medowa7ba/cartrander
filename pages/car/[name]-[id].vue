<template>
<div>
        <CarDetailHero :car="car"/>
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :description="car.description"/>
        <CarDetailContact />
</div>
</template>
<script lang="ts" setup>
const {cars} = useCars()
const route = useRoute();
const {toTitleCase} = useUtilities()
useHead({
  title: toTitleCase(route.params.name )
});
const car = computed(() => {
  return cars.find((e) =>{
    return e.id === parseInt(route.params.id)
  })
})
if(!car.value){
  throw createError({
    statusCode: 404,
    statusMessage: `Car With ID of ${route.params.id} does not exist`
  })
}
definePageMeta({
    layout: 'custom'
})

</script>

<style>

</style>