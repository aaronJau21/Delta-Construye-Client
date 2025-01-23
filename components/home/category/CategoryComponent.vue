<template>
  <div class="md:container mx-5 md:mx-auto my-16">
    <TitleComponent title="Categorías" />
    <swiper
      :navigation="true"
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="[Pagination, Navigation]"
      class="mySwiper mt-9"
      :loop="true"
    >
      <swiper-slide>
        <div class="p-16 hidden md:block">
          <img src="/img/home/seed/Category1.png" alt="" class="w-96" />
        </div>
        <div class="md:hidden">
          <img src="/img/home/seed/Category1.png" alt="" class="w-28" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="p-16 hidden md:block">
          <img src="/img/home/seed/Category1.png" alt="" class="w-96" />
        </div>
        <div class="md:hidden">
          <img src="/img/home/seed/Category1.png" alt="" class="w-28" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="p-16 hidden md:block">
          <img src="/img/home/seed/Category1.png" alt="" class="w-96" />
        </div>
        <div class="md:hidden">
          <img src="/img/home/seed/Category1.png" alt="" class="w-28" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="p-16 hidden md:block">
          <img src="/img/home/seed/Category1.png" alt="" class="w-96" />
        </div>
        <div class="md:hidden">
          <img src="/img/home/seed/Category1.png" alt="" class="w-28" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="p-16 hidden md:block">
          <img src="/img/home/seed/Category1.png" alt="" class="w-96" />
        </div>
        <div class="md:hidden">
          <img src="/img/home/seed/Category1.png" alt="" class="w-28" />
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
import "swiper/css/thumbs";
import "swiper/css/navigation";
import TitleComponent from "~/components/shared/title/TitleComponent.vue";
</script>

<style scoped></style>
