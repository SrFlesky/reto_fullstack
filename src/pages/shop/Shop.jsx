import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";
import useCartStore from "../../store/cartStore";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import productService from "../../services/productService";

const calling = () => alert("Funcionando");

function Home() {
  const { addItem } = useCartStore();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productService.getAll();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-0">
      <div className="flex justify-center px-8 mb-8">
        <label
          htmlFor="search"
          className="relative flex items-center cursor-text w-full max-w-md bg-white"
        >
          <Search size={16} className="absolute left-3 text-gray-400" />
          <input
            id="search"
            placeholder="Buscar producto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-sm outline-none border border-gray-200 focus:border-black transition-colors duration-200 bg-white"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-8">
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
