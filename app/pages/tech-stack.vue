<script setup lang="ts">
import Techcategory from '~/components/techcategory.vue';
import { techStack } from '~/data/techStack'
</script>

<template>
  <Section title="Tech Stack">
    <div class="space-y-10">
      <Techcategory
        v-for="category in techStack"
        :key="category.title"
        :category="category"
      />
    </div>
  </Section>
</template>