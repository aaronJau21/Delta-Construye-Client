<template>
  <div class="flex flex-col gap-8 p-4 lg:p-6">
    <div
      class="flex flex-col md:flex-row gap-8 bg-white rounded-lg p-5 shadow-sm"
    >
      <div class="relative flex items-center justify-center md:w-1/2">
        <swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="10"
          :navigation="true"
          :loop="true"
          class="w-full"
        >
          <swiper-slide>
            <!-- src="https://peruconstruye.net/wp-content/uploads/2024/02/4-12.jpg" -->
            <img
              :src="getProduct?.product_images[0].image"
              :alt="getProduct?.name"
              class="w-full h-64 object-contain"
            />
          </swiper-slide>
        </swiper>
      </div>

      <div class="md:w-1/2">
        <div class="text-sm p-2">
          Marca:
          <NuxtLink :to="`/providers`" class="text-secundary">
            {{ getProduct?.brands[0].name }}
          </NuxtLink>
        </div>
        <h1 class="text-2xl font-bold mb-5">{{ getProduct?.name }}</h1>

        <div class="mb-5">
          <h3 class="font-medium mb-2">Descripción:</h3>
          {{ getProduct?.description == null ? "" : getProduct?.description }}
          <!-- <ul class="list-disc pl-5">
            <li
              v-for="(desc, index) in product.description"
              :key="index"
              class="mb-1"
            >
              {{ desc }}
            </li>
          </ul> -->
        </div>

        <div class="flex justify-between pb-4">
          <div class="flex flex-col gap-1">
            <span>Variante:</span>
            <select class="p-2 border border-gray-300 rounded-md min-w-[100px]">
              <option>Opción 1</option>
              <option>Opción 2</option>
              <option>Opción 3</option>
            </select>
          </div>

          <div class="flex flex-col gap-1">
            <span>Cantidad:</span>
            <input
              type="number"
              value="1"
              min="1"
              class="p-2 border border-gray-300 rounded-md min-w-[100px]"
            />
          </div>
        </div>

        <div class="flex">
          <div class="w-full flex justify-between gap-4 h-12">
            <button
              class="bg-blue-600 text-white flex items-center justify-center font-semibold gap-2 px-4 py-2 rounded-lg transition-all hover:bg-blue-700 hover:scale-105 w-full"
            >
              <Icon name="ep:circle-plus-filled" class="text-xl" />
              Agregar
            </button>
            <button
              class="bg-white text-gray-800 border border-gray-300 py-3 px-5 rounded-md font-bold flex items-center justify-center gap-2"
            >
              <span class="icon-download text-sm">Ficha Técnica</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <h2 class="text-xl font-bold p-4">Lo Nuevo en Delta</h2>

      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :loop="true"
        :pagination="false"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
        :navigation="true"
        class="py-2 px-1 pb-10"
      >
        <swiper-slide v-for="(newProduct, index) in newProducts" :key="index">
          <div
            class="rounded-lg bg-white p-4 relative flex flex-col items-center shadow-sm"
          >
            <div
              class="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold"
            >
              -{{ newProduct.discountPercentage }}%
            </div>
            <img
              :src="newProduct.image"
              :alt="newProduct.name"
              class="w-4/5 mx-auto p-2 h-32 object-contain"
            />
            <h3
              class="text-xs text-center my-2 h-10 overflow-hidden line-clamp-2"
            >
              {{ newProduct.name }}
            </h3>
            <div class="flex items-center gap-2 p-2">
              <span class="text-lg font-bold text-gray-800"
                >S/. {{ newProduct.currentPrice }}</span
              >
              <span class="text-sm text-gray-500 line-through"
                >S/. {{ newProduct.originalPrice }}</span
              >
            </div>
            <button
              v-if="newProduct.available"
              class="w-full py-2 bg-primary text-white rounded-md font-bold"
            >
              COMPRAR
            </button>
            <button
              v-else
              class="w-full py-2 bg-primary text-white rounded-md font-bold"
            >
              CONSULTAR
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import type { IGetProductBySku } from "~/interfaces";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const route = useRoute();
const config = useRuntimeConfig();

const { data: product } = useFetch<IGetProductBySku>(
  () => `${config.public.api_url}/product/${route.params.sku}`
);

const getProduct = computed(() => product.value);

const newProducts = ref([
  {
    name: "Ladrillo King Kong 18 Huecos Grande",
    brand: "King Kong",
    image: "/img/home/products/ladrillo.png",
    discountPercentage: 25,
    currentPrice: 339,
    originalPrice: 452,
    available: true,
  },
  {
    name: "Cable LSOH-90+ 25 mm² 750V - x metro lineal (Rojo)",
    brand: "MSI",
    image: "/img/home/products/cable_rojo.jpg",
    discountPercentage: 20,
    currentPrice: 6269,
    originalPrice: 7837,
    available: false,
  },
  {
    name: "Cemento Sol 42kg",
    brand: "REDRAGON",
    image: "/img/home/products/cemento_sol_2.jpg",
    discountPercentage: 20,
    currentPrice: 89,
    originalPrice: 112,
    available: true,
  },
  {
    name: "Clavo C/CB 3 (Caja 25kg)",
    brand: "REDRAGON",
    image: "/img/home/products/clavos.jpg",
    discountPercentage: 25,
    currentPrice: 79,
    originalPrice: 106,
    available: true,
  },
  {
    name: "Sonca Extensión 3Tomas+T Amarillo X 10Mts",
    brand: "LOGITECH",
    image: "/img/home/products/extension.jpg",
    discountPercentage: 25,
    currentPrice: 749,
    originalPrice: 999,
    available: true,
  },
  {
    name: "Linterna Antorcha 1W",
    brand: "LOGITECH",
    image: "/img/home/products/linterna.jpg",
    discountPercentage: 25,
    currentPrice: 749,
    originalPrice: 999,
    available: true,
  },
]);
</script>

<style scoped>
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
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

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transform: translateY(-50%) scale(1.1);
}

:deep(.swiper-button-prev) {
  left: 10px;
}

:deep(.swiper-button-next) {
  right: 10px;
}
</style>
