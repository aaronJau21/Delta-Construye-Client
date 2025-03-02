<template>
  <div class="flex lg:flex lg:container gap-8 hidden">
    <!-- Categorías -->
    <div
      class="w-[21rem] rounded border border-gray-200 shadow-lg overflow-hidden max-h-screen"
    >
      <div class="bg-gray-400 p-4 text-white text-lg font-semibold">
        Categorías
      </div>

      <!-- Mostrar categorías si ya cargaron -->
      <ul class="bg-white h-full p-4 min-h-[300px]" v-if="status !== 'pending'">
        <li
          class="flex justify-between items-center p-3 rounded-md hover:bg-gray-200 transition gap-2"
          v-for="category in categories"
          :key="category.id"
        >
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              class="w-4 h-4 accent-gray-600 cursor-pointer flex-shrink-0"
            />
            <p class="text-gray-800 font-medium text-sm">{{ category.name }}</p>
          </div>
          <p class="text-gray-500 font-semibold text-sm">
            {{ category.brands_count }}
          </p>
        </li>
      </ul>

      <!-- Skeleton de categorías -->
      <div v-else class="p-4 min-h-[300px] flex flex-col gap-3">
        <v-skeleton-loader
          v-for="n in 6"
          :key="n"
          type="list-item-three-line"
          class="h-10"
        />
      </div>
    </div>

    <!-- Productos -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full"
    >
      <template v-if="status === 'pending'">
        <!-- Skeletons dinámicos según la cantidad de productos -->
        <v-skeleton-loader
          v-for="n in getProducts.length  || 8"
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
          <!-- Imagen del producto -->
          <div
            class="h-40 flex justify-center items-center border-b border-gray-300 bg-white"
          >
            <img
              :src="product.product_images[0].image"
              :alt="product.name"
              class="w-28 h-28 object-contain"
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
              @click="handleAddClick"
              class="bg-blue-600 text-white flex items-center justify-center font-semibold gap-2 px-4 py-2 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 w-full"
            >
              <Icon name="ep:circle-plus-filled" class="text-xl" />
              Agregar
            </button>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { Datum, IData, IGetCategoryResponse } from "~/interfaces";

defineProps<{
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getProducts: Datum[];
}>();

const handleAddClick = (event: any) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("Producto agregado al carrito (aún no implementado)");
};
</script>
