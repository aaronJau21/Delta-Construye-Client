import { defineStore } from "pinia";

export const useShowRoutesCategory = defineStore("showRouteCategory", () => {
  const show = ref<boolean>(false);

  const showRoutes = () => {
    show.value = !show.value;
  };

  return {
    show,
    showRoutes,
  };
});
