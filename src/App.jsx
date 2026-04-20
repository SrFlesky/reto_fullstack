import Home from "./pages/home/Home";
import { Navbar } from "./components/organisms/Navbar";
import { useState } from "react";
import { CartDrawer } from "./components/organisms/CartDrawer";
import useCartStore from "./store/cartStore";

export default function App() {
  const { deleteItem } = useCartStore();

  return (
    <div>
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <CartDrawer onDeleteItem={deleteItem} />

      <main className="min-h-screen bg-[#FDF8F4]">
        <Home />
      </main>
    </div>
  );
}
