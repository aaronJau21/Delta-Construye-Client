<template>
  <div>
    {{ route.params.sku }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
