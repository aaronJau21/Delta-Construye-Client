<template>
  <header class="p-2 bg-white flex flex-col gap-5 relative">
    <!-- Dropdown Search Results -->
    <div class="absolute bg-white w-[85%] z-10">
      <ItemRouteResponseComponent />
    </div>

    <!-- Header Mobile -->
    <div class="flex justify-around items-center gap-2">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo de Imperio Ferretero" class="w-48" />
      </NuxtLink>

      <div class="lg:flex lg:items-center lg:gap-x-5 lg:text-lg hidden">
        <div
          class="flex items-center gap-x-1 cursor-pointer hover:text-primary"
        >
          <Icon name="material-symbols:call" />
          <p>+51 992843375</p>
        </div>
        <div
          class="flex items-center gap-x-1 cursor-pointer hover:text-primary"
        >
          <Icon name="uim:house-user" />
          <p>AV. TOMAS MARSANO NRO. 4789</p>
        </div>
      </div>

      <div class="flex justify-between items-center gap-x-5">
        <Icon
          name="material-symbols:shopping-cart-outline"
          size="25"
          class="cursor-pointer transition-transform active:scale-90 active:opacity-70"
          @click="isCartModalOpen = true"
        />
        <Icon
          name="heroicons-outline:bars-3"
          size="25"
          class="cursor-pointer block md:hidden transition-transform active:scale-90 active:opacity-70"
          @click="showModal.showModal()"
        />
        <div v-if="user">
          <button
            @click="showModalSearch = !showModalSearch"
            class="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full"
          >
            <!-- <p class="text-xl">{{ getUser?.name?.[0] }}</p> -->
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
              class="cursor-pointer transition-transform active:scale-90 active:opacity-70"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Navigation Routes -->
    <ItemsRoutesComponent />

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
