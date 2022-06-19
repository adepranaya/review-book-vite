<template>
  <Container class="bg-accent rounded-3xl px-5 py-7 lg:py-24 lg:px-16 flex flex-col items-center justify-center flex-wrap gap-12 relative">
    <img src="/assets/images/decor-reviews.png" alt="" class="absolute top-0 right-0 w-24 lg:w-auto">
    <div class="text-dark">
      <div class="font-bold text-blue-dark text-2xl lg:text-4xl leading-tight mt-4 text-center">Recommended books <br> from you to review</div>
    </div>
    <div class="flex justify-center flex-wrap gap-8">
      <input type="text" placeholder="write your recommendation" class="bg-white rounded-md py-4 px-5 border-b-2 border-dark placeholder-dark w-80" />
      <FurButton>Submit</FurButton>
    </div>
  </Container>
</template>
