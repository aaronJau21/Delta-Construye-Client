<template>
  <div
    v-if="showModal.show"
    class="h-screen md:hidden transition-all animate-slide-in"
  >
    <div class="flex justify-between px-5">
      <img src="/logo.jpg" alt="Logo de Imperio Ferretero" class="w-48" />
      <button
        @click="showModal.showModal()"
        class="text-red-500 font-bold text-xl"
      >
        X
      </button>
    </div>
    <nav class="flex flex-col px-5 gap-y-5">
      <NuxtLink
        v-for="item in itemRoutes"
        :key="item.to"
        :to="item.to"
        @click="showModal.showModal()"
      >
        {{ item.name }}
      </NuxtLink>
      <a :href="pdfUrl" target="_blank" rel="noopener noreferrer"> Catálogo </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useShowModalStore } from "~/store/ui/showModal.store";
import { itemRoutes, pdfUrl } from "./itemRoutes";

const showModal = useShowModalStore();
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out forwards;
}
</style>
