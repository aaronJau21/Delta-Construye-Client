<template>
  <nav class="mx-auto w-auto">
    <div class="flex gap-x-5 my-3">
      <NuxtLink
        v-for="route in routes"
        :key="route.title"
        :href="route.href"
        class="font-bold text-primary hover:text-global-text transition-colors"
      >
        {{ route.title }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface IRoutes {
  title: string;
  href: string;
}

const routes: IRoutes[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Marcas",
    href: "/providers",
  },
  {
    title: "Exclusivos",
    href: "/exclusivo",
  },
  {
    title:"Productos",
    href:"/products"
  }
];
</script>

<style scoped>
a.router-link-exact-active {
  color: #272727;
}
</style>
