import { Button } from "../../components/atoms/Button";
import { PriceTag } from "../../components/atoms/PriceTag";
import { StarRating } from "../../components/atoms/StarRating";
import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";

const calling = () => alert("Funcionando");

export function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      <ProductCard product={mockProducts[0]}></ProductCard>
      <ProductCard product={mockProducts[1]}></ProductCard>
      <ProductCard product={mockProducts[2]}></ProductCard>
      <ProductCard product={mockProducts[3]}></ProductCard>
    </div>
  );
}
