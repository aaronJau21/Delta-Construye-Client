<template>
  <swiper
    :navigation="true"
    :modules="[Navigation, Autoplay]"
    class="mySwiper "
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
  >
    <swiper-slide>
      <img src="/img/home/foto1.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="/img/home/foto2.png" alt="" class="w-full"/>
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
