<script setup lang="ts">
const url = useRequestURL()

const title = 'Portfolio | Gabrielle Louise Reynes'
const description =
  'Digital portfolio of Gabrielle Louise Reynes, an Information Technology student aspiring to become a data analyst.'

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
  <Section title="Welcome!" tight>
    <p class="text-sm font-semibold">
      This is my digital portfolio. Click below to know more about me.
    </p>

    <NuxtLink
      to="/about"
      class="btn btn-primary mt-5 rounded-lg font-bold shadow-lg shadow-secondary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-secondary"
    >
      About me
    </NuxtLink>
  </Section>
</template>