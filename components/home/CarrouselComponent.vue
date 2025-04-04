<template>
  <div class="container mx-auto w-9/12">
    <Swiper
      :modules="[Navigation, Autoplay]"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :loop="true"
      :navigation="true"
      class="h-full w-full"
    >
      <swiper-slide
        v-for="images in currentImages"
        :key="images"
        class="flex justify-center items-center"
      >
        <img :src="images" alt="Slide 1" class="w-full h-auto object-contain">
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const currentImages = [
  "/home/carrousel/image1.jpg",
  "/home/carrousel/image2.jpg",
  "/home/carrousel/image3.jpg",
  "/home/carrousel/image4.jpg",
  "/home/carrousel/image5.jpg",
];
</script>

<style scoped></style>
