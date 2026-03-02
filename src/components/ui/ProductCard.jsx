import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <article
      className="group cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Image block */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 font-body text-[9px] tracking-[0.3em] uppercase bg-primaryBg/90 text-gold px-2.5 py-1">
          {product.category}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#1e1e1e]/0 group-hover:bg-[#1e1e1e]/20 transition-all duration-500" />

        {/* Slide-up CTA */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out bg-gold py-3 text-center">
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-white">
            View Details
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4">
        <h3 className="font-heading text-lg text-[#2a2a2a] leading-snug group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-body text-xs text-softGrey mt-1.5 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="font-heading text-base text-gold mt-3">
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;