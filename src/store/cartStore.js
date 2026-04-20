import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items: [],
  isCartOpen: false,
  notification: null,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addItem: (product) => {
    const { items } = get();
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        items: items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }

    get().showNotification(`${product.title} agregado al carrito`);
  },

  deleteItem: (product) => {
    const { items } = get();
    const existingItem = items.find((item) => item.id === product.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        set({
          items: items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        });
      } else {
        set({ items: items.filter((item) => item.id !== product.id) });
      }
    }
  },

  getTotalPrice: () => {
    const { items } = get();

    return items.reduce((totalPrice, item) => {
      return totalPrice + item.price * item.quantity;
    }, 0);
  },

  showNotification: (message) => {
    set({ notification: { text: message, id: Date.now() } });
    setTimeout(() => set({ notification: null }), 3000);
  },
}));

export default useCartStore;
