<template>
  <div class="container mx-auto w-9/12 m-16">
    <TitleComponent title="Nuestros Clientes" class="underline" />
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :space-between="30"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :loop="true"
      :breakpoints="{
        440: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }"
      class="h-full w-full"
    >
      <swiper-slide
        v-for="company in arrayCompanies"
        :key="company.id"
        class="flex justify-center items-center"
      >
        <div class="w-56">
          <div class="h-56 flex items-center">
            <img
              :src="company.logo"
              :alt="`Logo de ${company.name}`"
              class="w-44"
            />
          </div>
          <p class="text-center">{{ company.name }}</p>
        </div>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// import type { IGetCompanyResponse } from "~/interface/company/get-company-response.interface";
import TitleComponent from "../ui/title/TitleComponent.vue";

import "swiper/css";

import "swiper/css/pagination";
import type { IGetCompanyResponse } from "~/interfaces/company/get-company-response.interface";

// const { data: companies } = await useFetch("/api/company");

// const arrayCompanies = computed<IGetCompanyResponse[]>(() => companies.value);

const arrayCompanies: IGetCompanyResponse[] = [
  {
    id: 1,
    logo: "https://www.pinturasissa.com/images/logo-issa.png?crc=3879654626",
    name: "ISSA",
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvAQi2u-dhVRO9ZUtj6EDIu0zZ2A9k-2CPg&s",
    name: "ELEMATIC",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpZKQAnNKvci8OM9XrdEXjJfffSzfm3gwow&s",
    name: "MTS",
  },
  {
    id: 4,
    logo: "/logos-clientes/elcasa.png",
    name: "ElCASA",
  },
  {
    id: 5,
    logo: "/logos-clientes/ALPHA.jpg",
    name: "ALPHA",
  },
];
</script>

<style scoped></style>
