import { Button } from "../../components/atoms/Button";

export default function Contact() {
  const notWorking = () => alert("En desarrollo...");
  return (
    <div>
      {/* Lado izquierdo */}
      <div>
        <span>Información</span>
        <h1>Contáctanos</h1>
        <p>Proyecto final del curso FullStack — tienda de moda y accesorios.</p>

        <div>
          <h2>Colombia</h2>
          <p>Pasto, Nariño</p>
          <p>+57 322 466 3623</p>
        </div>
      </div>

      {/* Lado derecho*/}
      <div>
        <input placeholder="Nombre" />
        <input placeholder="Email" />
        <textarea placeholder="Mensaje" />
        <Button variant={"primary"} onClick={notWorking}>
          Enviar mensaje
        </Button>
      </div>
    </div>
  );
}
