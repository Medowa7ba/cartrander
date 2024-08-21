<template>
  <div class="flex h-screen justify-center items-center flex-col">
        <Vue3Lottie
      animationLink="https://assets10.lottiefiles.com/packages/lf20_soCRuE.json"
      :height="200"
      :width="200"
    />
        <h1 class="text-9xl">{{error.statusCode}}</h1>
        <p class="mt-7 text-4xl">{{error.message}}</p>
        <button @click="handleError" class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white">Go Back</button>
  </div>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
const handleError = () => {
    clearError({
      redirect: '/'
    })
}
const error = useError()
</script>

<style>

</style>