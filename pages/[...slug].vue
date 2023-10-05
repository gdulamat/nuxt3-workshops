<template>
  <NuxtLayout :name="frontendLayout">
    <T3BackendLayout :name="backendLayout" :content="pageData?.content" />
  </NuxtLayout>
</template>

<script setup>
const { frontendLayout, backendLayout, pageData, headData } = await useT3Page()
useHead(headData)
definePageMeta({
  layout: false
})
</script>