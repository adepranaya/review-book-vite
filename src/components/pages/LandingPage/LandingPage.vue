<script lang="ts" setup>
let productDummies = [
  {
    img: "/dummy/popular/selena_cov.png",
    name: "Selena",
    writer: "Tere Liye",
    authorName: "Andre Syaks",
    authorImage: "/dummy/Author avatar.png",
    createdAt: "1 week ago",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/popular/habis.png",
    name: "How To Master Your Habits",
    writer: "Felix Y Siauw",
    authorName: "John Lucas",
    authorImage: "/dummy/Author avatar-2.png",
    createdAt: "5 day ago",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/popular/bintang.png",
    name: "Bintang",
    writer: "Tere Liye",
    authorName: "Ade Barkah",
    authorImage: "/dummy/Author avatar-3.png",
    createdAt: "6 month ago",
    link: "/dummy/product-1.png",
  },
  {
    img: "/dummy/popular/start-with-why.png",
    name: "Start With Why",
    writer: "Felix Y Siauw",
    authorName: "Ryan Dews",
    authorImage: "/dummy/Author avatar-4.png",
    createdAt: "3 month ago",
    link: "/dummy/product-1.png",
  },
];
let productLatestDummies = [
  {
    img: "/dummy/popular/product-1.png",
    name: "The Compound Effect",
    writer: "Tere Liye",
    authorName: "Andre Syaks",
    authorImage: "/dummy/Author avatar.png",
    createdAt: "1 week ago",
    link: "/dummy/popular/product-1.png",
  },
  {
    img: "/dummy/popular/product-2.png",
    name: "Build A Story Brand",
    writer: "Felix Y Siauw",
    authorName: "John Lucas",
    authorImage: "/dummy/Author avatar-2.png",
    createdAt: "5 day ago",
    link: "/dummy/popular/product-1.png",
  },
  {
    img: "/dummy/popular/product-3.png",
    name: "Crushing IT",
    writer: "Tere Liye",
    authorName: "Ade Barkah",
    authorImage: "/dummy/Author avatar-3.png",
    createdAt: "6 month ago",
    link: "/dummy/popular/product-1.png",
  },
  {
    img: "/dummy/popular/product-4.png",
    name: "Atomic Habits",
    writer: "Felix Y Siauw",
    authorName: "Ryan Dews",
    authorImage: "/dummy/Author avatar-4.png",
    createdAt: "3 month ago",
    link: "/dummy/popular/product-1.png",
  },
];
</script>

<template>
  <Hero></Hero>
  <Product title="Popular Now" :products="productDummies"></Product>
  <Product title="Latest Books" :products="productLatestDummies"></Product>
  <Subcribe class="my-14"></Subcribe>
  <Testimony class="my-14"></Testimony>
  <FurFooter></FurFooter>
</template>
