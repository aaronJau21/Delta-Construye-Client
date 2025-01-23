<template>
  <header class="py-5 bg-white">
    <!-- Header Options -->
    <div class="md:flex md:justify-between mx-9 items-center hidden">
      <img src="/logo.jpg" alt="Logo de Imperio Ferretero" class="w-32" />
      <div class="bg-white flex">
        <input
          placeholder="Buscar Productos"
          class="w-96 placeholder:p-2 border border-gray-400 rounded-l focus:border-primary outline-none"
        />
        <!-- class="flex items-center bg-primary px-3 py-1 text-white rounded-r" -->
        <button
          class="flex items-center bg-primary px-3 py-1 text-white rounded-r hover:bg-green-600 transition-colors"
          aria-label="Buscar productos"
        >
          <Icon name="weui:search-filled" />
          Buscar
        </button>
      </div>
      <div class="flex gap-x-5">
        <Icon
          name="material-symbols:shopping-cart-outline"
          size="31"
          class="cursor-pointer"
        />
        <Icon
          name="material-symbols:account-circle-full"
          size="31"
          class="cursor-pointer"
        />
      </div>
    </div>
    <ItemRouteResponseComponent />
    <!-- Header Movil -->
    <div class="flex justify-between items-center px-3 md:hidden">
      <img src="/logo.jpg" alt="Logo de Imperio Ferretero" class="w-32" />
      <div class="flex justify-between gap-x-5">
        <Icon
          name="material-symbols:shopping-cart-outline"
          size="25"
          class="cursor-pointer"
        />
        <Icon
          name="heroicons-outline:bars-3"
          size="25"
          class="cursor-pointer"
          @click="showModal.showModal()"
        />
        <Icon
          name="material-symbols:account-circle-full"
          size="25"
          class="cursor-pointer"
        />
      </div>
    </div>

    <!-- Routers -->
    <ItemsRoutesComponent />
  </header>
</template>

<script setup lang="ts">
import ItemRouteResponseComponent from "./ItemRouteResponseComponent.vue";
import ItemsRoutesComponent from "./ItemsRoutesComponent.vue";
import { useShowModalStore } from "~/store/ui/showModal.store";

const showModal = useShowModalStore();
</script>

<style scoped></style>
