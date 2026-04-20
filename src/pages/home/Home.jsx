import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";
import useCartStore from "../../store/cartStore";

const calling = () => alert("Funcionando");

function Home() {

  const { addItem } = useCartStore()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {mockProducts.map(product => (
          <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={addItem}>
          </ProductCard>
        ))}
        
        {/* <ProductCard
          product={mockProducts[0]}
          onAddToCart={onAddProduct}
        ></ProductCard> */}
      </div>
    </>
  );
}

export default Home;
