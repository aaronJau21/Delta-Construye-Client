<template>
  <header class="flex flex-col">
    <div class="border-b border-gray-400 text-gray-400 flex py-1 px-9">
      <CorreoWspComponent />
      <RedesSocialesComponent />
    </div>
    <ItemRouteResponseComponent />

    <InformationMovileComponent />
    <InformationComponent :isCartModalOpenTrue="isCartModalOpenTrue" />

    <RutasPageComponent />
    <CardInfoHistoryPayload
      :getUser="getUser"
      :showModalSearch="showModalSearch"
    />

    <CartModal :isOpen="isCartModalOpen" @close="isCartModalOpen = false" />
  </header>
</template>

<script setup lang="ts">
import CorreoWspComponent from "./CorreoWspComponent.vue";
import ItemRouteResponseComponent from "./movile/ItemRouteResponseComponent.vue";
import RedesSocialesComponent from "./RedesSocialesComponent.vue";
import InformationComponent from "./InformationComponent.vue";
import RutasPageComponent from "./RutasPageComponent.vue";
import InformationMovileComponent from "./movile/InformationMovileComponent.vue";
import CardInfoHistoryPayload from "../cart/CardInfoHistoryPayload.vue";
import type { IUser } from "~/interfaces";
import CartModal from "../cart/CartModal.vue";

const getUser = ref<IUser | null>(null);
const showModalSearch = ref(false);
const isCartModalOpen = ref(false);

const isCartModalOpenTrue = () => {
  console.log("hola");
  isCartModalOpen.value = true;
};
</script>

<style scoped></style>
