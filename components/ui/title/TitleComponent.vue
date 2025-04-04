<template>
  <h2 :class="`${$props.class} text-global-text text-xl font-bold uppercase`">
    {{ $props.title }}
  </h2>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  class?: string;
}
defineProps<Props>();
</script>

<style scoped></style>
