<template>
  <section>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full"
    >
      <template v-if="status === 'pending'">
        <!-- Skeletons dinámicos según la cantidad de productos -->
        <v-skeleton-loader
          v-for="n in getProducts.length || 8"
          :key="n"
          type="card"
          class="w-full h-[320px] rounded-lg shadow-lg bg-gray-200"
        />
      </template>

      <template v-else>
        <!-- Mostrar los productos reales -->
        <NuxtLink
          v-for="product in getProducts"
          :key="product.id"
          class="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-2 h-[320px] flex flex-col justify-between"
          :to="`/products/${product.sku}`"
        >
          <!-- Contenedor de la imagen -->
          <div
            class="h-40 flex justify-center items-center border-b border-gray-300 bg-white overflow-hidden"
          >
            <img
              src="https://peruconstruye.net/wp-content/uploads/2024/02/4-12.jpg"
              :alt="product.name"
              class="max-w-full max-h-full object-contain"
            />
          </div>

          <!-- Información del producto -->
          <div
            class="flex flex-col items-center text-center p-3 gap-1 flex-grow"
          >
            <span class="text-sm font-medium text-gray-700 leading-tight">
              {{ product.name }}
            </span>
            <span class="text-base text-gray-500 font-semibold">
              {{ product.price }}
            </span>
          </div>

          <!-- Botón Agregar -->
          <div class="p-2">
            <button
              @click.stop="handleAddClick"
              class="bg-blue-600 text-white flex items-center justify-center font-semibold gap-2 px-4 py-2 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 w-full"
            >
              <Icon name="ep:circle-plus-filled" class="text-xl" />
              Agregar
            </button>
          </div>
        </NuxtLink>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";
import type { Datum } from "~/interfaces";

defineProps<{
  status: any;
  getProducts: Datum[];
}>();

const handleAddClick = (event: Event) => {
  event.stopPropagation();
  console.log("Producto agregado al carrito o lista de selección");
};
</script>

<style scoped></style>
