<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-2xl w-[30rem] max-w-full relative z-[10000] flex flex-col gap-4"
      >
        <h2 class="text-xl font-semibold border-b pb-2">Carrito de Compras</h2>

        <!-- Lista de productos -->
        <div class="space-y-4 max-h-72 overflow-y-auto px-2">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="flex items-center gap-4 p-3 rounded-lg shadow-sm border"
          >
            <!-- Imagen -->
            <img
              :src="product.image"
              :alt="product.name"
              class="w-16 h-16 object-cover"
            />

            <!-- Nombre y Cantidad -->
            <div class="flex-1">
              <h3 class="text-sm font-medium leading-tight break-words">
                {{ product.name }}
              </h3>
              <p class="text-xs text-gray-600 mt-1 flex items-center gap-2">
                Cantidad:
                <input
                  v-model.number="product.quantity"
                  type="number"
                  min="0"
                  class="border rounded-lg p-1 w-16 text-center shadow-sm"
                />
              </p>
            </div>
            <!-- Botón de eliminar -->
            <button
              class="text-red-500 hover:text-red-700 p-2 rounded-full"
              @click="removeProduct(index)"
            >
              <Icon name="mdi:trash-can-outline" size="20" />
            </button>
            <!-- Precio total por producto -->
            <div class="text-sm font-semibold text-right w-20">
              S/. {{ (product.price * product.quantity).toFixed(2) }}
            </div>
          </div>
        </div>

        <!-- Total y botón de pago -->
        <div class="border-t">
          <div class="flex justify-between items-center py-4 px-2">
            <p class="font-semibold text-lg">Total:</p>
            <p class="mr-4 text-md font-semibold text-green-600">
              S/. {{ totalPrice.toFixed(2) }}
            </p>
          </div>
          <button
            class="w-full bg-green-500 text-white px-4 py-2 rounded-lg transition-all hover:bg-green-600 active:scale-95 shadow-md"
          >
            Pagar
          </button>
        </div>

        <!-- Botón de cerrar -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <Icon name="mdi:close" size="22" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from "vue";

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

// Lista de productos en el carrito
const products = ref([
  {
    name: "Cemento Sol",
    image: "/img/home/products/cemento_sol_2.jpg",
    quantity: 1,
    price: 10.0,
  },
  {
    name: "Ladrillos Lark Super Reforzados 30x15 cm",
    image: "/img/home/products/ladrillo.png",
    quantity: 100,
    price: 3.0,
  },
  {
    name: "Pintura Vinílica para Interiores y Exteriores",
    image: "/img/home/products/clavos.jpg",
    quantity: 2,
    price: 25.0,
  },
  {
    name: "Clavos de Acero Galvanizado de Alta Resistencia",
    image: "/img/home/products/linterna.jpg",
    quantity: 1,
    price: 15.0,
  },
]);

// Cálculo del total (excluye productos con cantidad 0)
const totalPrice = computed(() =>
  products.value.reduce(
    (sum, product) =>
      sum + (product.quantity > 0 ? product.price * product.quantity : 0),
    0
  )
);

// Función para eliminar un producto
const removeProduct = (index: number) => {
  products.value.splice(index, 1);
};
</script>
