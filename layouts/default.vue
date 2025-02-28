<template>
  <div class="relative min-h-screen flex flex-col">
    <NavbarComponent />
    <slot />
    <FooterComponent />
    <a
      href="https://wa.me/992843375"
      target="_blank"
      class="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center w-14 h-14 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Icon name="ic:baseline-whatsapp" size="32" />
    </a>
  </div>
</template>

<script setup lang="ts">
import FooterComponent from "~/components/ui/footer/FooterComponent.vue";
import NavbarComponent from "~/components/ui/nav-bar/NavbarComponent.vue";
</script>

<style scoped></style>
