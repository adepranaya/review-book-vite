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
  writer: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
  createdAt: {
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
  <a
    href="#"
    class="bg-white hover:bg-accent drop-shadow-lg rounded-xl px-5 py-7 flex flex-col justify-between"
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
      <p class="mt-6 text-gray-500">{{ writer }}</p>
    </div>
    <div class="flex items-center gap-2">
      <img :src="authorImage" alt="">
      <p class="font-sans">{{ authorName }} <span class="text-gray-400">• {{ createdAt }}</span> </p>
    </div>
  </a>
</template>
