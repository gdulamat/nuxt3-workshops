<template>
  <NuxtLayout :name="frontendLayout">
    <T3BackendLayout :name="backendLayout" :content="pageData?.content" />
  </NuxtLayout>
</template>

<script setup>
const { frontendLayout, backendLayout, pageData } = await useT3Page()
definePageMeta({
  layout: false
})
</script>