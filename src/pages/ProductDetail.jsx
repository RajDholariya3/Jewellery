import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import ProductSpecs from "../components/product/ProductSpecs";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";
import products from "../data/products";
import { formatCurrency } from "../utils/formatCurrency";

/* ── Invalid ID state ─────────────────────────────────────────────────── */
const ProductNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primaryBg min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-md">
        <p className="font-heading text-[7rem] leading-none text-gold/10 select-none mb-0">
          ?
        </p>
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
          Piece Not Found
        </p>
        <h1 className="font-heading text-4xl text-[#2a2a2a] mb-5 leading-tight">
          This product doesn't exist or may have sold.
        </h1>
        <p className="font-body text-sm text-softGrey leading-loose mb-10">
          The product link may be incorrect or this piece is no longer part of
          our collection. Let us guide you to something exceptional.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={() => navigate("/products")}>
            Return to Collection
          </Button>
          <Button variant="ghost" size="lg" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ── Main detail page ─────────────────────────────────────────────────── */
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <ProductNotFound />;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-primaryBg min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-softGrey/30 pt-20">
        <Container className="py-4">
          <nav className="flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-softGrey">
            <button
              onClick={() => navigate("/")}
              className="hover:text-gold transition-colors duration-300"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate("/products")}
              className="hover:text-gold transition-colors duration-300"
            >
              Collection
            </button>
            <span>/</span>
            <button
              onClick={() =>
                navigate(`/products?category=${product.category}`)
              }
              className="hover:text-gold transition-colors duration-300"
            >
              {product.category}
            </button>
            <span>/</span>
            <span className="text-[#2a2a2a]">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Detail layout */}
      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
          {/* LEFT — Image */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="aspect-square bg-cream overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 font-body text-[9px] tracking-[0.3em] uppercase bg-gold text-white px-3 py-1">
                {product.category}
              </span>
            </div>
          </div>

          {/* RIGHT — Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <h1 className="font-heading text-4xl md:text-5xl text-[#2a2a2a] leading-tight mb-3">
              {product.name}
            </h1>
            <p className="font-heading text-2xl text-gold mb-6">
              {formatCurrency(product.price)}
            </p>

            {/* Short description — styled pull quote */}
            <p className="font-body text-sm text-softGrey italic border-l-2 border-gold/50 pl-4 mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Full description */}
            <div className="border-t border-softGrey/25 pt-8 mb-2">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold mb-4">
                About This Piece
              </p>
              <p className="font-body text-sm text-[#3a3a3a] leading-loose">
                {product.fullDescription}
              </p>
            </div>

            {/* Specs */}
            <ProductSpecs specs={product.specs} />

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                Enquire About This Piece
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate("/products")}
              >
                Back to Collection
              </Button>
            </div>

            {/* Trust icons */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-softGrey/20 pt-8">
              {[
                { icon: "✦", text: "Ethically Sourced" },
                { icon: "◈", text: "Hand Finished" },
                { icon: "◇", text: "Signed by Artisan" },
              ].map(({ icon, text }) => (
                <div key={text} className="text-center">
                  <span className="block text-gold text-base mb-1">{icon}</span>
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-softGrey">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related pieces */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-softGrey/25 pt-16">
            <div className="mb-12 text-center">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-heading text-3xl text-[#2a2a2a]">
                More from {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetail;