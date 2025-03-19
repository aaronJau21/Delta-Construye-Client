<template>
  <div class="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8 font-sans">
    <div class="text-center text-2xl font-semibold mb-5">Historial de pedidos</div>
    <!-- Search bar -->
    <div class="flex flex-col sm:flex-row justify-between gap-3 mb-5">
      <div class="flex flex-1 border border-gray-300 rounded-md overflow-hidden">
        <input type="text" placeholder="Buscar pedido..." class="flex-1 px-4 py-2 text-sm focus:outline-none bg-white" />
        <button class="bg-primary text-white px-4 py-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="hidden md:inline">Buscar</span>
        </button>
      </div>
    </div>

    <!-- Order items -->
    <div class="space-y-5">
      <div v-for="(order, index) in orders" :key="index" class="border border-gray-200 rounded overflow-hidden bg-gray-50 rounded-lg">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 border-b border-gray-200">
          <div class="font-semibold text-sm">{{ order.status }}</div>
          <div class="text-xs text-gray-500 mt-2 sm:mt-0">
            <div>Pedido: {{ order.date }}</div>
            <div>N°: {{ order.orderNumber }} <span class="text-blue-500 cursor-pointer ml-1">Copiar</span></div>
          </div>
          <div class="flex items-center text-sm cursor-pointer">
            Detalles del pedido
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div class="p-2 text-sm text-gray-700">{{ order.storeName }}</div>

        <div class="flex flex-col sm:flex-row p-4 gap-4">
          <!-- Imagen -->
          <div class="w-full sm:w-24 sm:h-24 bg-gray-100 flex-shrink-0">
            <img class="w-full max-h-24 object-contain" src="./data/extension.jpg" :alt="order.product.name" />
          </div>

          <!-- Detalles del producto -->
          <div class="flex-1">
            <div class="text-sm font-medium">{{ order.product.name }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ order.product.specs }}</div>
            <div class="text-sm mt-2">
              PEN {{ order.product.price }}
              <span class="text-gray-500 ml-1">× {{ order.product.quantity }}</span>
            </div>
          </div>

          <!-- Precio y acciones -->
          <div class="w-full sm:w-44 text-center">
            <div class="font-bold text-sm mb-2">Total: PEN {{ order.total }}</div>
            <button class="w-full bg-primary text-white py-2 px-4 rounded-3xl mb-2 text-sm">
              Añadir a la cesta
            </button>
            <button class="w-full border border-gray-700 py-2 px-4 rounded-3xl text-sm">
              Borrar
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { orders } from "./data/ordersData";

definePageMeta({
  layout: "panel",
  middleware: ["auth"],
});
</script>

<style scoped></style>
