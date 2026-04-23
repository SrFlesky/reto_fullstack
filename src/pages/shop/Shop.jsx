import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";
import useCartStore from "../../store/cartStore";
import { useState } from "react";

const calling = () => alert("Funcionando");

function Home() {
  const { addItem } = useCartStore();
  const [search, setSearch] = useState("");
  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <input
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=""
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addItem(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
