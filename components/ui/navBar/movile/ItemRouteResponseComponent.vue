<template>
  <div class="absolute bg-white w-[85%] z-10">
    <!-- Overlay oscuro -->
    <div v-if="showModal.show" class="fixed inset-0 bg-black/50 z-40" />

    <!-- Modal -->
    <div
      v-if="showModal.show"
      class="h-screen md:hidden transition-all animate-slide-in fixed top-0 left-0 bg-white z-50 w-[75%]"
    >
      <div class="flex justify-between px-5 py-3">
        <img src="/logo.png" alt="Logo de Imperio Ferretero" class="w-48" >
        <button
          class="text-red-500 font-bold text-xl"
          @click="showModal.showModal()"
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
        <a :href="pdfUrl" target="_blank" rel="noopener noreferrer">
          Catálogo
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { itemRoutes, pdfUrl } from "~/data/itemRoutes";
import { useShowModalStore } from "~/store/ui/showModal.store";

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
