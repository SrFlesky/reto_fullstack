export function PriceTag({ price }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return <p>{formattedPrice}</p>;
}
