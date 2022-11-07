export interface Plant {
  id: string;
  name: string;
  image: string;
  description: string;
  price: { integer: number; fraction: number; currency: string };
  rating?: number;
}

export interface Product {
  id: string;
  quantity: number;
}

export type PlantsData = Plant[];

export interface ProductProps extends Plant {
  count?: number;
  isInBasket?: boolean;
}

export interface WishlistProductProps {
  id: string;
  name: string;
  image: string;
  price: { integer: number; fraction: number; currency: string };
}

export interface UserData {
  email: string;
  password: string;
}

export interface UnsplashPhoto {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string; thumb: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}
