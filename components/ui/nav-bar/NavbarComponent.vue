<template>
  <header class="p-2 bg-white flex flex-col gap-5 relative">
    <div class="border-b border-gray-400 text-gray-400 flex">
      <div class="px-5 py-2 flex gap-x-5">
        <div class="hidden lg:block">
          <a
            href="mailto:ALPHA.SOLUCIONES.NEGOCIOS@GMAIL.COM"
            class="flex items-center gap-x-2 hover:text-primary"
          >
            <Icon name="ic:baseline-email" />
            <p class="text-xs">ALPHA.SOLUCIONES.NEGOCIOS@GMAIL.COM</p>
          </a>
        </div>
        <div class="hidden lg:block">
          <a
            href="https://wa.me/992843375"
            class="flex items-center gap-x-2 hover:text-primary"
          >
            <Icon name="ic:baseline-whatsapp" />
            <p class="text-xs">+51 992 843 375</p>
          </a>
        </div>
        <div class="flex items-center gap-x-2">
          <a
            href="https://www.linkedin.com/posts/delta-construye_compartimos-nuestro-primer-storyboard-s%C3%A9-activity-7305731522722955264-3SgI?utm_source=share&utm_medium=member_android&rcm=ACoAACdetdkBhqjpsDD91o1WkEKH2eEaWlc7WAE"
            class="hover:text-primary"
          >
            <Icon name="fa-brands:linkedin" />
          </a>
        </div>
      </div>
    </div>
    <!-- Dropdown Search Results -->
    <div class="absolute bg-white w-[85%] z-10">
      <ItemRouteResponseComponent />
    </div>

    <!-- Header Mobile -->
    <div class="flex justify-between px-9 items-center gap-2">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo de Imperio Ferretero" class="w-48" />
      </NuxtLink>
      <ItemsRoutesComponent />
      <div class="flex justify-between items-center gap-x-5 text-primary">
        <Icon
          name="material-symbols:shopping-cart-outline"
          size="25"
          class="cursor-pointer transition-transform active:scale-90 active:opacity-70 hover:text-black"
          @click="isCartModalOpen = true"
        />
        <Icon
          name="heroicons-outline:bars-3"
          size="25"
          class="cursor-pointer block md:hidden transition-transform active:scale-90 active:opacity-70 text-black"
          @click="showModal.showModal()"
        />
        <div v-if="user">
          <button
            @click="showModalSearch = !showModalSearch"
            class="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full"
          >
            <img :src="imageSrc" alt="Usuario" class="rounded-full" />
          </button>
          <CardInfoHistoryPayload
            :getUser="getUser"
            :showModalSearch="showModalSearch"
          />
        </div>
        <div v-else>
          <NuxtLink to="/auth/login">
            <Icon
              name="material-symbols:account-circle-full"
              size="25"
              class="cursor-pointer transition-transform active:scale-90 active:opacity-70 hover:text-black"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Navigation Routes -->

    <!-- Cart Modal -->
    <CartModal :isOpen="isCartModalOpen" @close="isCartModalOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { NuxtLink } from "#components";
import ItemRouteResponseComponent from "./ItemRouteResponseComponent.vue";
import ItemsRoutesComponent from "./ItemsRoutesComponent.vue";
import CartModal from "./CartModal.vue";
import { useShowModalStore } from "~/store/ui/showModal.store";
import type { IUser } from "~/interfaces";
import CardInfoHistoryPayload from "./CardInfoHistoryPayload.vue";

const showModal = useShowModalStore();
const isCartModalOpen = ref(false);
const user = useCookie<IUser>("user");
const config = useRuntimeConfig();
const getUser = ref<IUser | null>(null);
const searchQuery = ref("");
const showDropdown = ref(false);
const showModalSearch = ref(false);
const imageSrc = ref(
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
);

const handleSearch = () => {
  // Lógica de búsqueda aquí
  showDropdown.value = true; // Mostrar dropdown si hay resultados
};

onMounted(async () => {
  if (user.value) {
    const { data } = await useFetch<IUser>(
      `${config.public.api_url}/client/getClient/${user.value.name}`
    );
    getUser.value = data.value;
  }
});
</script>

<style scoped>
input::placeholder {
  color: #9ca3af;
}
</style>
