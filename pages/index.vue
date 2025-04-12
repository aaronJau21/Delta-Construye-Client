<template>
  <div class="w-full flex flex-col justify-center items-center gap-8 py-6">
    <CarrouselComponent />
    <CategoriasDestacados />
    <!-- <OfertasDelMesComponent /> -->
     <AlphaComponen />
    <ClientesComponent />
  </div>
</template>

<script setup lang="ts">
import AlphaComponen from "~/components/home/AlphaComponen.vue";
import CarrouselComponent from "~/components/home/CarrouselComponent.vue";
import CategoriasDestacados from "~/components/home/CategoriasDestacados.vue";
import ClientesComponent from "~/components/home/ClientesComponent.vue";
</script>

<style scoped></style>
