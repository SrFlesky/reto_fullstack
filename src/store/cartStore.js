import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],
  isCartOpen: false,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));

export default useCartStore;