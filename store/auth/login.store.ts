import { defineStore } from "pinia";
import type { ILoginClientResponse, IUser } from "~/interfaces";

export const useLoginStore = defineStore("loginStore", () => {
  const user = ref<IUser | null>(null);
  const token = ref<string | null>(null);
  const config = useRuntimeConfig();

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const result: ILoginClientResponse = await $fetch(
        `${config.public.api_url}/auth/loginClient`,
        {
          method: "POST",
          body: { email, password },
        }
      );

      user.value = result.user;
      token.value = result.access_token;

      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.access_token);
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return { user, token, login, logout };
});
