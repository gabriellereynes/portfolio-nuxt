<script setup lang="ts">
import type { Certification } from '~/data/certifications'

const props = defineProps<{ cert: Certification }>()

const modal = ref<HTMLDialogElement | null>(null)
const fullTitle = computed(() => `${props.cert.issuer} ${props.cert.name}`)
</script>

<template>
  <article class="card rounded-lg border-4 border-dashed border-secondary p-2">
    <button
      type="button"
      class="block cursor-zoom-in overflow-hidden rounded-t-lg"
      :aria-label="`View ${fullTitle} certificate`"
      @click="modal?.showModal()"
    >
      <img
        :src="cert.badge"
        :alt="`${fullTitle} badge`"
        class="h-full w-full bg-white/30 object-contain backdrop-blur-md"
      >
    </button>

    <p class="p-2 text-center text-sm font-bold">
      {{ cert.issuer }}<br>{{ cert.name }}
    </p>

    <div class="card-actions justify-center">
      <a
        :href="cert.verifyUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-sm rounded-full font-bold shadow-lg shadow-secondary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-secondary"
      >
        Verify
      </a>
    </div>

    <dialog ref="modal" class="modal">
      <div class="modal-box max-w-3xl bg-base-100">
        <h3 class="mb-4 text-lg font-bold">{{ fullTitle }}</h3>
        <img :src="cert.image" :alt="`${fullTitle} certificate`" class="w-full rounded-lg">
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-secondary btn-sm">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button aria-label="Close">close</button>
      </form>
    </dialog>
  </article>
</template>