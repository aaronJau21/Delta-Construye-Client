<template>
  <div class="flex items-center gap-2 border-b border-[#272727] md:hidden">
    <div class="text-center border-r p-3 border-[#272727]">
      <button>
        <Icon
          name="charm:menu-hamburger"
          class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
        />
        <p class="text-md border-b">Categoria</p>
      </button>
    </div>
    <div
      class="flex items-center gap-x-5 justify-between w-full px-3"
      v-if="changeComponent"
    >
      <div>
        <NuxtLink href="/">
          <img src="/logo.png" class="w-48" />
        </NuxtLink>
      </div>
      <div class="flex gap-x-3 w-28">
        <Icon
          name="heroicons-solid:search"
          class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
          @click="changeStatus()"
        />
        <Icon
          name="ix:user-profile"
          class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
        />
        <Icon
          name="ix:shopping-cart-filled"
          class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
        />
      </div>
    </div>
    <template v-else>
      <BuscadorComponent :changeStatus="changeStatus"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import BuscadorComponent from "./BuscadorComponent.vue";

const changeComponent = ref<boolean>(true);

const changeStatus = () => {
  changeComponent.value = !changeComponent.value;
};
</script>

<style scoped></style>
