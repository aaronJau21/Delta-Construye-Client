<template>
  <div class="w-full">
    <NavBarPanel />
    <slot />
  </div>
</template>

<script setup lang="ts">
import NavBarPanel from "~/components/panel/NavBarPanel.vue";
</script>

<style scoped></style>
