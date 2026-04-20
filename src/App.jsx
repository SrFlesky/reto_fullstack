import Home from "./pages/home/Home";
import { Navbar } from "./components/organisms/Navbar";
import { useState } from "react";
import { CartDrawer } from "./components/organisms/CartDrawer";

export default function App() {

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

    /*setIsCartOpen(true);*/
  };

  const deleteItem = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevItems.filter((item) => item.id !== product.id);
        }

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  return (
    <div>
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <CartDrawer
        onDeleteItem={deleteItem}
      />

      <main className="min-h-screen bg-[#FDF8F4]">
        <Home onAddProduct={addItem} />
      </main>
    </div>
  );
}
