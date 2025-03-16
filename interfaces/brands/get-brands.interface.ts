export interface IGetBrands {
  brands: BrandElement[];
}

export interface BrandElement {
  id:          number;
  brand_id:    number;
  category_id: number;
  created_at:  Date;
  updated_at:  Date;
  brand:       BrandBrand;
  category:    Category;
}

export interface BrandBrand {
  id:     number;
  name:   string;
  logo:   string;
  status: boolean;
}

export interface Category {
  id:         number;
  name:       string;
  created_at: Date;
  updated_at: Date;
}
