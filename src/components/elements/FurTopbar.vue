<script setup lang="ts">
import { ref, onMounted } from "vue";
let sidebarShow = ref(false);
</script>

<template>
  <div class="flex justify-between flex-wrap items-center">
    <div class="flex items-center basis-0 grow">
      <!-- assets -->
      <img src="/logo.svg" alt="" />
    </div>

    <!-- mobile -->
    <div class="md:hidden">
      <button @click="sidebarShow = !sidebarShow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
    </div>
    <!-- end mobile -->

    <div
      class="mt-4 sm:mt-0 basis-full md:flex md:flex-1 items-center relative"
    >
      <input
        type="text"
        class="bg-gray-100 w-full p-2 pr-8 rounded font-serif text-gray-200"
        placeholder="Find the book you are looking for"
      />
      <img
        src="/assets/icons/search.svg"
        alt=""
        class="absolute right-2 top-2.5"
      />
    </div>
    <div class="hidden md:flex items-center basis-0 grow justify-end">
      <div class="flex gap-8">
        <button><img src="/assets/icons/love.svg" alt="" /></button>
        <button class="rounded-full bg-primary w-8 h-8 text-white">0</button>
        <button>EN</button>
      </div>
    </div>
  </div>
</template>
