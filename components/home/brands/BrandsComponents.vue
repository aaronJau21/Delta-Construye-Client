<template>
  <div class="container p-2">
    <div class="flex justify-between items-center">
      <TitleComponent title="Marcas" />
      <NuxtLink
        to="/providers"
        class="bg-white mb-5 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300"
      >
        Ver más
      </NuxtLink>
    </div>

    <Swiper
      :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      :speed="2500"
      :modules="[Autoplay]"
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        1280: { slidesPerView: 4, spaceBetween: 10 },
      }"
      class="swiper-container"
    >
      <SwiperSlide
        v-for="(brand, index) in brands"
        :key="index"
        class="flex justify-center items-center"
      >
        <div
          class="w-full h-[100px] md:h-[120px] lg:h-[130px] flex justify-center items-center rounded-lg bg-gray-100 shadow-md p-2 m-1"
        >
          <img
            :src="brand.image"
            alt="brand"
            class="max-w-[80%] max-h-[80%] object-contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TitleComponent from "~/components/shared/title/TitleComponent.vue";

const brands = [
  { image: "/img/home/seed/cemento_sol.png" },
  { image: "/img/home/seed/celima.png" },
  { image: "/img/home/seed/sika.png" },
  { image: "/img/home/seed/lark.png" },
  { image: "/img/home/seed/trebol.png" },
  { image: "/img/home/seed/celsa.png" },
  { image: "/img/home/seed/tuboplast.png" },
  { image: "/img/home/seed/cemento_apu.png" },
];
</script>

<style scoped>
/* Ajuste global si necesitas más separación en dispositivos grandes */
</style>
