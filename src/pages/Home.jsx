import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import FeaturedProducts from "../components/product/FeaturedProducts";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import products from "../data/products";
import useScrollFade from "../hooks/useScrollFade";

/* ─────────────────────────── sub-components ──────────────────────────── */

const Ornament = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <span className="block w-14 h-px bg-gold/40" />
    <span className="block w-1.5 h-1.5 bg-gold rotate-45" />
    <span className="block w-14 h-px bg-gold/40" />
  </div>
);

const BrandStory = () => {
  const [ref, isVisible] = useScrollFade();
  return (
    <section className="py-24 bg-[#1e1e1e]">
      <Container>
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Our Philosophy
          </p>
          <Ornament />
          <h2 className="font-heading text-4xl md:text-5xl text-primaryBg leading-tight mt-6 mb-7">
            We make jewellery for the{" "}
            <em className="text-gold">quietly extraordinary.</em>
          </h2>
          <p className="font-body text-white/50 text-sm leading-loose mb-5">
            Maison Aurore was founded on a single belief: the most enduring
            jewellery says nothing loudly, but everything precisely. We work
            with a handful of master goldsmiths — each a specialist in their
            form — to produce pieces that hold their value for generations, not
            just seasons.
          </p>
          <p className="font-body text-white/30 text-xs leading-relaxed">
            Every stone is ethically sourced. Every piece is hand-signed by its
            maker. Every order ships in handmade packaging.
          </p>
          <Ornament />
        </div>
      </Container>
    </section>
  );
};

const CategoryBanners = () => {
  const navigate = useNavigate();
  const categories = [
    {
      label: "Rings",
      sub: "From solitaires to stacks",
      img: "/jew1.jpg",
    },
    {
      label: "Necklaces",
      sub: "Pendants, chains & layering",
      img: "/jew2.jpg",
    },
    {
      label: "Earrings",
      sub: "Studs, drops & ear cuffs",
      img: "/jew3.jpg",
    },
    {
      label: "Bracelets",
      sub: "Bangles, tennis & cuffs",
      img: "/jew4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <Container>
        <SectionTitle
          eyebrow="Browse by Category"
          title="What are you looking for?"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(({ label, sub, img }) => (
            <div
              key={label}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
              onClick={() =>
                navigate(`/products?category=${label.toLowerCase()}`)
              }
            >
              <img
                src={img}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                
              />
              <div className="absolute inset-0 bg-[#111]/40 group-hover:bg-[#111]/55 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-1">
                  {label}
                </h3>
                <p className="font-body text-[10px] tracking-wide uppercase text-white/60 mb-5">
                  {sub}
                </p>
                <span className="font-body text-[9px] tracking-[0.25em] uppercase border border-white/50 text-white px-4 py-1.5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const TrustRow = () => {
  const items = [
    { icon: "✦", label: "Ethically Sourced", sub: "Conflict-free stones" },
    { icon: "◈", label: "Hand Finished", sub: "Never machine produced" },
    { icon: "◇", label: "Signed by Maker", sub: "Artisan accountability" },
    { icon: "⬡", label: "Lifetime Guarantee", sub: "Craftsmanship promise" },
  ];
  return (
    <section className="py-14 bg-primaryBg border-t border-softGrey/30">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map(({ icon, label, sub }) => (
            <div key={label}>
              <span className="block text-gold text-xl mb-2">{icon}</span>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#2a2a2a] mb-1">
                {label}
              </p>
              <p className="font-body text-[10px] text-softGrey">{sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────── main ──────────────────────────────────── */

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primaryBg">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="/home.jpg"
            alt="Luxury jewellery hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-[#0a0a0a]/55 to-[#0a0a0a]/10" />
        </div>

        {/* Content */}
        <Container className="relative z-10 pt-20">
          <div className="max-w-lg">
            <p
              className="font-body text-[10px] tracking-[0.5em] uppercase text-gold mb-6"
              style={{ animation: "fadeUp 0.8s ease both" }}
            >
              Fine Jewellery — Est. 2010
            </p>
            <h1
              className="font-heading text-6xl sm:text-7xl lg:text-8xl text-primaryBg leading-[0.95] mb-6"
              style={{ animation: "fadeUp 0.9s 0.12s ease both" }}
            >
              Maison
              <br />
              <em className="text-gold">Aurore</em>
            </h1>
            <p
              className="font-body text-sm text-white/60 leading-loose mb-10 max-w-xs"
              style={{ animation: "fadeUp 0.9s 0.24s ease both" }}
            >
              Handcrafted gold and gemstone jewellery for the moments worth
              remembering — and the ones worn every day.
            </p>
            <div style={{ animation: "fadeUp 0.9s 0.36s ease both" }}>
              <Button size="lg" onClick={() => navigate("/products")}>
                Explore the Collection
              </Button>
            </div>
          </div>
        </Container>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="font-body text-[9px] tracking-[0.35em] uppercase text-white/50">
            Scroll
          </span>
          <span className="block w-px h-8 bg-gold/60" />
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="py-24 bg-primaryBg">
        <Container>
          <SectionTitle
            eyebrow="Curated Selection"
            title="Featured Pieces"
            subtitle="Hand-selected from our current collection — rare stones, exceptional craft, singular character."
          />
          <FeaturedProducts products={products} />
          <div className="text-center mt-14">
            <Button variant="outline" size="lg" onClick={() => navigate("/products")}>
              View All Pieces
            </Button>
          </div>
        </Container>
      </section>

      {/* ── BRAND STORY ── */}
      <BrandStory />

      {/* ── CATEGORIES ── */}
      <CategoryBanners />

      {/* ── QUOTE ── */}
      <section className="py-20 bg-[#1e1e1e]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Ornament />
            <blockquote className="font-heading text-3xl md:text-4xl text-primaryBg leading-snug italic my-8">
              "A piece of jewellery is often the biography of a life — held in
              gold."
            </blockquote>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold">
              — Maison Aurore Atelier
            </p>
            <Ornament />
          </div>
        </Container>
      </section>

      {/* ── TRUST ── */}
      <TrustRow />

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;