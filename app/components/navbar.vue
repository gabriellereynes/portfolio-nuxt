<script setup lang="ts">
import { navLinks } from '~/data/navLinks'
</script>

<template>
  <nav
    class="navbar mb-10 min-h-0 rounded-lg border-4 border-secondary p-4"
    aria-label="Main navigation"
  >
    <ul
      class="menu menu-horizontal flex-wrap items-center justify-center gap-x-4 gap-y-2 p-0 text-sm md:justify-start md:gap-x-10"
    >
      <li v-for="link in navLinks" :key="link.to">
        <NuxtLink
          :to="link.to"
          exact-active-class="text-primary"
          class="rounded-none p-0 font-bold hover:bg-transparent hover:text-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>