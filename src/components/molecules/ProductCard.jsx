import { Button } from "../atoms/Button";
import { PriceTag } from "../atoms/PriceTag";
import { StarRating } from "../atoms/StarRating";

export function ProductCard({ product }) {
  const { title, price, category, image, rating } = product;
  return (
    <div>
      <div>
        <img src={image} alt={title} />
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
