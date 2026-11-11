<script setup lang="ts">
import { Menu, X } from '@lucide/vue'
import { navLinks } from '~/data/navLinks'

const route = useRoute()
const open = ref(false)

// Close the mobile menu whenever the page changes
watch(
  () => route.path,
  () => {
    open.value = false
  },
)
</script>

<template>
  <nav class="mb-10 rounded-lg border-4 border-secondary p-4" aria-label="Main navigation">
    <!-- Mobile: hamburger button + dropdown list -->
    <div class="md:hidden">
      <button
        type="button"
        class="btn btn-ghost btn-sm gap-2 px-1 font-bold hover:bg-transparent hover:text-primary"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        @click="open = !open"
      >
        <component :is="open ? X : Menu" :size="20" aria-hidden="true" />
        Menu
      </button>

      <ul v-if="open" id="mobile-menu" class="menu mt-3 w-full gap-1 p-0 text-sm">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            exact-active-class="text-primary"
            class="flex items-center gap-2 font-bold hover:bg-transparent hover:text-primary aria-[current=page]:bg-transparent!"
          >
            <component :is="link.icon" :size="16" aria-hidden="true" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Desktop: horizontal links -->
    <ul
      class="menu menu-horizontal hidden items-center gap-x-10 p-0 text-sm md:flex"
    >
      <li v-for="link in navLinks" :key="link.to">
        <NuxtLink
          :to="link.to"
          exact-active-class="text-primary"
          class="flex items-center gap-2 rounded-none p-0 font-bold hover:bg-transparent hover:text-primary aria-[current=page]:bg-transparent!"
        >
          <component :is="link.icon" :size="16" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>