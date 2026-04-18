import { Button } from "../atoms/Button";

export function CartDrawer({ items = [] }) {
  const closeCart = () => {
    alert("Closing Cart");
  };
  return (
    <div>
      {/* Drawer */}
      <div>
        <div>
          <h2>Tu carrito</h2>
          <Button onClick={closeCart}>Boton</Button>
        </div>

        {/* Lista de productos */}
        <div>
          {items.map((item) => (
            <div key={item.id}>
                <img src={item.image} alt={item.title} className="w-4 h-4"/>
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
