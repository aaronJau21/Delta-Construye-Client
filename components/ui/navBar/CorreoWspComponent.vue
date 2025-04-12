<template>
  <div class="py-2 flex justify-between w-full gap-x-5">
    <div class="flex gap-x-3">
      <div v-for="red in redes" :key="red.tiitle" class="hidden lg:block">
        <a
          :href="red.href"
          class="flex items-center gap-x-2 text-primary hover:text-secondary cursor-pointer transition-colors font-bold"
        >
          <Icon :name="red.icon" />
          <p class="text-xs">{{ red.tiitle }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Redes1 {
  icon: string;
  tiitle: string;
  href: string;
}
const redes: Redes1[] = [
  {
    icon: "ic:baseline-email",
    tiitle: "ALPHA.SOLUCIONES.NEGOCIOS@GMAIL.COM",
    href: "mailto:ALPHA.SOLUCIONES.NEGOCIOS@GMAIL.COM",
  },
  {
    icon: "ic:baseline-whatsapp",
    tiitle: "+51 936 939 501",
    href: "https://wa.me/936939501",
  },
];
</script>

<style scoped></style>
