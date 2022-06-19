<template>
  <header class="max-w-6xl m-auto flex sm:justify-center ">
    <nav class="flex items-center overflow-x-auto h-12">
      <ul class="inline-flex gap-4 snap-x">
        <li><a href="/home" class="snap-center nav-item-active">Home</a></li>
        <li><a href="/bestseller" class="snap-center nav-item ">Bestseller</a></li>
        <li><a href="/category" class="snap-center nav-item">Category</a></li>
        <li><a href="/community" class="snap-center nav-item">Community</a></li>
        <li><a href="/blog" class="snap-center nav-item">Blog</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.nav-item {
  @apply text-blue-dark/50
}
.nav-item-active {
    @apply text-blue-dark border-b pb-2 border-primary;
  }
</style>