<script setup lang="ts">
import Techcategory from '~/components/techcategory.vue';
import { techstack } from '~/data/techstack'

const url = useRequestURL()

const title = 'Tech Stack | Gabrielle Louise Reynes'
const description =
  'Languages and tools used by Gabrielle Louise Reynes.'

useHead({
  title,
  link: [{ rel: 'canonical', href: url.href }],
})

useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: url.href,
  ogImage: `${url.origin}/images/home/portrait.png`,
  ogImageAlt: 'Portrait of Gabrielle Louise Reynes',
})

</script>

<template>
  <Section title="Tech Stack">
    <div class="space-y-10">
      <Techcategory
        v-for="category in techstack"
        :key="category.title"
        :category="category"
      />
    </div>
  </Section>
</template>