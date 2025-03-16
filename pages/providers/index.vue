<template>
  <section class="bg-gray-100 relative flex flex-col p-4 lg:p-6">
    <!-- View Computer -->
    <ViewComputerProvider
      :categories="categories"
      :status="status"
      :getBrands="getBrands"
    />
  </section>
</template>

<script setup lang="ts">
import ViewComputerProvider from "~/components/providers/ViewComputerProvider.vue";

import type { IGetBrands, IGetCategoryResponse } from "~/interfaces";

const config = useRuntimeConfig();

const page = ref<number>(1);

const { data: categories } = useFetch<IGetCategoryResponse[]>(`/api/category`);

const { data: brands, status } = useFetch<IGetBrands>(`/api/brands`, {
  watch: [page],
});

const getBrands = computed(() => brands.value?.brands ?? []);
</script>

<style scoped></style>
