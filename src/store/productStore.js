import { create } from "zustand";
import productService from "../services/productService";

const useProductStore = create((set, get) => ({
  products: [],

  fetchProducts: async () => {
    const data = await productService.getAll();
    set({ products: data });
  },
}));

export default useProductStore;
