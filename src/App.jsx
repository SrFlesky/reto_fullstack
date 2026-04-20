import Home from "./pages/home/Home";
import { Navbar } from "./components/organisms/Navbar";
import { CartDrawer } from "./components/organisms/CartDrawer";
import useCartStore from "./store/cartStore";
import { TopBar } from "./components/molecules/TopBar";
import { Notification } from "./components/atoms/Notification";
import { Footer } from "./components/organisms/Footer";

export default function App() {
  const { deleteItem } = useCartStore();

  return (
    <div>
      <TopBar />
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <CartDrawer onDeleteItem={deleteItem} />
      <Notification />
      <main className="min-h-screen bg-[#FDF8F4]">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
