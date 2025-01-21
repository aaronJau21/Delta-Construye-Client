<template>
  <div class="container mx-auto my-16">
    <div class="flex justify-between pr-9">
      <TitleComponent title="Marcas" />
      <NuxtLink
        to="/providers"
        class="bg-white mb-5 px-3 py-1 rounded-md font-bold hover:bg-primary hover:text-white transition-all"
      >
        Ver más
      </NuxtLink>
    </div>
    <Swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="[Pagination]"
      class="mySwiper"
      :loop="true"
    >
      <swiper-slide>
        <div class="flex justify-center">
          <img src="/img/home/seed/sol.png" alt="" class="w-28 rounded" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="/img/home/seed/apu.jpg" alt="" class="w-28 rounded" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="/img/home/seed/ssika.png" alt="" class="w-28 rounded" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="/img/home/seed/sol.png" alt="" class="w-28 rounded" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="/img/home/seed/apu.jpg" alt="" class="w-28 rounded" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="/img/home/seed/ssika.png" alt="" class="w-28 rounded" />
        </div>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import TitleComponent from "~/components/shared/title/TitleComponent.vue";
</script>
