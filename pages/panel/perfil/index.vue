<template>
  <!-- component -->
  <div
    class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center"
  >
    <form
      @submit.prevent="updateUser()"
      class="card w-96 mx-auto bg-white shadow-xl hover:shadow"
    >
      <label for="imageInput">
        <img
          class="w-32 mx-auto rounded-full -mt-20 border-8 border-white cursor-pointer"
          :src="imageSrc"
          alt="Profile Image"
        />
      </label>

      <!-- Hidden file input -->
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleImageChange"
      />
      <div class="text-center mt-2 text-3xl font-medium">
        <input
          type="text"
          v-model="dataUpdateUser.name"
          class="text-center outline-none border-b border-transparent hover:border-gray-300 focus:border-b-2 focus:border-green-500 transition-all duration-200 px-2 py-1 w-full"
        />
      </div>
      <div class="text-center mt-2 text-3xl font-medium">
        <input
          type="email"
          v-model="dataUpdateUser.email"
          class="text-center outline-none border-b border-transparent hover:border-gray-300 focus:border-b-2 focus:border-green-500 transition-all duration-200 px-2 py-1 w-full"
        />
      </div>
      <div class="text-center mt-2 text-3xl font-medium">
        <input
          type="text"
          v-model="dataUpdateUser.phone"
          class="text-center outline-none border-b border-transparent hover:border-gray-300 focus:border-b-2 focus:border-green-500 transition-all duration-200 px-2 py-1 w-full"
        />
      </div>

      <div class="flex justify-center">
        <button
          class="bg-green-500 px-3 py-1 m-3 rounded-lg text-xl text-white"
        >
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
