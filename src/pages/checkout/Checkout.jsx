import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import { Button } from "../../components/atoms/Button";

export default function Checkout() {
  const { items, getTotalPrice } = useCartStore();
  const navigate = useNavigate();

  const handlePay = () => {
    alert("Una disculpa, no hay sistema");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-8 py-4 max-w-6xl mx-auto overflow-x-hidden">
      {/* Formulario */}
      <div className="flex flex-col bg-white gap-8 p-4 border rounded-lg">
        <h1 className="text-2xl font-medium">Checkout</h1>

        {/* Envío */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-widest text-[#E8540A]">
            Información de envío
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Nombre"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
            <input
              placeholder="Apellido"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
          </div>
          <input
            placeholder="Email"
            className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
          />
          <input
            placeholder="Dirección"
            className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Ciudad"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
            <input
              placeholder="País"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
          </div>
        </div>

        {/* Pago */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs uppercase tracking-widest text-[#E8540A]">
            Información de pago
          </h2>
          <input
            placeholder="Número de tarjeta"
            className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Fecha de vencimiento"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
            <input
              placeholder="CVV"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
          </div>
        </div>

        <Button onClick={handlePay} variant={"primary"}>
          Pagar
        </Button>
      </div>

      {/* Resumen */}
      <div className="flex flex-col bg-white gap-6 p-4 border rounded-lg h-fit max-h-[600px] overflow-y-auto">
        <h2 className="text-xs uppercase tracking-widest text-[#E8540A]">
          Resumen del pedido
        </h2>

        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain bg-gray-100 p-2"
              />
              <div className="flex flex-col flex-1">
                <p className="text-sm line-clamp-1">{item.title}</p>
                <p className="text-xs text-gray-400">
                  {item.quantity} x ${item.price}
                </p>
              </div>
              <p className="text-sm font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <span className="text-sm uppercase tracking-widest">Total</span>
          <span className="text-sm font-medium">
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
