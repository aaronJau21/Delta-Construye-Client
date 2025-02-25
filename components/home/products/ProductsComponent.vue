<template>
  <div class="md:container mx-5 md:mx-auto my-16">
    <div class="flex justify-between pr-9">
      <TitleComponent title="Productos" />
      <NuxtLink
        to="/products"
        class="bg-white mb-5 px-3 py-1 rounded-md font-bold hover:bg-primary hover:text-white transition-all"
      >
        Ver todos
      </NuxtLink>
    </div>

    <!-- Swiper Slider -->
    <Swiper
      :slides-per-view="3"
      :space-between="15"
      :loop="true"
      :grabCursor="true"
      class="mt-5"
    >
      <SwiperSlide v-for="(producto, index) in productos" :key="index">
        <div class="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col">
          <img
            :src="producto.img"
            alt="Imagen del producto"
            class="w-full h-48 object-contain mb-4"
          />
          <div class="border-t border-gray-300 my-4"></div>
          <h4 class="text-center text-lg font-semibold">{{ producto.nombre }}</h4>
          <div class="flex justify-center mt-5">
            <button
              class="bg-blue-600 text-white flex items-center font-semibold gap-2 px-4 py-2 rounded-lg transition-all hover:bg-blue-700 hover:scale-105"
            >
              <Icon name="ep:circle-plus-filled" class="text-xl" />
              Agregar
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from "~/components/shared/title/TitleComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"; // Importar estilos básicos

const productos = [
  { nombre: "Cemento", img: "/img/home/products/cemento_sol_2.jpg" },
  { nombre: "Ladrillo", img: "/img/home/products/ladrillo.png" },
  { nombre: "Clavos", img: "/img/home/products/clavos.jpg" },
  { nombre: "Extension", img: "/img/home/products/extension.jpg" },
  { nombre: "Cable Linterna", img: "/img/home/products/linterna.jpg" },
];
</script>

<style scoped></style>
