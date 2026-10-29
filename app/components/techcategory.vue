<script setup lang="ts">
import type { TechCategoryData } from '~/data/techStack'
import Techbadge from './techbadge.vue';

defineProps<{ category: TechCategoryData }>()
</script>

<template>
  <div>
    <h3 class="mb-4 text-xl font-semibold transition-colors hover:text-primary">
      {{ category.title }}
    </h3>
    <ul class="flex flex-wrap gap-3">
      <techbadge v-for="item in category.items" :key="item.name" :item="item" />
    </ul>
  </div>
</template>