import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import useScrollFade from "../../hooks/useScrollFade";

const FeaturedCard = ({ product, index }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useScrollFade(0.1);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Image — taller 4:5 aspect for featured feel */}
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          style={{ transformOrigin: "center" }}
          
        />

        {/* Dark gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/75 via-[#111]/10 to-transparent" />

        {/* Category */}
        <span className="absolute top-4 left-4 font-body text-[9px] tracking-[0.3em] uppercase bg-gold text-white px-2.5 py-1">
          {product.category}
        </span>

        {/* Bottom content on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading text-xl text-white leading-snug mb-1">
            {product.name}
          </h3>
          <p className="font-body text-[11px] text-white/60 leading-relaxed mb-3 line-clamp-1">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-heading text-base text-gold">
              {formatCurrency(product.price)}
            </span>
            <span className="font-body text-[9px] tracking-[0.25em] uppercase text-white border border-white/40 px-3 py-1.5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
              View
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const FeaturedProducts = ({ products }) => {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {featured.map((product, i) => (
        <FeaturedCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
};

export default FeaturedProducts;