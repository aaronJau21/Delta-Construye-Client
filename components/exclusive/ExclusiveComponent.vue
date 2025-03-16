<template>
  <section class="flex flex-col gap-8">
    <!-- Buscador y Botón de Filtro -->
    <div class="block md:hidden flex-col gap-4">
      <div class="flex gap-6">
        <input
          type="text"
          class="w-full h-[40px] bg-white border border-gray-300 rounded-md outline-none focus:border-blue-600 p-2"
          placeholder="Buscar Marca..."
        />
        <button
          @click="isFilterOpen = !isFilterOpen"
          class="flex items-center gap-2 font-semibold"
        >
          Filtro
          <Icon name="fa6-solid:filter" />
        </button>
      </div>
    </div>

    <!-- Modal de Filtros -->
    <div
      v-if="isFilterOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <!-- Botón de cierre (X roja) -->
        <div>
          <div class="flex flex-col items-end">
            <div
              @click="isFilterOpen = false"
              class="text-red-600 hover:text-red-800 text-xl cursor-pointer font-bold"
            >
              X
            </div>
          </div>

          <h2 class="text-lg font-semibold mb-4">Filtrar por Categoría</h2>
        </div>

        <ul>
          <li
            v-for="category in categories"
            :key="category.id"
            class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md"
          >
            <input type="checkbox" class="w-4 h-4" />
            <span class="text-gray-800">{{ category.name }}</span>
          </li>
        </ul>
        <button
          class="mt-4 bg-primary text-white px-4 py-2 rounded-md w-full"
          @click="isFilterOpen = false"
        >
          Filtrar
        </button>
      </div>
    </div>

    <div class="flex gap-8">
      <div
        class="w-[21rem] h-full rounded border border-gray-200 shadow-lg flex-none overflow-hidden hidden md:block"
      >
        <div class="bg-gray-400 p-4 text-white text-lg font-semibold">
          Categorías
        </div>
        <ul
          class="bg-white h-full p-4 min-h-[300px]"
          v-if="status !== 'pending'"
        >
          <li
            v-for="category in categories"
            :key="category.id"
            class="flex justify-between items-center p-3 rounded-md hover:bg-gray-200 transition gap-2"
          >
            <div class="flex items-center gap-3">
              <input
                type="checkbox"
                class="w-4 h-4 accent-gray-600 cursor-pointer flex-shrink-0"
              />
              <p class="text-gray-800 font-medium text-sm">
                {{ category.name }}
              </p>
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
      
      <!-- Marcas -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full"
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
            :to="`/products/${encodeURIComponent(product.sku)}`"
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
                {{ product?.name }}
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
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Datum, IGetCategoryResponse } from "~/interfaces";

defineProps<{
  categories: IGetCategoryResponse[] | null;
  status: any;
  getProducts: Datum[];
  
}>();

const isFilterOpen = ref(false);

const handleAddClick = (event: Event) => {
  event.stopPropagation();
};
</script>

<style scoped></style>
