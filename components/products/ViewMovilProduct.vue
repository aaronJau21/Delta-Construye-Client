<template>
  <div class="lg:hidden mx-5 py-9">
    <div v-if="showFilter.show" class="absolute bg-white h-screen w-[90%] z-10">
      <div class="flex justify-between p-5">
        <h2>Categorias</h2>
        <Icon
          name="codex:cross"
          class="text-2xl text-secundary"
          @click="showFilter.showFilter()"
        />
      </div>
      <div class="">
        <ul class="p-5">
          <li class="flex justify-between" v-for="category in categories">
            <div class="flex justify-center gap-x-3">
              <input type="checkbox" />
              <p class="flex-1">{{ category.name }}</p>
            </div>
            <p class="flex-1 flex justify-end">{{ category.brands_count }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mb-3">
      <h2>Marcas</h2>
      <button class="flex" @click="showFilter.showFilter()">
        <Icon name="fa6-solid:filter" />
        filtro
      </button>
    </div>

    <div class="mb-3">
      <input
        type="text"
        class="w-full bg-white border border-gray-300 rounded-md outline-none focus:border-blue-600 placeholder:p-2"
        placeholder="Buscar Marca..."
      />
    </div>
    <div>
      <div v-if="status == 'pending'">
        <LoadingComponent />
      </div>

      <div class="grid grid-cols-2 gap-5 p-4" v-else>
        <div
          v-for="product in getProducts"
          :key="product.id"
          class="bg-white rounded-md shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div class="h-52 border-b border-black z-10 flex justify-center">
            <img
              src="https://peruconstruye.net/wp-content/uploads/2024/02/4-12.jpg"
              :alt="product.name"
              class="w-full z-0"
            />
          </div>
          <h3 class="text-xl text-center my-5">
            {{ product.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AsyncDataRequestStatus } from "#app";
import type { Datum, IGetCategoryResponse } from "~/interfaces";
import LoadingComponent from "~/components/ui/loading/LoadingComponent.vue";
import { useShowFilterStore } from "~/store/ui/showFilter.store";

defineProps<{
  total_product: number | undefined;
  categories: IGetCategoryResponse[] | null;
  status: AsyncDataRequestStatus;
  getProducts: Datum[] | undefined;
}>();

const showFilter = useShowFilterStore();
</script>

<style scoped></style>
