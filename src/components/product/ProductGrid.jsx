import ProductCard from "../ui/ProductCard";
import useScrollFade from "../../hooks/useScrollFade";

const ProductGrid = ({ products }) => {
  const [ref, isVisible] = useScrollFade(0.05);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;