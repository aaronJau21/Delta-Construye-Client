export interface IGetProductBySku {
  id: number;
  name: string;
  description: null | string;
  stock: number;
  price: string;
  status: boolean;
  sku: string;
  porcentage_discount: number;
  categories: Category[];
  brands: Brand[];
  product_images: ProductImage[];
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  laravel_through_key: number;
}

export interface Category {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  laravel_through_key: number;
}

export interface ProductImage {
  id: number;
  image: string;
}
