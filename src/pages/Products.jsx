import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/layout/Container";
import ProductGrid from "../components/product/ProductGrid";
import products from "../data/products";

const CATEGORIES = ["all", "rings", "necklaces", "earrings", "bracelets"];

const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "name-asc", label: "Name: A → Z" },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("default");

  /* Sync category from URL on load */
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && CATEGORIES.includes(cat)) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    cat === "all" ? setSearchParams({}) : setSearchParams({ category: cat });
  };

  const displayed = useMemo(() => {
    let list =
      activeCategory === "all"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, sort]);

  return (
    <div className="bg-primaryBg min-h-screen">
      {/* Page header */}
      <div className="bg-[#1e1e1e] pt-32 pb-16">
        <Container>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-3 text-center">
            Maison Aurore
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-primaryBg text-center">
            The Collection
          </h1>
        </Container>
      </div>

      <Container className="py-14">
        {/* Filter + Sort bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-softGrey/30 pb-8 mb-12">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`font-body text-[10px] tracking-[0.25em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-white"
                    : "text-softGrey border border-softGrey/30 hover:border-gold hover:text-gold"
                }`}
              >
                {cat === "all" ? "All Pieces" : cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-softGrey">
              Sort
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-body text-xs bg-transparent border border-softGrey/40 text-[#3a3a3a] px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Count */}
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-softGrey mb-10">
          {displayed.length} {displayed.length === 1 ? "piece" : "pieces"} found
        </p>

        {/* Grid */}
        {displayed.length > 0 ? (
          <ProductGrid products={displayed} />
        ) : (
          <div className="text-center py-24">
            <p className="font-heading text-3xl text-softGrey mb-3">
              No pieces found.
            </p>
            <p className="font-body text-xs text-softGrey/60 tracking-wide">
              Try a different category filter.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;