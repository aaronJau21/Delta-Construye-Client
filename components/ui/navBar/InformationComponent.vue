<template>
  <div class="md:flex items-center gap-2 border-b border-[#272727] hidden">
    <div class="text-center border-r p-3 border-[#272727]">
      <button @click="showCategory.showRoutes()">
        <Icon
          name="charm:menu-hamburger"
          class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
        />
        <p class="text-md border-b">Categoria</p>
      </button>
    </div>
    <div class="flex items-center gap-x-5 justify-between w-full">
      <div>
        <NuxtLink href="/">
          <img src="/logo.png" class="w-72" />
        </NuxtLink>
      </div>
      <div
        class="flex items-center bg-global-bg rounded-xl flex-1 pr-5 h-10 border-2 border-primary"
      >
        <input
          type="text"
          placeholder="Buscar..."
          class="border-0 outline-none rounded w-full pl-5"
          v-model="nameProduct"
          @keyup.enter="goRoute()"
        />
        <div class="flex justify-center items-center">
          <Icon
            name="heroicons-solid:search"
            @click="goRoute()"
            class="cursor-pointer text-xl"
          />
        </div>
      </div>
      <div class="flex gap-x-3 w-28">
        <NuxtLink href="/auth/login" class="">
          <Icon
            name="ix:user-profile"
            class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
          />
        </NuxtLink>
        <Icon
          name="ix:shopping-cart-filled"
          class="text-3xl text-primary hover:text-secondary cursor-pointer transition-colors"
          @click="$props.isCartModalOpenTrue()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShowRoutesCategory } from "~/store/ui/showRoutesCategory";
interface Props {
  isCartModalOpenTrue: () => void;
}
defineProps<Props>();

const showCategory = useShowRoutesCategory();
const nameProduct = ref();
const router = useRouter();

const goRoute = () => {
  router.push(`/buscador-product/${nameProduct.value}`);
};
</script>

<style scoped></style>
