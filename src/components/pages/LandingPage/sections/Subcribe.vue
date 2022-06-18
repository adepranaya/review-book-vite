<template>
  <Container class="bg-accent rounded-3xl py-24 px-16 flex flex-col items-center justify-center flex-wrap gap-12 relative">
    <img src="/assets/images/decor-reviews.png" alt="" class="absolute top-0 right-0">
    <div class="text-dark">
      <div class="font-bold text-blue-dark text-4xl leading-tight mt-4 text-center">Recommended books <br> from you to review</div>
    </div>
    <div class="flex gap-8">
      <input type="text" placeholder="write your recommendation" class="bg-white rounded-md py-4 px-5 border-b-2 border-dark placeholder-dark w-80" />
      <FurButton>Submit</FurButton>
    </div>
  </Container>
</template>
