<script setup>
import HeaderAccueil from '@/components/HeaderAccueil.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <HeaderAccueil v-if="$route.path === '/'" />
  <Header v-else />
  <Synapse>
  <RouterView />
  </Synapse>
</template>

<style scoped>
</style>
