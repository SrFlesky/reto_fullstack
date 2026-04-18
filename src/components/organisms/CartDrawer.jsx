import { Button } from "../atoms/Button";

export function CartDrawer({ items = [], isOpen, onClose }) {
  return (
    <div>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`flex flex-col fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-sm uppercase tracking-widest font-medium">
            Tu carrito
          </h2>
          <button
            onClick={onClose}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
