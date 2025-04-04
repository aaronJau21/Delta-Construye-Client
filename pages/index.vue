<template>
  <div class="w-full flex flex-col justify-center items-center gap-8 py-6">
    <CarrouselComponent />
    <CategoriasDestacados />
    <!-- <OfertasDelMesComponent /> -->
    <ClientesComponent />
  </div>
</template>

<script setup lang="ts">
import CarrouselComponent from "~/components/home/CarrouselComponent.vue";
import CategoriasDestacados from "~/components/home/CategoriasDestacados.vue";
import ClientesComponent from "~/components/home/ClientesComponent.vue";
import OfertasDelMesComponent from "~/components/home/OfertasDelMesComponent.vue";
</script>

<style scoped></style>
