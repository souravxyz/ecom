import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductById } from "../api/apiHandler";

export const productGetQuaries = () => {
    return useQuery({
      queryKey: ["products"],
      queryFn: getProducts,
    });
  };
  export const productGetByIdQuaries = (id) => {
    return useQuery({
      queryKey: ["product", id],
      queryFn: () => getProductById(id),
      enabled: !!id,
    });
  };