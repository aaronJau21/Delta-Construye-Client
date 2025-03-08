<template>
  <section>
    <div v-if="status == 'pending'">
      <LoadingComponent />
    </div>
    <div class="grid grid-cols-5 gap-5 p-4" v-else>
      <NuxtLink
        v-for="product in getProducts"
        :key="product.id"
        class="bg-white rounded-md shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
        :to="`/products/${product.id}`"
      >
        <div
          class="h-40 flex justify-center items-center border-b border-gray-300 bg-white"
        >
          <img
            v-if="product.product_images?.[0]?.image"
            :src="product.product_images[0].image"
            :alt="product.name"
            class="w-28 h-28 object-contain"
          />
          <div
            v-else
            class="w-28 h-28 flex justify-center items-center text-gray-500"
          >
            Imagen no disponible
          </div>
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
  </section>
</template>

<script setup lang="ts">
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";
import type { IGetProductsNoPrice } from "~/interfaces";

const config = useRuntimeConfig();
const { data: products, status } = useFetch<IGetProductsNoPrice>(
  `${config.public.api_url}/product/get/no-price`,
  { lazy: true }
);

const getProducts = computed(() => products.value?.data);
</script>

<style scoped></style>
