<template>
  <section class="bg-gray-100 relative flex flex-col p-4 lg:p-6 mb-16">
    <ExclusiveComponent
      :status="status"
      :getProducts="getProducts"
      :categories="categories"
    />
    <div class="flex items-center justify-center mt-7">
      <div class="flex justify-center items-center space-x-4">
        <button
          @click="bad_page()"
          class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          <
        </button>
        <div class="text-slate-500">
          {{ products?.current_page }} /{{ products?.last_page }}
        </div>
        <button
          @click="current_page()"
          class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExclusiveComponent from "~/components/exclusive/ExclusiveComponent.vue";
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

const { data: categories } = useFetch<IGetCategoryResponse[]>(`/api/category`);

const { data: products, status } = useFetch<IGetProducts>(
  () => `/api/products?page=${page.value}`,
  { watch: [page] }
);

const getProducts = computed(() => products.value?.data ?? []);
</script>

<style scoped></style>
