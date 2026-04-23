function About() {
  return (
    <div className="bg-white text-black min-h-screen mb-20 border-white">

      {/* Hero */}
      <div className="px-8 py-20 max-w-4xl mx-auto border-b border-gray-800">
        <span className="text-xs uppercase tracking-widest text-[#E8540A]">
          Sobre nosotros
        </span>
        <h1 className="text-4xl md:text-5xl font-medium mt-4 mb-6">
          Acerca del proyecto
        </h1>
        <p className="text-sm text-gray-800 leading-relaxed max-w-xl">
          Este es un proyecto final del curso FullStack, una tienda de moda y
          accesorios construida con React, Zustand, Axios y TailwindCSS.
        </p>
      </div>

      {/* Historia */}
      <div className="px-8 py-16 max-w-4xl mx-auto border-b border-gray-800">
        <h2 className="text-xs uppercase tracking-widest text-[#E8540A] mb-4">
          El proyecto
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed max-w-xl">
          Esta tienda fue desarrollada como ejercicio práctico para aplicar
          conceptos de desarrollo frontend moderno — componentización, manejo de
          estados globales, consumo de APIs y buenas prácticas de diseño.
        </p>
      </div>

      {/* Tecnologías */}
      <div className="px-8 py-16 max-w-4xl mx-auto border-b border-gray-800">
        <h2 className="text-xs uppercase tracking-widest text-[#E8540A] mb-8">
          Tecnologías usadas
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'Zustand', 'Axios', 'TailwindCSS', 'React Router DOM', 'Lucide React', 'FakeStore API'].map(tech => (
            <li key={tech} className="flex items-center gap-2 text-sm text-gray-800">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8540A]" />
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Autor */}
      <div className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-[#E8540A] mb-6">
          By
        </h2>
        <p className="text-xl font-medium mb-2">Juan David Montenegro Realpe</p>
        <p className="text-sm text-gray-800">juan.montenegror@outlook.com</p>
      </div>

    </div>
  )
}

export default About;