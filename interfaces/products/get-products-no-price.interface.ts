export interface IGetProductsNoPrice {
  current_page:   number;
  data:           Datum[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  string;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Datum {
  id:                  number;
  name:                string;
  description:         null;
  stock:               number;
  price:               string;
  status:              boolean;
  sku:                 string;
  porcentage_discount: number;
  product_images:      ProductImage[];
}

export interface ProductImage {
  id:         number;
  image:      string;
  product_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
