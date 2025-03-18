import { useLoginStore } from "~/store/auth/login.store";

// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const tokenCookie = useCookie("token");
  const loginStore = useLoginStore();

  // Si no hay token en las cookies y se intenta acceder al panel
  if (!tokenCookie.value && to.path.startsWith("/panel")) {
    loginStore.logout(); // Aseguramos que el estado esté limpios
    return navigateTo("/login");
  }

  // Si hay token pero el store no está sincronizado
  if (tokenCookie.value && !loginStore.isAuthenticated) {
    loginStore.isAuthenticated = true; // Sincronizamos el estado
  }
});
