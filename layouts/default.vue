<script setup lang="ts">
const initialData = useT3InitialDataState()
const navigation = computed(() => initialData.value.navigation?.[0]?.children || [])
</script>

<template>
  <div>
    <nav class="flex py-2 justify-center border-orange-500 border-b-2 sticky top-0 bg-white">
      <NuxtLink class="mx-2"  to="/">Main page</NuxtLink>
      <NuxtLink class="mx-2" v-for="item in navigation" :to="item.link">{{ item.title }}</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>