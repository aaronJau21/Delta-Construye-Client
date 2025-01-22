<template>
  <nav class="container mx-auto md:flex md:justify-around hidden">
    <NuxtLink
      v-for="item in itemRoutes"
      :key="item.to"
      :to="item.to"
      class="n-link-base"
    >
      {{ item.name }}
    </NuxtLink>
    <a
      :href="pdfUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="n-link-base"
    >
      Catálogo
    </a>
  </nav>
</template>

<script setup lang="ts">
import { itemRoutes, pdfUrl } from "./itemRoutes";
</script>
