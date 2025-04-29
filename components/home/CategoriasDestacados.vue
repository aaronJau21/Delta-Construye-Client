<template>
  <div class="mt-9 container mx-auto w-9/12">
    <TitleComponent title="CATEGORÍAS DESTACADAS" class="text-center" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 my-5">
      <div
        v-for="categorias in categiasDestacadas"
        :key="categorias.title"
        class="relative flex justify-center"
      >
        <img :src="categorias.img" :alt="categorias.title"  class="rounded-md  shadow-2xl shadow-gray-500"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from "../ui/title/TitleComponent.vue";
interface ICategoriasDestacados {
  img: string;
  title: string;
}

const categiasDestacadas: ICategoriasDestacados[] = [
  {
    img: "/home/categorias_destacadas/1.png",
    title: "EPPS",
  },
  {
    img: "/home/categorias_destacadas/2.png",
    title: "PINTURA",
  },
  {
    img: "/home/categorias_destacadas/3.png",
    title: "DRYWALL",
  },
  {
    img: "/home/categorias_destacadas/4.png",
    title: "CEMENTO",
  },
  {
    img: "/home/categorias_destacadas/5.png",
    title: "LADRILLO",
  },
  {
    img: "/home/categorias_destacadas/6.png",
    title: "ELECTRICIDAD",
  },
];
</script>

<style scoped></style>
