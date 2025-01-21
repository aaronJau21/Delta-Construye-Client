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
interface RouteItem {
  name: string;
  to: string;
}

const pdfUrl: string =
  "https://dzsm51n6xs13l.cloudfront.net/media/documents/CATALOGO_EQUIP.pdf";

const itemRoutes: RouteItem[] = [
  { name: "Inicio", to: "/" },
  { name: "Marcas", to: "/providers" },
  { name: "Categorías", to: "/providers/Hola Mundo" },
  { name: "Productos", to: "/products" },
];
</script>
