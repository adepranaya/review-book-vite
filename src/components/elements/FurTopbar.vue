<template>
  <div class="flex justify-between">
    <div class="flex items-center basis-0 grow">
      <!-- assets -->
      <img src="/logo.svg" alt="" />
    </div>
    <div class="flex flex-1 items-center relative">
      <input type="text" class="bg-gray-100 w-full p-2 pr-8 rounded font-serif text-gray-200" placeholder="Find the book you are looking for">
      <img src="/assets/icons/search.svg" alt="" class="absolute right-2" />
    </div>
    <div class="flex items-center basis-0 grow justify-end">
      <div class="flex gap-4">
        <button><img src="/assets/icons/search.svg" alt="" /></button>
        <button><img src="/assets/icons/cart.svg" alt="" /></button>
        <button><img src="/assets/icons/profile.svg" alt="" /></button>
      </div>
    </div>
  </div>
</template>
