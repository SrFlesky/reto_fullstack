import { Button } from "../atoms/Button";
import { PriceTag } from "../atoms/PriceTag";
import { StarRating } from "../atoms/StarRating";

export function ProductCard({ product }) {
  const { title, price, category, image, rating } = product;
  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 flex items-center justify-center h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full object-contain p-4 sm:p-5 md:p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div>
        <span>{category}</span>
        <h3 className="line-clamp-1">{title}</h3>
        <StarRating rate={rating.rate} count={rating.count} />
        <PriceTag price={price} />
      </div>
      <div className="block lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300">
        <Button>
          <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm">
            + Add to Cart
          </span>
        </Button>
      </div>
    </div>
  );
}
