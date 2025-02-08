<template>
  <div class="bg-gray-100">
    <div class="flex mx-16">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";
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
