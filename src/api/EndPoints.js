const baseUrl = "https://dummyjson.com";
const endPoint = {
  getAllProducts: "/products",
  getProductById: (id) => `/products/${id}`,
};
export { baseUrl, endPoint };
