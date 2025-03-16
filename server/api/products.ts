export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = query.page || 1;

  const config = useRuntimeConfig();
  const baseUrl = config.public.api_url || "http://localhost:8000/api/v1";

  try {
    const response = await fetch(`${baseUrl}/product?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return { error: "No se pudieron obtener los productos" };
  }
});
