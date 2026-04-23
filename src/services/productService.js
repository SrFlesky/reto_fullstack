import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const productService = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },
};

export default productService;
