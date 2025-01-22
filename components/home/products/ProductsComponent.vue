<template>
  <div class="md:container mx-5 md:mx-auto my-16">
    <div class="flex justify-between pr-9">
      <TitleComponent title="Productos" />
      <NuxtLink
        to="/products"
        class="bg-white mb-5 px-3 py-1 rounded-md font-bold hover:bg-primary hover:text-white transition-all"
      >
        Ver todos
      </NuxtLink>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 mt-5 gap-y-5 md:gap-y-0 gap-x-5">
      <div class="bg-white">
        <img src="/public/img/home/seed/ladrillo.png" alt="" />
        <div class="border-t border-black py-5">
          <h4 class="text-center">Ladrillo Caravista</h4>

          <div class="flex justify-center mt-5">
            <button class="text-blue-600 flex items-center">
              <Icon name="ep:circle-plus-filled" /> Agregar
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <img src="/public/img/home/seed/ladrillo.png" alt="" />
        <div class="border-t border-black py-5">
          <h4 class="text-center">Ladrillo Caravista</h4>

          <div class="flex justify-center mt-5">
            <button class="text-blue-600 flex items-center">
              <Icon name="ep:circle-plus-filled" /> Agregar
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <img src="/public/img/home/seed/ladrillo.png" alt="" />
        <div class="border-t border-black py-5">
          <h4 class="text-center">Ladrillo Caravista</h4>

          <div class="flex justify-center mt-5">
            <button class="text-blue-600 flex items-center">
              <Icon name="ep:circle-plus-filled" /> Agregar
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <img src="/public/img/home/seed/ladrillo.png" alt="" />
        <div class="border-t border-black py-5">
          <h4 class="text-center">Ladrillo Caravista</h4>

          <div class="flex justify-center mt-5">
            <button class="text-blue-600 flex items-center">
              <Icon name="ep:circle-plus-filled" /> Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from "~/components/shared/title/TitleComponent.vue";
</script>

<style scoped></style>
