<template>
  <header class="py-5 bg-white">
    <!-- Header Options -->
    <div class="flex justify-between mx-9 items-center">
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

    <!-- Routers -->
    <ItemsRoutesComponent />
  </header>
</template>

<script setup lang="ts">
import ItemsRoutesComponent from "./ItemsRoutesComponent.vue";
</script>

<style scoped></style>
