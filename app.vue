<script setup lang="ts">
const colorMode = useColorMode();
colorMode.preference = "dark";
</script>

<template>
  <div class="_app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
