<template>
  <section class="bg-gray-100 relative flex flex-col p-4 lg:p-6 mb-16">
    <ViewComputerProduct
      :getProducts="getProducts"
      :categories="categories"
      :status="status"
    />
  </section>
</template>

<script setup lang="ts">
import ViewComputerProduct from "~/components/products/ViewComputerProduct.vue";
import type { IGetCategoryResponse, IGetProductsNoPrice } from "~/interfaces";

const config = useRuntimeConfig();

const { data: categories } = useFetch<IGetCategoryResponse[]>(
  `${config.public.api_url}/category`
);
const { data: products, status } = useFetch<IGetProductsNoPrice>(
  `${config.public.api_url}/product/get/no-price`,
  { lazy: true }
);

const getProducts = computed(() => products.value?.data ?? []);

</script>

<style scoped></style>
