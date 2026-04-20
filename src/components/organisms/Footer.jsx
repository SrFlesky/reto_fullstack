export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16">
        {/* Logo y descripción */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg uppercase tracking-widest font-medium">
            E-Commerce
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Proyecto final del curso FullStack — tienda de moda y accesorios.
          </p>
        </div>

        {/* Links de navegación */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-400">
            Tienda
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="/"
                className="text-sm hover:text-gray-400 transition-colors duration-200"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-sm hover:text-gray-400 transition-colors duration-200"
              >
                Tienda
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-sm hover:text-gray-400 transition-colors duration-200"
              >
                Información
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm hover:text-gray-400 transition-colors duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-400">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="text-sm">juan.montenegror@outlook.com</li>
            <li className="text-sm">+57 322 466 3623</li>
            <li className="text-sm">Pasto, Colombia</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-8 py-4">
        <p className="text-xs text-gray-400 tracking-widest text-center">
          2026 E-Commerce — Creado con paciencia y corazón.
        </p>
      </div>
    </footer>
  );
}
