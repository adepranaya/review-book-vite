<template>
  <header class="max-w-6xl m-auto flex justify-center">
    <nav class="flex items-center">
      <ul class="inline-flex gap-4">
        <li><a href="/home" class="nav-item-active">Home</a></li>
        <li><a href="/bestseller" class="nav-item ">Bestseller</a></li>
        <li><a href="/category" class="nav-item">Category</a></li>
        <li><a href="/community" class="nav-item">Community</a></li>
        <li><a href="/blog" class="nav-item">Blog</a></li>
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