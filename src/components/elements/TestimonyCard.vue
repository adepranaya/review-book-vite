<script lang="ts" setup>
defineProps({
  name: String,
  image: String,
  testimony: String
});
</script>

<template>
  <div class="text-center flex flex-col group">
    <img :src="image" alt="" width="100" class="m-auto z-10 relative">
    <div class="bg-white group-hover:bg-accent rounded-2xl shadow-2xl shadow-gray-200 -mt-11 p-10 relative">
      <img src="/assets/icons/quotes.svg" alt="" class="absolute -top-2 right-2">
      <p class="mt-8">{{ name }}</p>
      <p class="text-gray-300 group-hover:text-gray-700 mt-10">{{ testimony }}</p>
    </div>
  </div>
</template>