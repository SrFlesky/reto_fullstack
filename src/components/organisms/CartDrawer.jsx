import { Button } from "../atoms/Button";
import { useState } from "react";

export function CartDrawer({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
    alert("Drawer Abierto");
  };
  const closeCart = () => {setIsOpen(false)
    alert("Drawer Cerrado")
  };

  return (
    <div>
      {/* Test */}
      <Button onClick={openCart} variant={"primary"} >Abrir carrito</Button>

      {/* Overlay */}
      <div onClick={closeCart} className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div>
          <h2>Tu carrito</h2>
          <Button onClick={closeCart} variant={"outline"}>Cerrar</Button>
        </div>

        {/* Lista de productos */}
        <div>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} className="w-4 h-4" />
              <div>
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
