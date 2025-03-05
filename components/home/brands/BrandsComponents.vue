<template>
  <div class="container mx-auto my-16">
    <div class="flex justify-between items-center pr-9">
      <TitleComponent title="Marcas" />
      <NuxtLink
        to="/providers"
        class="bg-white mb-5 px-4 py-2 rounded-lg font-bold shadow-md
          hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-300"
      >
        Ver más
      </NuxtLink>
    </div>

    <Swiper
      :spaceBetween="15"
      :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      :speed="2500"
      :modules="[Autoplay]"
      :breakpoints="{
        320: { slidesPerView: 1 },  // Móviles pequeños
        640: { slidesPerView: 2 },  // Tablets pequeñas
        1024: { slidesPerView: 3 }, // Laptops y pantallas medianas
        1280: { slidesPerView: 4 }  // Pantallas grandes
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(brand, index) in brands" :key="index">
        <div
          class="group w-full h-[130px] flex justify-center items-center rounded-xl p-4
          bg-gradient-to-r from-gray-50 to-gray-100 shadow-md shadow-gray-300/40
          hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <img
            :src="brand.image"
            alt="brand"
            class="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
  { image: "/img/home/seed/cemento_apu.png" }
];
</script>

<style scoped>
/* Ajuste global si necesitas más separación en dispositivos grandes */
@media (min-width: 1024px) {
  .mySwiper {
    padding: 0 20px;
  }
}
</style>
