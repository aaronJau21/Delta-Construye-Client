<template>
  <swiper
    :navigation="true"
    :modules="[Navigation, Autoplay]"
    class="mySwiper"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
  >
    <swiper-slide>
      <img src="/img/home/foto1.png" alt="" class="w-full" />
    </swiper-slide>
    <swiper-slide>
      <img src="/img/home/foto2.png" alt="" class="w-full" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
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
