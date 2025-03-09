<template>
  <section class="bg-gray-100 relative flex flex-col p-4 lg:p-6 mb-16">
    <ExclusiveComponent :status="status" :getProducts="getProducts" />
  </section>
</template>

<script setup lang="ts">
import ExclusiveComponent from "~/components/exclusive/ExclusiveComponent.vue";
import type { IGetProductsNoPrice } from "~/interfaces";

const config = useRuntimeConfig();
const { data: products, status } = useFetch<IGetProductsNoPrice>(
  `${config.public.api_url}/product/get/no-price`,
  { lazy: true }
);

console.log(products, "getProducts");

const getProducts = computed(() => products.value?.data);
</script>

<style scoped></style>
