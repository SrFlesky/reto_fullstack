import Home from "./pages/home/Home";
import { Navbar } from "./components/organisms/Navbar";
import { CartDrawer } from "./components/organisms/CartDrawer";
import useCartStore from "./store/cartStore";
import { TopBar } from "./components/molecules/TopBar";

export default function App() {
  const { deleteItem } = useCartStore();

  return (
    <div>
      <TopBar />
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      <CartDrawer onDeleteItem={deleteItem} />

      <main className="min-h-screen bg-[#FDF8F4]">
        <Home />
      </main>
    </div>
  );
}
