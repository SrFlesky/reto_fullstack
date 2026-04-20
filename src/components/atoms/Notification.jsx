import useCartStore from "../../store/cartStore";

export function Notification() {
  const { notification } = useCartStore();

  if (!notification) return null;

  return (
    <>
      {/* Mensaje*/}
      <div className="fixed bottom-6 right-6 bg-green-500 px-2 py-2 rounded-lg text-white text-md uppercase">
        {notification}
      </div>
    </>
  );
}
