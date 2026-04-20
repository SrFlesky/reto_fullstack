import { Globe, ChevronDown } from "lucide-react";

export function TopBar() {
  const notWorking = () => alert("En desarrollo...");

  return (
    <div className="bg-black text-white px-8 py-2 flex items-center justify-between">
      <span className="text-xs tracking-widest">
        Página creada como proyecto final del curso FullStack!
      </span>

      <div className="flex items-center gap-6">
        <button
          onClick={notWorking}
          className="text-xs uppercase tracking-widest hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={notWorking}
          className="flex items-center gap-1 text-xs uppercase tracking-widest hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <Globe size={14} />
          <ChevronDown size={12}/>
        </button>
      </div>
    </div>
  );
}
