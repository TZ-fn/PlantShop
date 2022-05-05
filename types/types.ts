export interface Plant {
  id: string;
  name: string;
  image: string;
  description: string;
  price: { integer: number; fraction: number; currency: string };
}

export type PlantsData = Plant[];
export interface ProductProps extends Plant {
  count: number;
}