<template>
  <section class="bg-gray-100 relative flex justify-center p-4 lg:p-6">
    <!-- view Computer -->
    <ViewComputerProduct
      :total_product="total_product"
      :categories="categories"
      :status="status"
      :getProducts="getProducts"
    />

    <!-- View Movil -->
    <ViewMovilProduct
      :total_product="total_product"
      :categories="categories"
      :status="status"
      :getProducts="getProducts"
    />
<!-- 
    <div class="flex items-center justify-center py-5">
      <div class="flex justify-center items-center space-x-4">
        <button
          class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          @click="bad_page()"
        >
          <
        </button>
        <div class="text-slate-500">
          {{ products?.current_page }} / {{ products?.last_page }}
        </div>
        <button
          class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
          @click="current_page()"
        >
          >
        </button>
      </div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import ViewComputerProduct from "~/components/products/ViewComputerProduct.vue";
import ViewMovilProduct from "~/components/products/ViewMovilProduct.vue";
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

const { data: products, status } = useFetch<IGetProducts>(
  () => `${config.public.api_url}/product?page=${page.value}`,
  { watch: [page] }
);
const getProducts = computed(() => products.value?.data);
const total_product = computed(() => products.value?.total);
</script>

<style scoped></style>
