<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

const heading = computed(() => (is404.value ? 'Page not found' : 'Something went wrong'))

const message = computed(() =>
  is404.value
    ? 'This page does not exist. Click below to return to the home page. '
    : 'An unexpected error occurred. Please try again in a moment.',
)

const title = computed(() =>
  is404.value
    ? '404 Page Not Found | Gabrielle Louise Reynes'
    : `${props.error.statusCode ?? 'Error'} | Gabrielle Louise Reynes`,
)

useHead({ title })

useSeoMeta({
  description: message,
  ogTitle: title,
  ogDescription: message,
  robots: 'noindex, nofollow',
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <div
    class="flex min-h-screen items-center justify-center bg-[url('/images/home/mybackground.png')] bg-cover bg-center p-4"
  >
    <main
      class="flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl border-4 border-secondary bg-white/20 p-8 text-center shadow-2xl backdrop-blur-md md:p-12"
    >
      <p class="text-8xl font-black text-primary md:text-9xl" aria-hidden="true">
        {{ error.statusCode }}
      </p>
      <h1 class="text-3xl font-bold">{{ heading }}</h1>
      <p class="max-w-md text-sm/7 font-semibold">{{ message }}</p>

      <button
        type="button"
        class="btn btn-primary mt-2 rounded-lg font-bold shadow-lg shadow-secondary transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-secondary"
        @click="goHome"
      >
        Back to home
      </button>
    </main>
  </div>
</template>