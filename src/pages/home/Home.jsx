import { Button } from "../../components/atoms/Button";
import { PriceTag } from "../../components/atoms/PriceTag";
import { StarRating } from "../../components/atoms/StarRating";
import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";

const calling = () => alert("Funcionando");
const mockTest = () => alert(mockProducts[0]);

export function Home() {
  return (
    <>
      {/* <div className="text-red-800">HOla prueba</div> */}
      {/* <Button text="Prueba" onClick={calling}></Button>
      <PriceTag price={200.05}></PriceTag>
      <StarRating rate={2} count={120} /> */}
      {mockTest}
      <ProductCard product={mockProducts[0]}></ProductCard>
    </>
  );
}
