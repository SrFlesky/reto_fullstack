export default function Checkout() {
  return (
    <div>

      {/* Formulario */}
      <div>
        <h1>Checkout</h1>

        <div>
          <h2>Información de envío</h2>
          <input placeholder="Nombre" />
          <input placeholder="Apellido" />
          <input placeholder="Email" />
          <input placeholder="Dirección" />
          <input placeholder="Ciudad" />
          <input placeholder="País" />
        </div>

        <div>
          <h2>Información de pago</h2>
          <input placeholder="Número de tarjeta" />
          <input placeholder="Fecha de vencimiento" />
          <input placeholder="CVV" />
        </div>

        <button>Pagar</button>
      </div>

      {/* Lado derecho — resumen del pedido */}
      <div>
        <h2>Resumen del pedido</h2>
        <div>{/* items del carrito */}</div>
        <p>Total</p>
      </div>
    </div>
  );
}
