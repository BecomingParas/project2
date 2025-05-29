import type { TProduct } from "../types/product.type";

export async function getAllProducts(): Promise<TProduct[]> {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  console.log(data);

  return data.products;
}
