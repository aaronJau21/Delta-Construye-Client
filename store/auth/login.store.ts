import { defineStore } from "pinia";
import type { ILoginClientResponse, IUser } from "~/interfaces";
import { useCookie } from "#app";

export const useLoginStore = defineStore("loginStore", () => {
  const user = ref<IUser | null>(null);
  const token = ref<string | null>(null);
  const config = useRuntimeConfig();
  const isAuthenticated = ref<boolean>(false);

  const userCookie = useCookie("user", {
    maxAge: 60 * 60 * 24 * 7, // 1 semana
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  const tokenCookie = useCookie("token", {
    maxAge: 60 * 60 * 24 * 7, // 1 semana
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  // // Sincronizar estado inicial con cookies al cargar el store
  // if (tokenCookie.value && userCookie.value) {
  //   token.value = tokenCookie.value;
  //   user.value = JSON.parse(userCookie.value);
  //   isAuthenticated.value = true;
  // }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const result: ILoginClientResponse = await $fetch(
        `${config.public.api_url}/auth/loginClient`,
        {
          method: "POST",
          body: { email, password },
        }
      );

      // Login exitoso
      user.value = result.user;
      token.value = result.access_token;
      userCookie.value = JSON.stringify(result.user);
      tokenCookie.value = result.access_token;
      isAuthenticated.value = true; // Actualizamos el estado
    } catch (error) {
      console.error("Error en el login:", error);
      throw error; // Propagamos el error
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    userCookie.value = null;
    tokenCookie.value = null;
    isAuthenticated.value = false; // Actualizamos el estado
  };

  return { user, token, login, logout, isAuthenticated };
});
