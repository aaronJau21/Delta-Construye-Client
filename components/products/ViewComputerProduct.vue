<template>
  <div class="flex lg:flex lg:container gap-8 hidden">
    <!-- Categorías -->
    <div
      class="w-84 rounded border border-gray-200 shadow-lg overflow-hidden max-h-screen"
    >
      <div class="bg-gray-400 p-4 text-white text-lg font-semibold">
        Categorías
      </div>
      <ul class="p-4">
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
    </div>

    <!-- Cargando -->
    <div class="flex-1" v-if="status == 'pending'">
      <LoadingComponent />
    </div>

    <!-- Productos -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full"
      v-else
    >
      <NuxtLink
        v-for="product in getProducts"
        :key="product.id"
        class="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-1"
        :to="`/products/${product.sku}`"
      >
        <div
          class="h-52 border-b border-gray-300 flex justify-center items-center bg-white"
        >
          <img
            :src="product.product_images[0].image"
            :alt="product.name"
            class="w-40 h-40 object-contain"
          />
        </div>
        <div
          class="flex flex-col items-center text-lg font-semibold text-gray-700 text-center p-4 gap-2"
        >
          <span class="text-sm">{{ product.name }}</span>
          <span class="text-lg text-gray-500">{{ product.price }}</span>
          <button
            class="bg-blue-600 text-white flex items-center font-semibold gap-2 px-4 py-2 rounded-lg transition-all hover:bg-blue-700 hover:scale-105"
          >
            <Icon name="ep:circle-plus-filled" class="text-xl" />
            Agregar
          </button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { Datum, IGetCategoryResponse } from "~/interfaces";
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";

defineProps<{
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getProducts: Datum[] | undefined;
}>();
</script>

<style scoped></style>
