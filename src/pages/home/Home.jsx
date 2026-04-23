import { ProductCard } from "../../components/molecules/ProductCard";
import { mockProducts } from "../../mockdata/products";
import useCartStore from "../../store/cartStore";

const calling = () => alert("Funcionando");

function Home() {
  return (
    <>
      {/* Hero */}
      <div>
        <div>
          <span>Nueva colección</span>
          <h1>Fall - Winter Collections 2025</h1>
          <p>
            Una tienda de moda y accesorios creada como proyecto final del curso
            FullStack.
          </p>
          <button>Shop now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
