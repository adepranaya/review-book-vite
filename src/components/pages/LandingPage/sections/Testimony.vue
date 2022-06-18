<template>
  <Container class="grid grid-cols-3 gap-4">
    <template v-for="(item, index) in 3" :key="index">
      <TestimonyCard></TestimonyCard>
    </template>
  </Container>
</template>
