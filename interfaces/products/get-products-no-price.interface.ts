export interface IGetProductsNoPrice {
  current_page: number;
  data: IDatum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface IDatum {
  id: number;
  name: string;
  description: string;
  stock: number;
  price: string;
  status: boolean;
  sku: string;
  porcentage_discount: number;
}

export interface ILink {
  url: null | string;
  label: string;
  active: boolean;
}
