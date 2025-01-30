import { defineStore } from "pinia";
import type { RegisterForm } from "~/components/auth/register/RegisterForm.vue";

export const useRegisterStore = defineStore("registerStore", () => {
  const config = useRuntimeConfig();

  const register = async ({ name, phone, email, password }: RegisterForm) => {
    try {
      await $fetch(`${config.public.api_url}/client/create`, {
        method: "POST",
        body: { name, phone, email, password },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
  };
});
