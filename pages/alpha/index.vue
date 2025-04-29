<template>
  <div class="">
    <div class="container mx-auto w-9/12">
      <img
        src="/alpha/banner.png"
        alt="Banner de Alpha"
        class="w-full"
        loading="lazy"
      />
    </div>

    <div class="flex container mx-auto w-9/12">
      <div class="flex-1">
        <img src="/alpha/logoAlpha.png" alt="Logo Alpha" />
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <h1 class="text-center text-3xl font-bold text-[#006633]">
          Alpha Soluciones y Negocios
        </h1>
        <h3 class="text-center font-bold my-3">
          Comprometidos con la seguridad, eficiencia y calidad en cada conexión.
        </h3>
        <p class="text-justify">
          Somos una empresa especializada en servicios eléctricos industriales y
          domiciliarios, orientada a brindar soluciones técnicas confiables,
          eficientes y seguras. Nuestro enfoque combina experiencia técnica,
          personal calificado y un compromiso constante con la seguridad y la
          excelencia operativa.
        </p>
        <p class="text-justify">
          Atendemos a empresas, constructoras, industrias y comercios que
          requieren un aliado técnico confiable para garantizar el
          funcionamiento seguro de sus instalaciones.
        </p>
      </div>
    </div>

    <div class="container mx-auto w-9/12">
      <h2 class="text-center text-3xl font-bold text-[#006633]">
        NUESTROS SERVICIOS
      </h2>
      <div class="grid grid-cols-3 gap-5">
        <div v-for="servicio of servicios" :key="servicio" class="shadow-xl shadow-gray-400">
          <img :src="`/alpha/${servicio}`" :alt="servicio" class="rounded"/>
        </div>
      </div>
    </div>

    <div class="flex my-16 gap-x-9 container mx-auto w-9/12">
      <div class="flex-1">
        <img src="/alpha/ELECTRONICOS.jpg" alt="Imagen Referencial" />
      </div>
      <div class="flex-1 flex flex-col justify-center">
        <h2>¿Por qué elegir a Alpha Soluciones y Negocios?</h2>
        <P>
          <span class="font-bold text-lg">🔋 Experiencia comprobada:</span>
          Contamos con un equipo técnico calificado y con experiencia en el
          desarrollo de soluciones eléctricas para diversos sectores:
          industrial, comercial y residencial.
        </P>
        <p>
          <span class="font-bold text-lg"
            >⚡ Compromiso con la seguridad:
          </span>
          Contamos con un equipo técnico calificado y con experiencia en el
          desarrollo de soluciones eléctricas para diversos sectores:
          industrial, comercial y residencial.
        </p>
        <p>
          <span class="font-bold text-lg"> 🛠 Atención personalizada:</span>
          Brindamos asesoría directa y soluciones a la medida de cada proyecto.
          Escuchamos tus necesidades y respondemos con eficiencia.
        </p>
        <p>
          <span class="font-bold text-lg">📈 Eficiencia operativa:</span>
          Optimizamos tiempos, recursos y procesos para que tus sistemas
          eléctricos funcionen sin interrupciones y con el menor riesgo posible.
        </p>
        <p>
          <span class="font-bold text-lg"> 🔎 Transparencia y confianza: </span>
          Nos enfocamos en construir relaciones duraderas con nuestros clientes,
          basadas en resultados reales y comunicación clara.
        </p>
        <p>
          <span class="font-bold text-lg"
            >🚀 Soporte técnico post-servicio</span
          >
          Acompañamos cada proyecto incluso después de la entrega, asegurando el
          funcionamiento óptimo de tus instalaciones eléctricas.
        </p>
      </div>
    </div>
    <footer class="flex">
      <div
        class="flex-1 py-7 flex flex-col justify-center items-center bg-black text-white"
      >
        <h3 class="text-xl font-bold">Contacto:</h3>
        <p>Escribanos via <span>whatsapp</span> y pronto lo contactaremos</p>
        <p>936939501</p>
      </div>
      <div class="flex-1 flex flex-col justify-center items-center">
        <a href="https://wa.me/917084506" class="flex items-center text-2xl font-bold">
          <Icon name="ic:baseline-whatsapp" size="32" /> Solicite un Presupuesto
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const servicios = ref<string[]>([
  "DISEÑOPROPYECTOS.png",
  "ELECTRICAS.png",
  "MECANICAS.png",
  "OBRASCIVILES.png",
  "PINTIURA.png",
  "SANITARIAS.png"
]);
</script>

<style scoped></style>
