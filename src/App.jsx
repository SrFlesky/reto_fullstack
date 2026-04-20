import Home from "./pages/home/Home";
import { Navbar } from "./components/organisms/Navbar";
import { useState } from "react";
import { CartDrawer } from "./components/organisms/CartDrawer";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  return (
    <div>
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <CartDrawer
        items={items}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <main className="min-h-screen bg-[#FDF8F4]">
        <Home onAddProduct={addItem} />
      </main>
    </div>
  );
}
