<template>
  <div class="form-container">
    <div class="form-header text-center">
      <h1>Libro de reclamaciones</h1>
      <p class="legal-text">
        Conforme a lo establecido en el Código de Protección y Defensa del
        Consumidor este establecimiento cuenta con un Libro de Reclamaciones
        virtual a tu disposición.
      </p>
      <p class="company-info">Delta S.A.C.</p>
      <p class="company-info">RUC: 20602985971</p>
      <p class="company-info">
        Dirección: Calle Germán Schreiber 276 San Isidro, Lima, Perú
      </p>
    </div>

    <div class="form-section">
      <h2 class="section-title text-center">
        Identificador del consumidor reclamante
      </h2>

      <div class="subsection">
        <h3 class="subsection-title text-center">Identificación</h3>
        <div class="options-group">
          <div class="option">
            <label>
              <input type="radio" v-model="tipoPersona" value="natural" />
              Persona Natural
            </label>
          </div>
          <div class="option">
            <label>
              <input type="radio" v-model="tipoPersona" value="juridica" />
              Persona Jurídica
            </label>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3 class="subsection-title text-center">Doc. Identidad</h3>
        <div class="options-group">
          <div class="option">
            <label>
              <input type="radio" v-model="tipoDocumento" value="dni" />
              DNI
            </label>
          </div>
          <div class="option">
            <label>
              <input type="radio" v-model="tipoDocumento" value="ruc" />
              RUC
            </label>
          </div>
          <div class="option">
            <label>
              <input type="radio" v-model="tipoDocumento" value="carnet" />
              Carné de Extranjería
            </label>
          </div>
        </div>
      </div>

      <div class="input-group">
        <label>Numero de documento</label>
        <input type="text" v-model="numeroDocumento" />
      </div>

      <div class="input-group">
        <label>Domicilio</label>
        <input type="text" v-model="domicilio" />
      </div>

      <div class="input-group">
        <label>Telefono</label>
        <input type="text" v-model="telefono" />
      </div>

      <div class="input-group">
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>

      <div class="subsection">
        <h3 class="subsection-title text-center">¿Eres mayor de edad?</h3>
        <div class="options-group">
          <div class="option">
            <label>
              <input type="radio" v-model="mayorEdad" value="si" />
              Sí
            </label>
          </div>
          <div class="option">
            <label>
              <input type="radio" v-model="mayorEdad" value="no" />
              No
            </label>
          </div>
        </div>
      </div>

      <div v-if="mayorEdad === 'no'" class="subsection">
        <h3 class="subsection-title text-center">
          Datos del Padre, Madre o tutor
        </h3>
        <!-- Campos adicionales para padres/tutores -->
      </div>

      <div class="subsection">
        <h3 class="subsection-title text-center">
          Manifiesto del consumidor reclamante
        </h3>
      </div>

      <div class="subsection">
        <h3 class="subsection-title text-center">Tipo de solicitud</h3>
        <div class="options-group">
          <div class="option">
            <label>
              <input type="radio" v-model="tipoSolicitud" value="reclamo" />
              Reclamo
            </label>
            <small
              >Disconformidad relacionada a los productos o servicios</small
            >
          </div>
          <div class="option">
            <label>
              <input type="radio" v-model="tipoSolicitud" value="queja" />
              Queja
            </label>
            <small
              >Disconformidad no relacionada a los productos o servicios o
              malestar o descontento respecto a la atención al público</small
            >
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3 class="subsection-title text-center">Tipo de bien</h3>
        <div class="options-group">
          <div class="option">
            <label>
              <input type="radio" v-model="tipoBien" value="producto" />
              Producto
            </label>
          </div>
          <div class="option">
            <label>
              <input type="radio" v-model="tipoBien" value="servicio" />
              Servicio
            </label>
          </div>
        </div>
      </div>

      <div class="input-group">
        <label>Monto reclamado</label>
        <input type="number" v-model="montoReclamado" />
      </div>

      <div class="input-group">
        <label>Detalle de Producto o Servicio</label>
        <textarea v-model="detalleProducto" maxlength="5" rows="4"></textarea>
        <div class="char-count">máx. 0 / 5</div>
      </div>

      <div class="input-group">
        <label>Detalle de la Reclamación o Queja / Pedido</label>
        <textarea v-model="detalleReclamo" maxlength="20" rows="4"></textarea>
        <div class="char-count">máx. 0 / 20</div>
      </div>

      <div class="input-group">
        <label
          >Observaciones y acciones adoptadas por el proveedor (a ser completado
          por Delta)</label
        >
        <textarea v-model="observacionesDelta" rows="3" disabled></textarea>
      </div>

      <div class="input-group date-group">
        <label>Fecha</label>
        <input
          type="text"
          v-model="fecha"
          placeholder="dd/mm/aaaa"
          class="date-input"
          readonly
          @click="showDatePicker"
        />
      </div>

      <div class="legal-text-container">
        <p class="legal-text">
          La formulación del reclamo no impide acudir a otras vías de solución
          de controversias ni es requisito previo para interponer una denuncia
          ante el INDECOPI. El proveedor debe dar respuesta al reclamo o queja
          en un plazo no mayor a quince (15) días hábiles, el cual es
          improrrogable.
        </p>

        <p class="legal-text">
          Al dar click al botón 'Enviar' declaro ser el titular del contenido
          del presente formulario, manifestando bajo declaración jurada los
          hechos descritos en el. Al enviar mis datos personales, acepto la
        </p>

        <p class="privacy-policy">
          <a href="#" class="policy-link"
            >Política de Privacidad y Tratamiento de Datos Personales de
            Delta.</a
          >
        </p>
      </div>

      <div class="submit-container">
        <button type="submit" class="submit-button" @click="enviarFormulario">
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibroReclamaciones",
  data() {
    return {
      tipoPersona: null,
      tipoDocumento: null,
      numeroDocumento: "",
      domicilio: "",
      telefono: "",
      email: "",
      mayorEdad: null,
      tipoSolicitud: null,
      tipoBien: null,
      montoReclamado: "",
      detalleProducto: "",
      detalleReclamo: "",
      observacionesDelta: "",
      fecha: "",
    };
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  color: #000000;
  font-family: Arial, sans-serif;
}

.text-center {
  text-align: center;
}

.form-header {
  margin-bottom: 30px;
}

h1 {
  font-size: 24px;
  margin-bottom: 15px;
}

.legal-text {
  font-style: italic;
  margin-bottom: 15px;
  text-align: center;
}

.company-info {
  margin: 5px 0;
}

.form-section {
  margin-top: 20px;
}

.section-title,
.subsection-title {
  margin: 20px 0 15px;
  font-weight: bold;
}

.subsection {
  margin-bottom: 20px;
}

.options-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}

.option {
  margin: 5px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.option small {
  font-size: 12px;
  color: #000000;
  margin-top: 3px;
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 5px;
  display: block;
  text-align: center;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"],
textarea {
  width: 100%;
  max-width: 400px;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 4px;
  color: #000000;
}

textarea {
  resize: vertical;
}

.char-count {
  font-size: 12px;
  text-align: right;
  color: #000000;
  margin-top: 3px;
  width: 100%;
  max-width: 400px;
}

.legal-text-container {
  margin: 30px 0;
  text-align: center;
}

.legal-text {
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
}

.privacy-policy {
  margin-top: 5px;
}

.policy-link {
  color: #4CAF50;
  text-decoration: none;
}

.policy-link:hover {
  text-decoration: underline;
}

.submit-container {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}

.submit-button {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  background-color: #9ba4af;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.submit-button:hover {
  background-color: #8a939d;
}
</style>
