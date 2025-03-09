import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme', // Evita usar el tema por defecto
      themes: {
        customTheme: {
          colors: {}, // No definas colores aquí para que no interfieran con Tailwind
        },
      },
    },
    components,
    directives
  })

  nuxtApp.vueApp.use(vuetify)
})
