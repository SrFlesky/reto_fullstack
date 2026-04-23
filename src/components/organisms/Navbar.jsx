import { ShoppingCart, Menu, X } from "lucide-react";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";
import { useState } from "react";

const ORANGE = "#E8540A";

export function Navbar() {
  const { openCart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center relative flex items-center justify-between px-8 py-4 border-b border-gray-100">
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

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden z-50">
          <ul className="flex flex-col px-8 py-4 gap-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200"
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200"
              >
                Información
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
