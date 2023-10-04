<template>
  <div class="flex">
    <div class="w-3/4">
      <T3Renderer
        v-if="content?.colPos1"
        :content="content.colPos1"
      />
    </div>
    <div class="w-1/4">
      <T3Renderer
        v-if="content?.colPos0"
        :content="content.colPos0"
      />
    </div>
  </div>

</template>

<script lang="ts" setup>
import { T3BackendLayout } from '@t3headless/nuxt-typo3'
defineProps<T3BackendLayout>()
</script>