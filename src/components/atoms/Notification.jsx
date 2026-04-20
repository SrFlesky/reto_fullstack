import { useEffect, useState } from "react";
import useCartStore from "../../store/cartStore";

export function Notification() {
  const { notification } = useCartStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000);
    }
  }, [notification]);

  if (!notification) return null;

  return (
    <>
      {/* Mensaje*/}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 px-6 py-4
  flex items-center gap-3
  sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto
  transition-all duration-300
  bg-[#E8540A] text-white
  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {notification}
      </div>
    </>
  );
}
