import useCartStore from "../../store/cartStore";

export function Notification() {
  const { notification } = useCartStore();

  if (!notification) return null;

  return (
    <>
      {/* Mensaje*/}
      <div>{notification}</div>
    </>
  );
}
