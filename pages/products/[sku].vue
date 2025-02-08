<template>
  <div>
    <div class="mx-16 p-7 my-16 flex gap-x-16 bg-white rounded-md">
      <div class="w-72">
        <img
          src="https://peruconstruye.net/wp-content/uploads/2024/02/4-12.jpg"
          :alt="getProduct?.name"
        />
      </div>
      <div class="flex-1">
        <p>
          Marca:
          <NuxtLink :to="`/providers`" class="text-secundary">
            {{ getProduct?.brands[0].name }}
          </NuxtLink>
        </p>
        <h2 class="text-4xl font-semibold">
          {{ getProduct?.name }}
        </h2>
        <p>
          {{ getProduct?.description == null ? "" : getProduct?.description }}
        </p>
        <form class="">
          <div class="flex justify-between mb-9">
            <div class="w-full mr-8">
              <label class="block">Variante:</label>
              <select
                class="w-full bg-white border border-gray-500 rounded outline-none focus:border focus:border-secundary"
              >
                <option value="1">Alabastro 1GL</option>
                <option value="2">Alabastro 2GL</option>
                <option value="3">Alabastro 3GL</option>
                <option value="4">Alabastro 4GL</option>
                <option value="5">Alabastro 5GL</option>
                <option value="6">Alabastro 6GL</option>
              </select>
            </div>
            <div>
              <label class="block">Cantidad:</label>
              <input
                type="text"
                value="1"
                class="border border-gray-500 rounded outline-none focus:border focus:border-secundary"
              />
            </div>
          </div>
          <hr class="border-gray-300 mb-9" />
          <button class="w-full bg-primary text-white rounded-xl text-xl py-1">
            Agregar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGetProductBySku } from "~/interfaces";

const route = useRoute();
const config = useRuntimeConfig();

const { data: product } = useFetch<IGetProductBySku>(
  () => `${config.public.api_url}/product/${route.params.sku}`
);
const getProduct = computed(() => product.value);
</script>
