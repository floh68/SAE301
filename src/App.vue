<script setup>
import HeaderAccueil from '@/components/HeaderAccueil.vue';
import Header2 from '@/components/Header.vue';
import FooterPage from '@/components/Footer.vue';
</script>

<template>
  <HeaderAccueil v-if="$route.path === '/'" />
  <Header2 v-else />
  <Suspense>
  <RouterView />
  </Suspense>
  <FooterPage />
</template>

<style scoped>
</style>
