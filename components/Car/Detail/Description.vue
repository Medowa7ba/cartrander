<template>
  <div class="mt-5">
    <p class="mb-10">
        {{description}}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  description:String,
})
</script>

<style>

</style>