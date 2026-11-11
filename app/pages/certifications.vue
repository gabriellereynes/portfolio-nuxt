<script setup lang="ts">
import { certifications } from '~/data/certifications'

const url = useRequestURL()

const title = 'Certifications | Gabrielle Louise Reynes'
const description =
  'Certifications earned by Gabrielle Louise Reynes: Word Associate, PowerPoint Associate, and IT Specialist - Databases.'

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
  ogImage: `${url.origin}/images/certifications/badgeword.png`, 
  ogImageAlt: 'Microsoft Office Specialist Word Associate badge',
})
</script>

<template>
  <Section title="Certifications">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <CertCard
        v-for="cert in certifications"
        :key="cert.name"
        :cert="cert"
      />
    </div>
  </Section>
</template>