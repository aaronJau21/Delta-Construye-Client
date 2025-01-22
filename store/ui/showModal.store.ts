import { defineStore } from "pinia";
import { ref } from "vue";

export const useShowModalStore = defineStore("showModal", () => {
  const show = ref<boolean>(false);

  const showModal = () => {
    show.value = !show.value;
  };

  return {
    show,
    showModal,
  };
});
