<template>
  <div>
    <p>Panel</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "panel",
  middleware: ["auth"],
});
</script>

<style scoped></style>
