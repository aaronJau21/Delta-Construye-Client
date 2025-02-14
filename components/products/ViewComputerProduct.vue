<template>
  <div class="hidden lg:flex lg:mx-16">
    <p class="text-center">{{ total_product }}</p>
    <div class="w-72">
      <ul class="mt-16">
        <li class="flex justify-between my-3" v-for="category in categories">
          <div class="flex justify-center gap-x-3">
            <input type="checkbox" />
            <p class="flex-1">{{ category.name }}</p>
          </div>
          <p class="flex-1 flex justify-end">{{ category.brands_count }}</p>
        </li>
      </ul>
    </div>
    <div class="flex-1" v-if="status == 'pending'">
      <LoadingComponent />
    </div>
    <div class="flex-1 grid grid-cols-5 gap-5 p-4" v-else>
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
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { Datum, IGetCategoryResponse } from "~/interfaces";
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";

defineProps<{
  total_product: number | undefined;
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getProducts: Datum[] | undefined;
}>();
</script>

<style scoped></style>
