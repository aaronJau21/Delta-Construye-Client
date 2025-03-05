<template>
  <div class="flex flex-col gap-8">
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

    <!-- Contenedor de Categorías y Marcas -->
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
          <v-skeleton-loader
            v-for="n in getBrands.length || 8"
            :key="n"
            type="card"
            class="w-full h-60 rounded-lg shadow-lg bg-gray-200"
          />
        </template>
        <template v-else>
          <div
            v-for="brand in getBrands"
            :key="brand.id"
            class="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-1"
          >
            <div
              class="h-52 border-b border-gray-300 flex justify-center items-center bg-white"
            >
              <img
                :src="brand.logo"
                :alt="brand.name"
                class="w-40 h-40 object-contain"
              />
            </div>
            <div
              class="flex justify-between items-center text-lg font-semibold text-gray-700 text-center p-4"
            >
              <span class="text-left">{{ brand.name }}</span>
              <span class="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { AsyncDataRequestStatus } from "#app";
import type { IData, IGetCategoryResponse } from "~/interfaces";

const isFilterOpen = ref(false);

defineProps<{
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getBrands: IData[];
}>();
</script>
