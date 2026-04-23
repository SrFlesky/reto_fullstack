import { ShoppingCart, Menu, X } from "lucide-react";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";
import { useState } from "react";

const ORANGE = "#E8540A";

export function Navbar() {
  const { openCart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      {/* Logo */}
      <div>
        <h1
          className="text-lg font-medium tracking-widest uppercase"
          style={{ color: ORANGE }}
        >
          E-Commerce
        </h1>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <Link
            to="/"
            className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
          >
            Tienda
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
          >
            Información
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Iconos */}

      {/* Carrito */}
      <button
        onClick={openCart}
        className="text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
      >
        <ShoppingCart size={20} />
      </button>

      {/* Hamburguesa — solo móvil */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
}
