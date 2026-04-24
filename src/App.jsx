import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { Navbar } from "./components/organisms/Navbar";
import { CartDrawer } from "./components/organisms/CartDrawer";
import useCartStore from "./store/cartStore";
import { TopBar } from "./components/molecules/TopBar";
import { Notification } from "./components/atoms/Notification";
import { Footer } from "./components/organisms/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import { HashRouter } from 'react-router-dom'

export default function App() {
  const { deleteItem } = useCartStore();

  return (
    <HashRouter>
      <TopBar />
      <Navbar />

      <CartDrawer onDeleteItem={deleteItem} />
      <Notification />
      <main className="min-h-screen bg-[#FDF8F4] pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
