import { Button } from "../../components/atoms/Button";
import { PriceTag } from "../../components/atoms/PriceTag";
import { StarRating } from "../../components/atoms/StarRating";
import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";

const calling = () => alert("Funcionando");

export function Home() {
  return (
    <div className="flex items-center gap-2">
      <ProductCard product={mockProducts[0]}></ProductCard>
      <ProductCard product={mockProducts[1]}></ProductCard>
      <ProductCard product={mockProducts[2]}></ProductCard>
    </div>
  );
}
