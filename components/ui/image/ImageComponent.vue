<template>
  <div class="absolute top-0 h-screen w-screen z-50" v-if="show">
    <div class="bg-black h-screen w-screen opacity-40"></div>
    <div class="absolute top-[32vh] right-[31.5vw] z-50">
      <button class="bg-white rounded-full size-7" @click="changeShow">
        X
      </button>
    </div>
    <div class="absolute top-[31vh] left-[29vw] flex">
      <img
        src="/imagenPrincipal.jpg"
        alt="imagen Principal"
        class="w-[40vw] h-[40vh]"
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
