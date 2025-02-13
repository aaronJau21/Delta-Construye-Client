<template>
  <div class="hidden lg:flex lg:container lg:mx-auto">
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
    <div class="flex-1 grid grid-cols-4 gap-5 p-4" v-else>
      <div
        v-for="brand in getBrands"
        :key="brand.id"
        class="bg-white rounded-md shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <div class="h-52 border-b border-black z-10 flex justify-center">
          <img :src="brand.logo" :alt="brand.name" class="w-full z-0" />
        </div>
        <h3 class="text-xl text-center my-5">
          {{ brand.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { IData, IGetCategoryResponse } from "~/interfaces";
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";

defineProps<{
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getBrands: IData[];
}>();
</script>

<style scoped></style>
