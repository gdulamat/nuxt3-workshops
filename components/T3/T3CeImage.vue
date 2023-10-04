<template>
  <section class="p-4">
    <img class="mt-4 mx-auto max-w-sm" v-bind="imageData">
  </section>
</template>

<script setup lang="ts">
import { T3CeGalleryProps } from '@t3headless/nuxt-typo3'

const props = defineProps<T3CeGalleryProps>()
const imageData = computed(() => {
  const image = props.gallery.rows?.['1']?.columns?.['1']
  return {
    src: image?.publicUrl || '',
    alt: image?.properties?.alternative || ''
  } 
})

</script>