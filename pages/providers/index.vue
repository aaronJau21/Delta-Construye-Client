<template>
  <section class="bg-gray-100">
    <div class="flex container mx-auto">
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
  </section>
</template>

<script setup lang="ts">
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";
import type { IGetBrands, IGetCategoryResponse } from "~/interfaces";

const config = useRuntimeConfig();
const { data: brands, status } = useFetch<IGetBrands>(
  `${config.public.api_url}/brands?page=1`,
  { lazy: true }
);
const { data: categories } = useFetch<IGetCategoryResponse[]>(
  `${config.public.api_url}/category`
);
const getBrands = computed(() => brands.value?.data ?? []);
</script>

<style scoped></style>
