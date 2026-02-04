import type { Product, Size, Color } from "./product";

export type CartItem = {
  id: string;
  product: Product;
  size: Size;
  color: Color;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
  itemCount: number;
};
