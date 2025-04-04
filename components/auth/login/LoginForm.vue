<script setup lang="ts">
import ButtonHome from "~/components/ui/button-home/ButtonHome.vue";
import { useLoginStore } from "~/store/auth/login.store";
const router = useRouter();

const email = ref<string>("");
const password = ref<string>("");
const loginStore = useLoginStore();
const errorMessage = ref<string | null>(null); // Para mostrar errores al usuario

const handleLogin = async () => {
  try {
    await loginStore.login(email.value, password.value);

    // Solo redirigimos si el login fue exitoso (token existe)
    if (loginStore.token) {
      return router.push("/");
    } else {
      throw new Error("No se recibió un token válido");
    }
  } catch (error) {
    console.error("Error en handleLogin:", error);
    errorMessage.value = "Credenciales incorrectas o error en el servidor"; // Mensaje para el usuario
    // No redirigimos a /auth/login, simplemente mostramos el error
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin()" class="bg-white">
    <ButtonHome />
    <h1 class="text-gray-800 font-bold text-2xl mb-1">Hola Denuevo</h1>
    <p class="text-sm font-normal text-gray-600 mb-7">Bienvenido Denuevo</p>

    <!-- Mostrar mensaje de error si existe -->
    <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
      {{ errorMessage }}
    </div>

    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
      <input
        class="pl-2 outline-none border-none"
        type="email"
        placeholder="Email Address"
        v-model="email"
      />
    </div>
    <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clip-rule="evenodd"
        />
      </svg>
      <input
        class="pl-2 outline-none border-none"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button
      type="submit"
      class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
    >
      Login
    </button>
    <div class="flex justify-between">
      <NuxtLink to="/" class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
        ¿Se te olvidó tu contraseña?
      </NuxtLink>
      <NuxtLink
        to="/auth/register"
        class="text-sm ml-2 hover:text-blue-500 cursor-pointer"
      >
        ¿No tienes un usuario?
      </NuxtLink>
    </div>
  </form>
</template>
