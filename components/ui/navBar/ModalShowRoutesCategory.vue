<template>
  <div v-if="showRouteCategory.show" class="absolute z-50">
    <div class="relative">
      <div
        class="bg-black w-[99vw] h-screen opacity-50"
        @click="showRouteCategory.showRoutes()"
      />
      <div class="absolute top-0 bg-sideBar text-white h-screen w-96">
        <div class="border-b border-global-bg py-7">
          <h3 class="text-xl">Categoria</h3>
        </div>
        <nav class="flex flex-col max-h-[80vh] overflow-y-auto">
          <NuxtLink
            v-for="category in categoriesArray"
            :key="category.id"
            :href="`/category/${category.name}`"
            class="text-lg w-full border border-global-bg py-3 px-5 hover:text-secondary"
          >
            {{ category.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGetCategoryResponse } from "~/interfaces";
import { useShowRoutesCategory } from "~/store/ui/showRoutesCategory";

const showRouteCategory = useShowRoutesCategory();

const { data: categories } = useFetch<IGetCategoryResponse[]>("/api/category");

const categoriesArray = computed(() => categories.value);
</script>

<style scoped>
a.router-link-exact-active {
  color: #cc0001;
}

a.router-link-exact-active :hover {
  color: #ff0000;
}
</style>

<!-- 
a.router-link-exact-active {
  background-color: #cc0001;
  padding: 4px 12px;
  color: #fff;
  border-radius: 4px; /* Bordes redondeados */
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
} -->
