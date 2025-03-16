<template>
  <section class="bg-gray-100 relative flex flex-col p-4 lg:p-6">
    <!-- View Computer -->
    <ViewComputerProvider
      :categories="categories"
      :status="status"
      :getBrands="getBrands"
      :selectedCategoryId="category_id"
      @categorySelected="handleCategorySelected"
    />
  </section>
</template>

<script setup lang="ts">
import ViewComputerProvider from "~/components/providers/ViewComputerProvider.vue";

import type { IGetBrands, IGetCategoryResponse } from "~/interfaces";

const category_id = ref<number>(0);

const handleCategorySelected = (categoryId: number) => {
  category_id.value = categoryId;
};
const { data: categories } = useFetch<IGetCategoryResponse[]>(`/api/category`);

const brandsUrl = computed(() => `/api/brands?param=${category_id.value}`);

const { data: brands, status } = useFetch<IGetBrands>(brandsUrl, {
  watch: [brandsUrl],
});
const getBrands = computed(() => brands.value?.brands ?? []);
</script>

<style scoped></style>
