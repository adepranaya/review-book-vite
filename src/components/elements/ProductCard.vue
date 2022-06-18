<script setup>
// props img, name, price, description, link
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-white drop-shadow-lg rounded-xl px-5 py-7 flex flex-col justify-between"
  >
    <div class="mb-6">
      <img :src="img" alt="" class="w-full object-cover rounded-md mb-6" />
      <div class="flex justify-between">
        <h2 class="text-2xl">{{ name }}</h2>
      </div>
      <div class="flex gap-1 mt-2">
        <img src="/assets/icons/star.svg" alt="" />
        <img src="/assets/icons/star.svg" alt="" />
        <img src="/assets/icons/star.svg" alt="" />
        <img src="/assets/icons/star.svg" alt="" />
        <img src="/assets/icons/star.svg" alt="" />
      </div>
      <p class="mt-6 text-gray-500">Tere liye</p>
    </div>
    <div class="flex items-center gap-2">
      <img src="/dummy/Author avatar.png" alt="">
      <p class="font-sans">Andre Syak <span class="text-gray-400">• 1 week ago</span> </p>

    </div>
  </div>
</template>
