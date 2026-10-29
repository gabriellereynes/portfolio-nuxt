<script setup lang="ts">
import Certcard from '~/components/certcard.vue';
import { certifications } from '~/data/certifications'
</script>

<template>
  <Section title="Certifications">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Certcard
        v-for="cert in certifications"
        :key="cert.name"
        :cert="cert"
      />
    </div>
  </Section>
</template>