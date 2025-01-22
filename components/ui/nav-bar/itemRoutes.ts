interface RouteItem {
  name: string;
  to: string;
}

export const pdfUrl: string =
  "https://dzsm51n6xs13l.cloudfront.net/media/documents/CATALOGO_EQUIP.pdf";

export const itemRoutes: RouteItem[] = [
  { name: "Inicio", to: "/" },
  { name: "Marcas", to: "/providers" },
  { name: "Categorías", to: "/providers/Hola Mundo" },
  { name: "Productos", to: "/products" },
];