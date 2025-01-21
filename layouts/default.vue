<template>
  <div class="">
    <NavbarComponent />
    <slot />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "~/components/ui/footer/FooterComponent.vue";
import NavbarComponent from "~/components/ui/nav-bar/NavbarComponent.vue";
</script>

<style scoped></style>
