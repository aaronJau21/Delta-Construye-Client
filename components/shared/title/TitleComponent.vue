<template>
  <h2 class="text-3xl font-bold">{{ $props.title }}</h2>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped></style>
