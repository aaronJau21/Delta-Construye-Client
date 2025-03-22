<template>
  <div
    v-if="showModalSearch"
    class="bg-white absolute top-20 z-50 right-0 w-56 p-5 rounded shadow-2xl"
  >
  <div class="flex items-center gap-x-3">
  <button class="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full">
    <!-- <p class="text-xl">{{ getUser?.name?.[0] }}</p> -->
    <img :src=imageSrc alt="Usuario" class="rounded-full">

  </button>
  <p>{{ getUser?.name }}</p>
</div>
    <div class="border-t border-gray-300 mt-3 pt-3 w-full flex flex-col">
      <NuxtLink
        to="/panel"
        class="hover:bg-gray-200 w-full px-3 py-1 rounded-xl"
        >Ver Historial</NuxtLink
      >

      <button
        @click="loginStore.logout()"
        class="flex gap-x-3 items-center mt-3 hover:bg-gray-200 w-full px-3 py-1 rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>

        Salir
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from "~/interfaces";
import { useLoginStore } from "~/store/auth/login.store";

interface Props {
  getUser: IUser | null;
  showModalSearch: boolean;
}

defineProps<Props>();

const loginStore = useLoginStore();
const imageSrc = ref(
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
);

</script>

<style scoped></style>
