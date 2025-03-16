<template>
  <section class="bg-gray-100 relative flex flex-col p-4 lg:p-6 mb-16">
    <ExclusiveComponent
      :status="status"
      :getProducts="getProducts"
      :categories="categories"
    />
  </section>
</template>

<script setup lang="ts">
import ExclusiveComponent from "~/components/exclusive/ExclusiveComponent.vue";
import type { IGetProductsNoPrice } from "~/interfaces";
import ViewComputerProduct from "~/components/products/ViewComputerProduct.vue";
import type { IGetCategoryResponse, IGetProducts } from "~/interfaces";

const config = useRuntimeConfig();

const page = ref<number>(1);

const current_page = () => {
  if (page.value < products.value?.last_page!) {
    page.value = page.value + 1;
  }
};

const bad_page = () => {
  if (page.value > 0) {
    page.value = page.value - 1;
  }
};

const { data: categories } = useFetch<IGetCategoryResponse[]>(
  `${config.public.api_url}/category`
);

// console.log(products, "getProducts");

// const getProducts = computed(() => products.value?.data);

const { data: products, status } = useFetch<IGetProducts>(
  () => `${config.public.api_url}/product?page=${page.value}`,
  { watch: [page] }
);

const getProducts = computed(() => products.value?.data ?? []);
console.log(getProducts, "productos");
const total_product = computed(() => products.value?.total);
</script>

<style scoped></style>
