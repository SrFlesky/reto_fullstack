import { ShoppingCart } from "lucide-react";

export function Navbar({}) {
    const onOpenCart = () => { alert("OPENING CART") }
  return (
    <nav>
      {/* Logo */}
      <div>
        <h1>Reto Full Stack</h1>
      </div>

      {/* Links */}
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Tienda</a>
        </li>
        <li>
          <a href="/">Información</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
      </ul>

      {/* Carrito */}
      <button onClick={onOpenCart}>
        <ShoppingCart />
      </button>
    </nav>
  );
}
