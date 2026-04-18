import { Button } from "../atoms/Button";
import { PriceTag } from "../atoms/PriceTag";
import { StarRating } from "../atoms/StarRating";

export function ProductCard({ product }) {
  const { title, price, category, image, rating } = product;
  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 flex items-center justify-center h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className=" h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <StarRating rate={rating.rate} count={rating.count} />
        <PriceTag price={price} />
      </div>

      <Button>+ Add to Cart</Button>
    </div>
  );
}
