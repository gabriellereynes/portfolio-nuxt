<script setup lang="ts">
const url = useRequestURL()

const title = 'About | Gabrielle Louise Reynes'
const description =
  'Learn more about Gabrielle Louise Reynes, a second-year IT student studying SQL and aiming to specialize as a data analyst.'

useHead({
  title,
  link: [{ rel: 'canonical', href: url.href }],
})

useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: url.href,
  ogImage: `${url.origin}/images/home/portrait.png`,
  ogImageAlt: 'Portrait of Gabrielle Louise Reynes',
})
</script>


<template>
  <Section title="About">
    <div class="space-y-6">
      <p class="text-sm/7 font-semibold">
        Hello! My name is Gabrielle Louise Reynes. I am a third year college student studying as
        an Information Technology major. I am passionate about learning new knowledge, something
        that will help me especially in the IT world.
      </p>
      <p class="text-sm/7 font-semibold">
        Although I am aiming to acquire a well-rounded skillset that will enable me to approach my
        work flexibly, I wish to specialize as a data analyst. Currently, I am studying tools such
        as SQL to become adept in this field. I find it fulfilling to be able to transform raw data
        into meaningful information that can be used by various businesses. There is no shortage of
        demand in this field and as technologies continue to emerge, managing data has never been
        more crucial.
      </p>
    </div>
  </Section>
</template>