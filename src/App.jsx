import Home from "./pages/home/Home";
import { Navbar } from "./components/organisms/Navbar";
import { useState } from "react";
import { CartDrawer } from "./components/organisms/CartDrawer";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <div>
      <Navbar onOpenCart={ ()=>setIsCartOpen(true)} />

      <CartDrawer
        items={items}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <Home />
    </div>
  );
}
