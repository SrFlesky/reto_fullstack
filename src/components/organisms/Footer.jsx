export function Footer() {
  return (
    <footer>
      {/* Logo y descripción */}
      <div>
        <h2>E-Commerce</h2>
        <p>Proyecto final del curso FullStack — tienda de moda y accesorios.</p>
      </div>

      {/* Links de navegación */}
      <div>
        <h3>Tienda</h3>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/shop">Tienda</a>
          </li>
          <li>
            <a href="/about">Información</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h3>Contacto</h3>
        <ul>
          <li>juan.montenegror@outlook.com</li>
          <li>+57 322 466 3623</li>
          <li>Pasto, Colombia</li>
        </ul>
      </div>

      {/* Copyright */}
      <div>
        <p>2025 E-Commerce - Creado con paciencia y corazón.</p>
      </div>
    </footer>
  );
}
