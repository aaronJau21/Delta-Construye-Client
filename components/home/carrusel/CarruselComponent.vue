<template>
  <swiper
    :modules="[Navigation, Autoplay]"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :loop="true"
    :navigation="true"
    class="w-full h-auto"
  >
    <swiper-slide class="flex justify-center items-center">
      <img :src="currentImages[0]" alt="Slide 1" class="w-full h-auto object-contain" />
    </swiper-slide>
    <swiper-slide class="flex justify-center items-center">
      <img :src="currentImages[1]" alt="Slide 2" class="w-full h-auto object-contain" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { ref, onMounted, onUnmounted, watchEffect } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Definir imágenes
const imagesDesktop = ["/img/home/carrusel/foto1.png", "/img/home/carrusel/foto2.png"];
const imagesMobile = ["/img/home/carrusel/carrusel-koplast.png", "/img/home/carrusel/carrusel-lark.png"];

// Evitar error de SSR con `window.innerWidth`
const screenWidth = ref<number | null>(null);
const currentImages = ref(imagesDesktop);

// Función para actualizar el tamaño de la pantalla
const updateScreenWidth = () => {
  if (process.client) {
    screenWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  updateScreenWidth();
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

// Cambiar imágenes en función del tamaño de la pantalla
watchEffect(() => {
  if (screenWidth.value !== null) {
    currentImages.value = screenWidth.value < 768 ? imagesMobile : imagesDesktop;
  }
});
</script>

<style scoped>
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  background-color: white;
  color: rgb(43, 41, 41);
  width: 50px;
  height: 70px;
  transform: translateY(-50%);
  --swiper-navigation-size: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

:deep(.swiper-button-prev) {
  border-radius: 0 50% 50% 0;
  left: -10px;
}

:deep(.swiper-button-next) {
  border-radius: 50% 0 0 50%;
  right: -10px;
}
</style>
