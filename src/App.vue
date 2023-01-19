<script setup>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer class="layout-footer" />
</template>

<style scoped>
.layout-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid var(--surface-border);
  position: fixed;
  bottom: 0;
  width: 100%;
  font-family: var(--font-family);
}
</style>
