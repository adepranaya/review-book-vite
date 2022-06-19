<script setup lang="ts">
defineProps({
  title: String,
  products: Array,
});
</script>

<template>
  <div>
    <Container class="mt-10 mb-14">
      <div>
        <div class="flex justify-between gap-6 mt-5 mb-10">
          <h2 class="text-2xl">{{ title }}</h2>
          <a href="#" class="text-gray-400"> View All </a>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- loop -->
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :img="product.img"
          :name="product.name"
          :writer="product.writer"
          :author-name="product.authorName"
          :author-image="product.authorImage"
          :created-at="product.createdAt"
          :link="product.link"
        ></ProductCard>
      </div>
    </Container>
  </div>
</template>
