export interface Plant {
  name: string;
  image: string;
  description: string;
}

export interface IProductProps {
  id: string;
  name: string;
  count: number;
  price: {
    integer: number;
    fraction: number;
  };
}

export type PlantsData = Plant[];
