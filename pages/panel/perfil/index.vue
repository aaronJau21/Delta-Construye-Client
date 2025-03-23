<template>
  <div class="flex h-full bg-gray-100" style="min-height: calc(100vh - 80px)">
    <!-- Barra lateral -->
    <aside
      class="w-[300px] bg-white shadow-md p-6 flex flex-col items-center border"
    >
      <div class="flex flex-col items-center w-full">
        <!-- Imagen de perfil -->
        <label for="imageInput" class="relative cursor-pointer group">
          <div
            class="flex justify-center rounded-full overflow-hidden border-2 border-gray-300"
          >
            <label for="imageInput">
              <div
                class="rounded-full flex items-center justify-center bg-white"
              >
                <img
                  v-if="imageSrc"
                  class="w-32 h-32 rounded-full cursor-pointer object-cover"
                  :src="imageSrc"
                  alt="Profile User"
                />
                <img
                  v-else
                  class="w-32 h-32 rounded-full cursor-pointer object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  alt="Profile User"
                />
              </div>
            </label>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleImageChange"
            />
          </div>
        </label>
      </div>

      <!-- Opciones de cuenta -->
      <nav class="mt-6 w-full">
        <ul class="space-y-2">
          <li
            class="p-2 bg-gray-200 rounded-lg font-semibold flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <Icon name="mdi:account" class="text-gray-600 text-xl" />
              Cuenta
            </div>
            <Icon name="mdi:chevron-right" class="text-gray-400 text-xl" />
          </li>
          <li
            class="p-2 hover:bg-gray-100 rounded-lg cursor-pointer flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <Icon name="mdi:lock" class="text-gray-600 text-xl" />
              Cambiar la contraseña
            </div>
            <Icon name="mdi:chevron-right" class="text-gray-400 text-xl" />
          </li>
          <li
            class="p-2 hover:bg-gray-100 rounded-lg cursor-pointer flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <Icon name="mdi:shield-lock" class="text-gray-600 text-xl" />
              Privacidad
            </div>
            <Icon name="mdi:chevron-right" class="text-gray-400 text-xl" />
          </li>
          <li
            class="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-red-500 flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <Icon name="mdi:delete" class="text-red-500 text-xl" />
              Borrar la cuenta
            </div>
            <Icon name="mdi:chevron-right" class="text-red-400 text-xl" />
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Área principal -->
    <div class="flex-1 p-10 flex flex-col">
      <!-- Título arriba centrado -->
      <h1 class="text-2xl font-bold text-center">Mi perfil</h1>

      <!-- Contenedor que centra el formulario en X y Y -->
      <div class="flex flex-1 items-center justify-center mb-40">
        <form
          @submit.prevent="updateUser"
          class="bg-white shadow-md rounded-lg p-6 max-w-lg w-full flex flex-col"
        >
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold">Nombre:</label>
            <input
              type="text"
              v-model="dataUpdateUser.name"
              class="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold"
              >Dirección de correo electrónico:</label
            >
            <input
              type="email"
              v-model="dataUpdateUser.email"
              class="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-600 font-semibold">Teléfono:</label>
            <input
              type="text"
              v-model="dataUpdateUser.phone"
              class="border border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div class="flex justify-center mt-4">
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold"
            >
              Actualizar la cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "panel",
  middleware: ["auth"],
});

import { ref } from "vue";
import { useUserStore } from "~/store/user/user.store";
import type { IUser } from "~/interfaces";

const imageSrc = ref(
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
);
const userStore = useUserStore();
const config = useRuntimeConfig();
const userCookie = useCookie<IUser>("user");

const user = computed(() => userStore.user);

// Handle file selection
const handleImageChange = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    imageSrc.value = URL.createObjectURL(file);
  }
};

// update user
const dataUpdateUser = ref({
  name: user.value?.name,
  email: user.value?.email,
  phone: user.value?.phone,
});

const updateUser = async () => {
  try {
    const res = await $fetch(
      `${config.public.api_url}/client/update/${userCookie.value?.name}`,
      {
        method: "PATCH",
        // headers: {
        //   // Authorization: `Bearer ${userStore.token}`,
        // },
        body: dataUpdateUser.value,
      }
    );
    userCookie.value.name = dataUpdateUser.value.name as string;
    userCookie.value.email = dataUpdateUser.value.email as string;
    userCookie.value.phone = dataUpdateUser.value.phone as string;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
