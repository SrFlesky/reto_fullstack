import { Star, StarHalf } from "lucide-react";

const colors = {
  orange: "#F2C265",
  grey: "#a9a9a9",
};

export function StarRating({ rate, count }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rate))
          return (
            <Star
              key={star}
              size={14}
              fill={colors.orange}
              color={colors.orange}
            />
          );

        if (star === Math.ceil(rate))
          return (
            <StarHalf
              key={star}
              size={14}
              fill={colors.orange}
              color={colors.orange}
            />
          );

        return (
          <Star key={star} size={14} fill={colors.grey} color={colors.grey} />
        );
      })}
      <span>({count})</span>
    </div>
  );
}
