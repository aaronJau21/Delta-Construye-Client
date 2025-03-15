export interface ILoginClientResponse {
  access_token: string;
  user: IUser;
  expires_in: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  status?: boolean;
  phone: string;
  created_at?: Date;
  updated_at?: Date;
}
