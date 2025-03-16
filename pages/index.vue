<template>
  <div class="w-full flex flex-col justify-center items-center gap-8 py-6">
    <CarruselComponent />
    <BrandsComponents />
    <BeneficiosComponent />
    <ProductsComponent />
    <CategoryComponent />
  </div>
</template>

<script setup lang="ts">
import BeneficiosComponent from "~/components/home/beneficios/BeneficiosComponent.vue";
import BrandsComponents from "~/components/home/brands/BrandsComponents.vue";
import CarruselComponent from "~/components/home/carrusel/CarruselComponent.vue";
import CategoryComponent from "~/components/home/category/CategoryComponent.vue";
import ProductsComponent from "~/components/home/products/ProductsComponent.vue";
</script>

<style scoped></style>
