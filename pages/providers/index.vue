<template>
  <section class="bg-gray-100 relative">
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
  </section>
</template>

<script setup lang="ts">
import ViewComputerProvider from "~/components/providers/ViewComputerProvider.vue";
import ViewMovilProvider from "~/components/providers/ViewMovilProvider.vue";

import type { IGetBrands, IGetCategoryResponse } from "~/interfaces";

const config = useRuntimeConfig();

const { data: brands, status } = useFetch<IGetBrands>(
  `${config.public.api_url}/brands/public`,
  { lazy: true }
);
const { data: categories } = useFetch<IGetCategoryResponse[]>(
  `${config.public.api_url}/category`
);
const getBrands = computed(() => brands.value?.brands ?? []);
</script>

<style scoped></style>
