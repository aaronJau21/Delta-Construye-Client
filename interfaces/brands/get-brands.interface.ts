export interface IGetBrands {
  brands: IData[];
}

export interface IData {
  id:         number;
  name:       string;
  logo:       string;
  status:     boolean;
  created_at: Date;
  updated_at: Date;
}
