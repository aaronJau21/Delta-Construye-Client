<template>
  <div class="container mx-auto w-9/12">
    <TitleComponent title="Nuestros Clientes" class="text-center mb-9" />
    <NuxtLink to="/alpha">
      <img src="/home/alpha.jpg" class="w-full"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from "../ui/title/TitleComponent.vue";
</script>

<style scoped></style>
