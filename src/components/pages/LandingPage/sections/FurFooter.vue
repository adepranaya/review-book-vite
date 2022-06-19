<template>
  <footer class="">
    <Container class="py-12">
      <div class="flex justify-between flex-wrap gap-8 items-start">
        <!-- assets -->
        <div>
          <img src="/logo.svg" alt="" />
          <p class="mt-4 text-gray-400">Is the best place to review a book</p>
        </div>
        <div class="flex flex-wrap gap-8 lg:gap-48">
          <div>
            <h2 class="text-2xl mb-3">Navigation</h2>
            <ul class="font-thin text-blue-dark/50 space-y-2">
              <li><a href="/home" class="hover:text-blue-dark">Home</a></li>
              <li>
                <a href="/bestseller" class="hover:text-blue-dark"
                  >Bestseller</a
                >
              </li>
              <li>
                <a href="/category" class="hover:text-blue-dark">Category</a>
              </li>
              <li>
                <a href="/community" class="hover:text-blue-dark">Community</a>
              </li>
              <li><a href="/blog" class="hover:text-blue-dark">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl mb-3">Company</h2>
            <ul class="font-thin text-blue-dark/50 space-y-2">
              <li>admin@reviewbook.com</li>
              <li>Jln. Stiabudhi No. 193</li>
              <li>Bandung Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-between flex-wrap gap-8 mt-8">
        <p class="text-gray-400">© 2021 ReviewBook. All rights reserved.</p>
        <div class="flex flex-col items-end self-end">
          <div class="flex gap-3 mb-5">
            <a href=""><img src="/assets/icons/instagram.svg" alt="" /></a>
            <a href=""><img src="/assets/icons/facebook.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>
