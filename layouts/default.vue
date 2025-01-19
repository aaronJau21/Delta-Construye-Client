<template>
  <div class="">
    <NavbarComponent />
    <slot />
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "~/components/ui/nav-bar/NavbarComponent.vue";
</script>

<style scoped></style>
