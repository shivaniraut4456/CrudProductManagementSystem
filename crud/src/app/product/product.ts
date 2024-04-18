export interface Product {
  id: number;
  name: string;
  type: string;
  unit: string;
  subProducts: SubProduct[];
}

export interface SubProduct {
  name: string;
  unit: string;
}
