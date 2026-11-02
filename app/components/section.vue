<script setup lang="ts">
defineProps<{
  title: string
  tight?: boolean
  icon?: Component
}>()
</script>

<template>
  <section class="rounded-lg border-4 border-secondary p-6 md:p-10">
    <h2
      class="text-3xl font-bold transition-colors hover:text-primary"
      :class="tight ? 'mb-3' : 'mb-7'"
    >
      <component v-if="icon" :is="icon" class="mr-2 inline h-6 w-6" />  
      {{ title }}
    </h2>
    <slot />
  </section>
</template>