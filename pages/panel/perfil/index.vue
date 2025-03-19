<template>
  <div class="bg-gray-200 font-sans h-screen w-full flex justify-center items-center">
    <form
      @submit.prevent="updateUser()"
      class="card w-96 bg-white shadow-xl hover:shadow border border-gray-400 rounded-lg p-6"
    >
      <!-- Imagen centrada -->
      <div class="flex justify-center mb-4">
        <label for="imageInput">
          <img
            class="w-32 h-32 rounded-full border-4 border-gray-300 cursor-pointer"
            :src="imageSrc"
            alt="Profile Image"
          />
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          class="hidden"
          @change="handleImageChange"
        />
      </div>

      <!-- Datos en columna con etiquetas -->
      <div class="space-y-4">
        <div class="flex flex-col">
          <label class="text-gray-600 font-semibold">Nombre:</label>
          <input
            type="text"
            v-model="dataUpdateUser.name"
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>
<!-- 
        <div class="flex flex-col">
          <label class="text-gray-600 font-semibold">Apellido:</label>
          <input
            type="text"
            v-model="dataUpdateUser.lastName"
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div> -->

        <div class="flex flex-col">
          <label class="text-gray-600 font-semibold">Email:</label>
          <input
            type="email"
            v-model="dataUpdateUser.email"
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-gray-600 font-semibold">Teléfono:</label>
          <input
            type="text"
            v-model="dataUpdateUser.phone"
            class="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      </div>

      <!-- Botón centrado -->
      <div class="flex justify-center mt-4">
        <button class="bg-green-500 px-4 py-2 rounded-lg text-white text-lg font-semibold">
          Guardar
        </button>
      </div>
    </form>
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

const imageSrc = ref("https://avatars.githubusercontent.com/u/67946056?v=4");
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
