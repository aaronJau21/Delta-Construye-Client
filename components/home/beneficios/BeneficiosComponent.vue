<template>
  <div class="container flex flex-col gap-6 p-2">
    <div class="flex justify-between items-center">
      <TitleComponent title="Beneficios para constructoras" />
    </div>

    <!-- 🌟 Slider solo si no caben 4 tarjetas -->
    <div v-if="useSlider" >
      <Swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="15"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :modules="[Autoplay]"
      >
        <swiper-slide
          v-for="(benefit, index) in benefits"
          :key="index"
          class="flex justify-center"
        >
          <div
            class="flex w-full min-h-[160px] bg-white rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl m-1"
          >
            <div
              class="w-24 flex justify-center items-center rounded-l-xl"
              :class="['bg-gradient-to-r', benefit.gradient]"
            >
              <Icon :name="benefit.icon" size="60" class="text-white drop-shadow-lg" />
            </div>
            <div class="flex-1 flex flex-col justify-center gap-y-2 p-4">
              <h4 class="font-bold text-lg text-gray-800">{{ benefit.title }}</h4>
              <p class="text-sm text-gray-600">{{ benefit.description }}</p>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>

    <!-- Tarjetas normales -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="(benefit, index) in benefits"
        :key="index"
        class="flex min-h-[160px] rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl bg-white"
      >
        <div
          class="w-24 flex justify-center items-center rounded-l-xl"
          :class="['bg-gradient-to-r', benefit.gradient]"
        >
          <Icon :name="benefit.icon" size="60" class="text-white drop-shadow-lg" />
        </div>
        <div class="flex-1 flex flex-col justify-center gap-y-2 p-4">
          <h4 class="font-bold text-lg text-gray-800">{{ benefit.title }}</h4>
          <p class="text-sm text-gray-600">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TitleComponent from "~/components/shared/title/TitleComponent.vue";

const useSlider = ref(false);
const slidesPerView = ref(3);

const checkScreenSize = () => {
  const width = window.innerWidth;

  if (width >= 1280) {
    useSlider.value = false;
  } else if (width >= 1024) {
    useSlider.value = true;
    slidesPerView.value = 3;
  } else if (width >= 768) {
    useSlider.value = true;
    slidesPerView.value = 2;
  } else {
    useSlider.value = true;
    slidesPerView.value = 1;
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});

// Lista de beneficios con gradientes llamativos
const benefits = [
  {
    icon: "material-symbols:inventory",
    title: "Todos los materiales en un solo lugar",
    description: "Productos homologados multi marca y multi categoría.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: "material-symbols:support-agent",
    title: "Asesoría especializada",
    description: "Expertos en construcción listos para ayudarte.",
    gradient: "from-green-500 to-green-700",
  },
  {
    icon: "mdi:tag-multiple",
    title: "Precios competitivos",
    description: "Ofertas exclusivas y precios accesibles para constructoras.",
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    icon: "mdi:truck-fast",
    title: "Entrega rápida",
    description: "Garantizamos entregas eficientes para tu proyecto.",
    gradient: "from-red-500 to-red-700",
  },
];
</script>
