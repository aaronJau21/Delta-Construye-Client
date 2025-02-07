<template>
  <div class="bg-gray-100">
    <p>{{ total_product }}</p>
    <div class="flex mx-16">
      <div class="w-72">1</div>
      <div class="flex-1" v-if="status == 'pending'">
        <UiLoadingComponent />
      </div>
      <div class="flex-1 grid grid-cols-4 gap-5 p-4" v-else>
        <NuxtLink
          v-for="product in getProducts"
          :key="product.id"
          class="bg-white rounded-md shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          :to="`/products/${product.sku}`"
        >
          <div class="h-52 border-b border-black z-10 flex justify-center">
            <img
              src="https://peruconstruye.net/wp-content/uploads/2024/02/4-12.jpg"
              :alt="product.name"
              class="w-full z-0"
            />
          </div>
          <div class="mb-5">
            <h3 class="text-xl text-center my-5">
              {{ product.name }}
            </h3>
            <h4 class="text-lg text-center my-5">
              {{ product.price }}
            </h4>
            <div class="flex justify-center items-center">
              <button
                class="flex items-center text-blue-500 gap-x-2 hover:text-gray-400 hover:scale-105 transition-transform duration-300"
              >
                <Icon name="ep:circle-plus-filled" class="" />
                Agregar
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGetProducts } from "~/interfaces";

const config = useRuntimeConfig();
const { data: products, status } = useFetch<IGetProducts>(
  `${config.public.api_url}/product`
);
const getProducts = computed(() => products.value?.data);
const total_product = computed(() => products.value?.total);
</script>

<style scoped></style>
