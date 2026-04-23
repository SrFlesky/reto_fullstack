import { create } from "zustand";

const useProductStore = create((set, get) => ({
  products: [],

  fetchProducts: async () => {
    const data = await productService.getAll();
    set({ products: data });
  },
}));
