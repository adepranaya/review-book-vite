<script setup lang="ts">
defineProps({
  title: String
})
let productDummies = [
  {
    img: "/dummy/popular/selena_cov.png",
    name: "Selena",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/popular/selena_cov.png",
    name: "Selena",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/popular/selena_cov.png",
    name: "Selena",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/popular/selena_cov.png",
    name: "Selena",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/dummy/product-1.png",
  },
];
</script>

<template>
  <div>
    <Container class="mt-10 mb-14">
      <div>
        <div class="flex justify-between gap-6 mt-5 mb-10">
          <h2 class="text-2xl">{{ title }}</h2>
          <a href="#" class="text-gray-400">
            View All
          </a>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <!-- loop -->
        <ProductCard
          v-for="(product, index) in productDummies"
          :key="index"
          :img="product.img"
          :name="product.name"
          :price="product.price"
          :description="product.description"
          :link="product.link"
        ></ProductCard>
      </div>
    </Container>
  </div>
</template>
