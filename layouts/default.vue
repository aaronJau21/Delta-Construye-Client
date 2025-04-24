<template>
  <div class="relative min-h-screen bg-white text-global-text flex flex-col">
    <ImageComponent />
    <NavbarComponent />
    <slot />

    <ModalShowRoutesCategory />
    <ButtonWhatsApp />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import ButtonWhatsApp from "~/components/ui/button-whatsApp/ButtonWhatsApp.vue";
import FooterComponent from "~/components/ui/footer/FooterComponent.vue";
import ImageComponent from "~/components/ui/image/ImageComponent.vue";
import ModalShowRoutesCategory from "~/components/ui/navBar/ModalShowRoutesCategory.vue";
import NavbarComponent from "~/components/ui/navBar/NavbarComponent.vue";
</script>

<style scoped></style>
