export default defineEventHandler(async (event) => {
  // Extraer y validar el parámetro de búsqueda
  const params = getQuery(event);
  const term = params.term;
  if (!term) {
    return { error: "No se proporcionó un término de búsqueda" };
  }

  const config = useRuntimeConfig();
  const baseUrl = config.public.api_url || "http://localhost:8000/api/v1";

  try {
    // Codificar el término para evitar problemas con caracteres especiales
    const response = await fetch(
      `${baseUrl}/product/buscador/${encodeURIComponent(term as string)}`
    );
    // Verificar si la respuesta es ok (status 200-299)
    if (!response.ok) {
      throw new Error(
        `Error en la respuesta: ${response.status} - ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return { error: "No se pudieron obtener los productos" };
  }
});
