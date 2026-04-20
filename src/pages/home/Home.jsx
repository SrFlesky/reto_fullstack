import { Button } from "../../components/atoms/Button";
import { PriceTag } from "../../components/atoms/PriceTag";
import { StarRating } from "../../components/atoms/StarRating";
import { ProductCard } from "../../components/molecules/ProductCard";
import { CartDrawer } from "../../components/organisms/CartDrawer";
import { mockProducts } from "../../mockdata/products";

const calling = () => alert("Funcionando");

function Home({onAddProduct}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {mockProducts.map(product => (
          <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={onAddProduct}>
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
