<template>
  <div class="absolute top-0 h-screen w-screen z-50" v-if="show">
    <div class="bg-black h-screen w-screen opacity-40"></div>
    <div class="absolute top-5 right-5">
      <button class="bg-white rounded-full size-7" @click="changeShow">
        X
      </button>
    </div>
    <div class="absolute top-5 left-5 flex">
      <img
        src="/imagenPrincipal.jpg"
        alt="imagen Principal"
        class="w-[95vw] h-[95vh]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const show = ref(true);

const changeShow = () => {
  show.value = false;
};
</script>

<style scoped></style>
