<template>
  <div v-if="showModal.show" class="bg-white h-screen w-screen z-10 md:hidden">
    <div class="flex justify-end px-5">
      <button
        @click="showModal.showModal()"
        class="text-red-500 font-bold text-xl"
      >
        X
      </button>
    </div>
    <nav class="flex flex-col">
      <NuxtLink
        v-for="item in itemRoutes"
        :key="item.to"
        :to="item.to"
        @click="showModal.showModal()"
      >
        {{ item.name }}
      </NuxtLink>
      <a
        :href="pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Catálogo
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useShowModalStore } from "~/store/ui/showModal.store";
import { itemRoutes, pdfUrl } from "./itemRoutes";

const showModal = useShowModalStore();
</script>

<style scoped>


</style>
