<template>
  <div
    class="flex items-center bg-global-bg rounded-xl flex-1 pr-5 h-10 border-2 border-primary mx-5"
  >
    <input
      type="text"
      placeholder="Buscador..."
      class="border-0 outline-none rounded w-full pl-5"
      v-model="nameProduct"
    />
    <div class="flex justify-center items-center">
      <Icon
        name="heroicons-solid:search"
        class="cursor-pointer text-xl"
        @click="goRoute()"
      />
    </div>
    <button @click="changeStatus()">X</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  changeStatus: () => void;
}
defineProps<Props>();

const nameProduct = ref();
const router = useRouter();

const goRoute = () => {
  router.push(`/buscador-product/${nameProduct.value}`);
};
</script>

<style scoped></style>
