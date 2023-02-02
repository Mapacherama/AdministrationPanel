<template>
  <Header />
  <RouterView />
  <Footer class="layout-footer" />
</template>

<script setup>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
</script>
