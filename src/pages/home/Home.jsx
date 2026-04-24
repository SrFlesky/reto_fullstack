import { ProductCard } from "../../components/molecules/ProductCard";
import useCartStore from "../../store/cartStore";
import { Link } from "react-router-dom";
import hero_pic from "../../assets/hero.jpg";
import { useEffect } from "react";
import useProductStore from "../../store/productStore";

const calling = () => alert("Funcionando");

function Home() {
  const { addItem } = useCartStore();
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[700px] flex items-center bg-cover bg-center"
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
            Una tienda de moda y accesorios creada como proyecto final del curso
            FullStack.
          </p>
          <Link
            to="/shop"
            className="self-start mt-4 bg-white text-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#E8540A] hover:text-white transition-colors duration-300"
          >
            Comprar ahora
          </Link>
        </div>
      </div>

      {/* Productos destacados */}
      <div className="px-8 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-[#E8540A]">
              Lo mejor de la tienda
            </span>
            <h2 className="text-2xl font-medium">Productos Destacados</h2>
            <div className="w-12 h-0.5 bg-[#E8540A]" />
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200"
          >
            Ver todos
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
