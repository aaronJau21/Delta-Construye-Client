export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.param || 0;

  const config = useRuntimeConfig();
  const baseUrl = config.public.api_url || "URL_ADDRESS";

  try {
    const response = await fetch(`${baseUrl}/brands/category/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener categorias:", error);
    return { error: "No se pudieron obtener las categorias" };
  }
});
