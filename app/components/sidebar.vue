<script setup lang="ts">
defineProps<{
  showOnMobile?: boolean
}>()
</script>



<template>
  <aside
    class="w-full flex-col justify-center border-b-4 border-secondary p-4 md:w-1/3 md:border-b-0 md:border-r-4 md:p-8 lg:w-1/4"
    :class="showOnMobile ? 'flex' : 'hidden md:flex'"
    >
    <div class="flex flex-col items-center text-center">
      <img
        src="/images/home/portrait.png"
        alt="Portrait of Gabrielle Louise Reynes"
        class="mb-4 h-72 w-60 object-contain"
      >
      <h1 class="text-2xl font-bold text-neutral">Gabrielle Louise Reynes</h1>
      <p class="text-sm font-semibold">Future IT Professional</p>
      <a
        href="https://github.com/gabriellereynes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <img
          src="/images/home/github.png"
          alt="GitHub Profile"
          class="mt-2 h-6 w-6 transition-transform duration-200 hover:scale-110"
        >
      </a>
    </div>
  </aside>
</template>