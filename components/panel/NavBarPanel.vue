<template>
  <div class="bg-white h-20 flex justify-around items-center">
    <img src="/logo.png" alt="panel" class="w-40"/>

    <div class="flex gap-x-4">
      <NuxtLink to="/panel">Inicio</NuxtLink>
      <NuxtLink to="/panel/perfil">Mi Perfil</NuxtLink>
      <NuxtLink to="/">Tienda</NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
