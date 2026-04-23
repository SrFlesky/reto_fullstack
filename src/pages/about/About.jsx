// src/pages/about/About.jsx

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div>
        <span>Sobre nosotros</span>
        <h1>Acerca del proyecto</h1>
        <p>
          Este es un proyecto final del curso FullStack, una tienda de moda y
          accesorios construida con React, Zustand, Axios y TailwindCSS.
        </p>
      </div>

      {/* Historia */}
      <div>
        <h2>El proyecto</h2>
        <p>
          Esta tienda fue desarrollada como ejercicio práctico para aplicar
          conceptos de desarrollo frontend moderno — componentización, manejo de
          estados globales, consumo de APIs y buenas prácticas de diseño.
        </p>
      </div>

      {/* Tecnologías */}
      <div>
        <h2>Tecnologías usadas</h2>
        <ul>
          <li>React</li>
          <li>Zustand</li>
          <li>Axios</li>
          <li>TailwindCSS</li>
          <li>React Router DOM</li>
          <li>Lucide React</li>
          <li>FakeStore API</li>
        </ul>
      </div>

      {/* Autor */}
      <div>
        <h2>By</h2>
        <p>Juan David Montenegro</p>
        <p>juan.montenegror@outlook.com</p>
      </div>
    </div>
  );
}
