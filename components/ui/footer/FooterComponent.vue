<template>
  <div class="bg-[#D9D9D9] text-center px-6 sm:px-8 md:px-12">
    <div class="w-full max-w-screen-lg mx-auto py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 text-center md:text-left items-start">
        <!-- Logo y descripción -->
        <div class="flex flex-col items-center md:items-start">
          <img src="/public/delta-logo.png" alt="Logo" class="w-36 mb-3" />
          <p class="text-gray-600">Somos el marketplace B2B de la construcción en Perú</p>
          <span class="text-gray-500">Razón Social: EJEMPLO S.A.C.</span>
          <span class="text-gray-500">RUC: **********</span>
        </div>

        <!-- Servicio al Cliente -->
        <div>
          <h3 class="font-bold text-2xl mb-4">Servicio al Cliente</h3>
          <p class="text-gray-600 hover:text-red-600 cursor-pointer">Políticas de privacidad</p>
          <p class="text-gray-600 hover:text-red-600 cursor-pointer">Términos y Condiciones</p>
        </div>

        <!-- Contacto -->
        <div>
          <h3 class="font-bold text-2xl mb-4">Contáctanos</h3>
          <p class="text-gray-600">Teléfono: +51 912 188 792</p>
          <p class="text-gray-600">Email: ventas@equipconstruye.com</p>
        </div>
      </div>

      <!-- Redes Sociales -->
      <div class="mt-10">
        <div class="flex justify-center space-x-4 mb-6">
          <Icon name="fa:facebook-official" class="text-blue-600 text-3xl hover:text-blue-800" />
          <Icon name="fa:instagram" class="text-pink-600 text-3xl hover:text-pink-800" />
          <Icon name="fa:linkedin-square" class="text-blue-600 text-3xl hover:text-blue-800" />
        </div>
        <p class="text-gray-500 text-sm">
          © DeltaConstruye | Todos los Derechos Reservados.
        </p>
      </div>
    </div>
  </div>
</template>
