import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Collection", to: "/products" },
  { label: "Rings", to: "/products?category=rings" },
  { label: "Necklaces", to: "/products?category=necklaces" },
  { label: "Earrings", to: "/products?category=earrings" },
  { label: "Bracelets", to: "/products?category=bracelets" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primaryBg/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex flex-col items-start leading-none focus:outline-none"
            >
              <span className="font-heading text-xl md:text-2xl text-[#2a2a2a] tracking-wide">
                Maison Aurore
              </span>
              <span className="font-body text-[9px] tracking-[0.35em] uppercase text-gold">
                Fine Jewellery
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  className="font-body text-xs tracking-[0.2em] uppercase text-[#3a3a3a] hover:text-gold transition-colors duration-300 relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </NavLink>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/products")}
                className="hidden md:block font-body text-xs tracking-[0.25em] uppercase border border-gold text-gold px-5 py-2 hover:bg-gold hover:text-white transition-all duration-300"
              >
                Shop Now
              </button>

              {/* Mobile burger */}
              <button
                className="lg:hidden flex flex-col gap-1.5 p-1 focus:outline-none"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-px bg-[#2a2a2a] transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-px bg-[#2a2a2a] transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-px bg-[#2a2a2a] transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primaryBg flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {[{ label: "Home", to: "/" }, ...NAV_LINKS].map(({ label, to }, i) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`font-heading text-3xl text-[#2a2a2a] hover:text-gold transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;