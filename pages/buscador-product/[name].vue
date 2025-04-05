<template>
  <section class="container mx-auto w-11/12">
    <p>Resultados para: {{ searchTerm }}</p>
    <div v-if="error">
      <p>Error: {{ error.message || error }}</p>
    </div>
    <div v-else-if="data" class="grid grid-cols-4 gap-x-3 gap-y-3">
      <NuxtLink
        v-for="product in data"
        :key="product.id"
        class="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-2 h-[320px] flex flex-col justify-between"
        :to="`/exclusivo/${product.id}`"
      >
        <div
          class="h-40 flex justify-center items-center border-b border-gray-300 bg-white"
        >
          <img
            v-if="product.product_images?.[0]?.image"
            :src="product.product_images[0].image"
            :alt="product.name"
            class="w-28 h-28 object-contain"
          />
          <div
            v-else
            class="w-28 h-28 flex justify-center items-center text-gray-500"
          >
            Imagen no disponible
          </div>
        </div>

        <div class="flex flex-col items-center text-center p-3 gap-1 flex-grow">
          <span class="text-sm font-medium text-gray-700 leading-tight">
            {{ product.name }}
          </span>
          <span class="text-base text-gray-500 font-semibold">
            {{ product.price }}
          </span>
        </div>

        <div class="p-2">
          <button
            class="bg-blue-600 text-white flex items-center justify-center font-semibold gap-2 px-4 py-2 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 w-full"
          >
            <Icon name="ep:circle-plus-filled" class="text-xl" />
            Agregar
          </button>
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

// Extraemos el término de búsqueda de los parámetros de la ruta
const searchTerm = route.params.name as string;

// Llamamos al endpoint getProduct pasando el parámetro "term"
const { data, error } = await useFetch(
  `/api/getProduct?term=${encodeURIComponent(searchTerm.toUpperCase())}`
);

console.log(data);
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>
