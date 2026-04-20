import { Globe } from "lucide-react";

export function TopBar() {
    const notWorking = ()=> { alert("En desarrollo...")}
  return (
    <div>
      <span>Página creada como proyecto final del curso FullStack!</span>

      <div>
        <button>Iniciar Sesión</button>
        <button onClick={notWorking}>{<Globe size={14} />}</button>
      </div>
    </div>
  );
}
