<template>
  <div class="md:container mx-5 md:mx-auto my-16">
    <TitleComponent title="Categorías" />

    <swiper
      :navigation="true"
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{ clickable: true }"
      :modules="[Navigation]"
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }"
      class="mySwiper mt-9"
    >
      <swiper-slide v-for="(item, index) in categories" :key="index">
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center"
        >
          <img :src="item.img" alt="" class="w-full h-48 object-contain mb-4" />
          <div class="border-t border-gray-300 my-4 w-full"></div>
          <h4 class="text-center text-lg font-semibold">{{ item.name }}</h4>
          <div class="flex justify-center mt-5">
            <button
              class="bg-[#E61925] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all hover:bg-[#c4161f] active:scale-95 shadow-md"
            >
              <Icon name="fa:list-ul" class="text-lg" />

              Ver Productos
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TitleComponent from "~/components/shared/title/TitleComponent.vue";

const categories = [
  { name: "Acero", img: "/img/home/categories/acero.png" },
  { name: "Drywall", img: "/img/home/categories/drywall.png" },
  { name: "Pinturas", img: "/img/home/categories/pinturas.png" },
  { name: "Embolsados", img: "/img/home/categories/embolsados.png" },
  { name: "Tuberías", img: "/img/home/categories/tuberias.png" },
];
</script>

<style scoped>
::v-deep .swiper-button-prev,
::v-deep .swiper-button-next {
  background-color: white;
  color: rgb(43, 41, 41);
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  --swiper-navigation-size: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep .swiper-button-prev:hover,
::v-deep .swiper-button-next:hover {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transform: translateY(-50%) scale(1.1);
}

::v-deep .swiper-button-prev {
  left: 10px;
}

::v-deep .swiper-button-next {
  right: 10px;
}
</style>
