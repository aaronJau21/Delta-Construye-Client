import { defineStore } from "pinia";
import { ref } from "vue";

export const useShowFilterStore = defineStore("showFilter", () => {
  const show = ref<boolean>(false);

  const showFilter = () => {
    show.value = !show.value;
  };

  return {
    show,
    showFilter,
  };
});
