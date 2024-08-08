import { endPoint } from "./EndPoints";
import { axiosInstance } from "./axiosInstance";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get(endPoint.getAllProducts);
    const { products } = response.data;
    // console.log(products);
    return products || [];
  } catch (error) {
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`${endPoint.getProductById(id)}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return null;
  }
};

