<template>
  <section class="bg-gray-100 relative flex flex-col items-center justify-center p-4 lg:p-6">
    <!-- View Computer -->
    <ViewComputerProvider
      :categories="categories"
      :status="status"
      :getBrands="getBrands"
    />

    <!-- View Movil -->
    <ViewMovilProvider
      :categories="categories"
      :status="status"
      :getBrands="getBrands"
    />
<!-- 
    <div class="flex items-center justify-center py-5">
      <div class="flex justify-center items-center space-x-4">
        <button
          class="border rounded-md bg-white px-3 py-2 text-2xl text-gray-500 transition hover:bg-gray-300 hover:text-gray-700 cursor-pointer shadow-md"
          @click="bad_page()"
        >
          ‹
        </button>
        <div class="text-gray-600 font-semibold text-lg">
          {{ brands?.current_page }} / {{ brands?.last_page }}
        </div>
        <button
          class="border rounded-md bg-white px-3 py-2 text-2xl text-gray-500 transition hover:bg-gray-300 hover:text-gray-700 cursor-pointer shadow-md"
          @click="current_page()"
        >
          ›
        </button>
      </div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import ViewComputerProvider from "~/components/providers/ViewComputerProvider.vue";
import ViewMovilProvider from "~/components/providers/ViewMovilProvider.vue";

import type { IGetBrands, IGetCategoryResponse } from "~/interfaces";

const config = useRuntimeConfig();

const page = ref<number>(1);

// const current_page = () => {
//   if (page.value < brands.value?.last_page!) {
//     page.value = page.value + 1;
//   }
// };

// const bad_page = () => {
//   if (page.value > 0) {
//     page.value = page.value - 1;
//   }
// };

const { data: categories } = useFetch<IGetCategoryResponse[]>(
  `${config.public.api_url}/category`
);

const { data: brands, status } = useFetch<IGetBrands>(
  `${config.public.api_url}/brands/public`,
  // { lazy: true },
  { watch: [page] }
);

// console.log(brands, "brandas");
const getBrands = computed(() => brands.value?.brands ?? []);
</script>

<style scoped></style>
