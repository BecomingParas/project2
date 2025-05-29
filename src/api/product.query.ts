import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./product.fetch";
import type { TProduct } from "../types/product.type";

export function useGetAllProducts() {
  return useQuery<TProduct[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
}
