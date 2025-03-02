<template>
  <div class="lg:flex lg:container gap-8 hidden">
    <!-- Categorías -->
    <div
      class="w-[21rem] rounded border border-gray-200 shadow-lg overflow-hidden max-h-screen"
    >
      <div class="bg-gray-400 p-4 text-white text-lg font-semibold">
        Categorías
      </div>

      <!-- Mostrar categorías si ya cargaron -->
      <ul class="p-4 min-h-[300px] bg-white" v-if="status !== 'pending'">
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

    <!-- Marcas -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full"
    >
      <template v-if="status === 'pending'">
        <!-- Skeletons dinámicos según la cantidad de productos -->
        <v-skeleton-loader
          v-for="n in getBrands.length || 8"
          :key="n"
          type="card"
          class="w-full h-60 rounded-lg shadow-lg bg-gray-200"
        />
      </template>

      <template v-else>
        <!-- Mostrar los productos reales -->
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
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { IData, IGetCategoryResponse } from "~/interfaces";
import { ref } from "vue";
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";

defineProps<{
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getBrands: IData[];
}>();
</script>
