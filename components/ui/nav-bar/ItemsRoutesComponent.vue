<template>
  <nav class="container mx-auto md:flex md:justify-around hidden">
    <NuxtLink
      v-for="item in itemRoutes"
      :key="item.to"
      :to="item.to"
      class="n-link-base relative px-4 py-2 transition duration-300 hover:bg-gray-100 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-red-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 font-semibold"
      :class="{ '!border-none': true }"
    >
      {{ item.name }}
    </NuxtLink>
    <a
      :href="pdfUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="n-link-base relative px-4 py-2 transition duration-300 hover:bg-gray-100 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-red-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 font-semibold"
    >
      Catálogo
    </a>
  </nav>
</template>



<script setup lang="ts">
import { itemRoutes, pdfUrl } from "./itemRoutes";
</script>
