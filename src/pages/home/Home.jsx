import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";
import useCartStore from "../../store/cartStore";
import { Link } from 'react-router-dom';
import hero_pic from "../../assets/hero.jpg"


const calling = () => alert("Funcionando");

function Home() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[600px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero_pic})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido */}
        <div className="relative z-10 px-12 flex flex-col gap-4 max-w-lg">
          <span className="text-xs uppercase tracking-widest text-white/70">
            Nueva colección
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight">
            Exclusiva de diseñador ?)
          </h1>
          <p className="text-sm text-white/70 leading-relaxed">
            Una tienda de moda y accesorios creada como proyecto final del curso FullStack.
          </p>
          <Link
            to="/shop"
            className="self-start mt-4 bg-white text-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#E8540A] hover:text-white transition-colors duration-300"
          >
            Shop now
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home;
