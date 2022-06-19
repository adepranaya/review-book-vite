<script lang="ts" setup>
let testimonies = [
  {
    name: "Eka Ardilah",
    image: "/dummy/user.png",
    testimony: "I feel very helpful with all the books provided, so I do my job easily and happily"
  },
  {
    name: "Hazar Hamzah",
    image: "/dummy/hazar.png",
    testimony: "Thank you. Many good books to accompany everyday"
  },
  {
    name: "Khoerunnisa",
    image: "/dummy/user-3.png",
    testimony: "Thanks team, many recommended books for me to read"
  }
]
</script>

<template>
  <Container class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <template v-for="(item, index) in testimonies" :key="index">
    <div
    :class="index%2 == 0 ? 'lg:pt-12': ''">

      <TestimonyCard :name="item.name" :image="item.image" :testimony="item.testimony"></TestimonyCard>
    </div>
    </template>
  </Container>
</template>
