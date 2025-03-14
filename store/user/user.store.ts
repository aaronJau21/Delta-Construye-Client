import { defineStore } from "pinia";
import { ref } from "vue";
import type { IUser } from "~/interfaces";

export const useUserStore = defineStore("userStore", () => {
  const config = useRuntimeConfig();
  const userCookie = useCookie<IUser>("user");
  const user = ref<IUser>();

  const getUser = async (): Promise<IUser> => {
    const { data } = await useFetch<IUser>(
      `${config.public.api_url}/client/getClient/${userCookie.value.name}`
    );

    user.value = data.value!;
    return user.value;
  };

  // Execute getUser immediately when the store is initialized
  getUser();

  return {
    user,
    getUser,
  };
});
