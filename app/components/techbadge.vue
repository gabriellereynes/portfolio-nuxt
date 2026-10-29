<script setup lang="ts">
import type { TechItem } from '~/data/techStack'

defineProps<{ item: TechItem }>()
</script>

<template>
  <li
    class="badge badge-lg h-auto gap-2 rounded-full border-white bg-base-200 px-4 py-2 text-sm font-semibold text-base-content shadow-lg shadow-gray-700/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-base-300 hover:text-base-200"
  >
    <img :src="item.icon" :alt="`${item.name} logo`" class="h-5 w-5 object-contain">
    {{ item.name }}
  </li>
</template>