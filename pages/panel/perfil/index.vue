<template>
  <!-- component -->
  <div
    class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center"
  >
    <div class="card w-96 mx-auto bg-white shadow-xl hover:shadow">
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
        {{ user?.name }}
      </div>
      <div class="text-center mt-2 font-light text-sm">
        {{ user?.email }}
      </div>
      <div class="text-center font-normal text-lg">
        {{ user?.name }}
      </div>
      <hr class="mt-8" />
      <div class="flex p-4">
        <div class="w-1/2 text-center">
          <span class="font-bold">1.8 k</span> Followers
        </div>
        <div class="w-0 border border-gray-300"></div>
        <div class="w-1/2 text-center">
          <span class="font-bold">2.0 k</span> Following
        </div>
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
import type { IUser } from "~/interfaces";
import { useUserStore } from "~/store/user/user.store";

const imageSrc = ref("https://avatars.githubusercontent.com/u/67946056?v=4");
const userStore = useUserStore();

const user = computed(() => userStore.user);

// Handle file selection
const handleImageChange = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    imageSrc.value = URL.createObjectURL(file);
    console.log("Selected file:", file);
  }
};
</script>

<style scoped></style>
