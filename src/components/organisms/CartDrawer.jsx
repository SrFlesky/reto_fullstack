import useCartStore from "../../store/cartStore";
import { Button } from "../atoms/Button";

export function CartDrawer({ onDeleteItem }) {
  const { items, isCartOpen, closeCart, getTotalPrice } = useCartStore();
  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`flex flex-col fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-sm uppercase tracking-widest font-medium">
            Tu carrito
          </h2>
          <button
            onClick={closeCart}
            className="text-gray-400 hover:text-black transition-colors duration-200"
          >
            X
          </button>
        </div>

        {/* Lista de productos */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain bg-gray-100 p-2"
              />
              <div className="flex flex-col justify-between flex-1">
                <p className="text-sm line-clamp-2">{item.title}</p>
                <p className="text-xs text-gray-400">
                  {item.quantity} x ${item.price}
                </p>
                <button
                  onClick={() => onDeleteItem(item)}
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 uppercase tracking-widest self-start"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Precio total */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase tracking-widest">Total</span>
            <span className="text-sm font-medium">
              {getTotalPrice() === 0 ? "—" : `$${getTotalPrice().toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
