<template>
  <div class="container p-2">
    <div class="flex justify-between items-center">
      <TitleComponent title="Productos" />
      <NuxtLink
        to="/providers"
        class="bg-white mb-5 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300"
      >
        Ver más
      </NuxtLink>
    </div>

    <!-- Swiper Slider -->
    <Swiper
      :space-between="15"
      :loop="true"
      :grabCursor="true"
      :breakpoints="{
        320: { slidesPerView: 1 },  // Teléfonos
        640: { slidesPerView: 2 },  // Tablets pequeñas
        1024: { slidesPerView: 3 }, // Pantallas medianas
        1280: { slidesPerView: 4 }  // Pantallas grandes
      }"
    >
      <SwiperSlide v-for="(producto, index) in productos" :key="index">
        <div class="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col m-1">
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
import "swiper/css";

const productos = [
  { nombre: "Cemento", img: "/img/home/products/cemento_sol_2.jpg" },
  { nombre: "Ladrillo", img: "/img/home/products/ladrillo.png" },
  { nombre: "Clavos", img: "/img/home/products/clavos.jpg" },
  { nombre: "Extensión", img: "/img/home/products/extension.jpg" },
  { nombre: "Cable Linterna", img: "/img/home/products/linterna.jpg" }
];
</script>

<style scoped></style>
