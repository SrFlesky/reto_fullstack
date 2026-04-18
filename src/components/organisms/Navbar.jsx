import { ShoppingCart } from "lucide-react"

const ORANGE = "#E8540A"

export function Navbar({ onOpenCart }) {
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
          <a href="/" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200">
            Inicio
          </a>
        </li>
        <li>
          <a href="/shop" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200">
            Tienda
          </a>
        </li>
        <li>
          <a href="/about" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200">
            Información
          </a>
        </li>
        <li>
          <a href="/contact" className="text-sm uppercase tracking-widest text-gray-600 hover:text-black transition-colors duration-200">
            Contacto
          </a>
        </li>
      </ul>

      {/* Carrito */}
      <button 
        onClick={onOpenCart}
        className="text-gray-600 hover:text-black transition-colors duration-200"
      >
        <ShoppingCart size={20} />
      </button>

    </nav>
  )
}