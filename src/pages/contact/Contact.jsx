function Contact() {
  const onClick = ()=> {alert("En desarrollo...")}
  return (
    <div>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-16 px-8 py-20 max-w-6xl mx-auto">
        {/* Lado izquierdo */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#E8540A]">
              Información
            </span>
            <h1 className="text-4xl font-medium">Contáctanos</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Proyecto final del curso FullStack — tienda de moda y accesorios.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-medium">Antioquia</h2>
            <p className="text-sm text-gray-500">Medellín</p>
            <p className="text-sm text-gray-500">+57 000 000 0000</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-medium">Nariño</h2>
            <p className="text-sm text-gray-500">San Juan de Pasto</p>
            <p className="text-sm text-gray-500">+57 000 000 0000</p>
          </div>

        </div>

        {/* Lado derecho */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Nombre"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
            <input
              placeholder="Email"
              className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200"
            />
          </div>
          <textarea
            placeholder="Mensaje"
            rows={6}
            className="border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200 resize-none"
          />
          <button onClick={onClick} className="bg-black text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#E8540A] transition-colors duration-200 cursor-pointer self-start">
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;