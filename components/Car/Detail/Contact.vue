<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        type="text"
        class="border p-1"
        placeholder="Name"
        v-model="contactData.name"
      />
      <input
        type="text"
        class="border p-1"
        placeholder="Email"
        v-model="contactData.email"
      />
      <input
        type="text"
        class="border p-1"
        placeholder="Phone"
        v-model="contactData.phone"
      />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        class="border p-1 w-full"
        placeholder="Message"
        v-model="contactData.message"
      ></textarea>
    </div>
    <button
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
      @click="handleSubmit"
    >
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">{{errorMessage}}</p>
    <p v-if="succesMessage" class="mt-3 text-green-400">{{succesMessage}}</p>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const contactData = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const errorMessage = ref('')
const succesMessage = ref('')
const handleSubmit = async () => {
  try{

    const { error, data } = await $fetch(
      `/api/car/listings/${route.params.id}/message`,
      {
        method: "post",
        body: contactData,
      }
    );
 succesMessage.value = "Message sent!";
errorMessage.value = ''
  }
catch(err){
 errorMessage.value = err.statusMessage;
succesMessage.value = ''
}
};
</script>

<style>

</style>