import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1e1e1e] text-white/70">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-heading text-2xl text-white mb-2">
                Maison Aurore
              </h3>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold mb-5">
                Fine Jewellery
              </p>
              <p className="font-body text-sm leading-loose text-white/50 max-w-xs">
                Heirloom-quality jewellery, hand-crafted by master goldsmiths
                for those who collect beauty with intention.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
                Collection
              </p>
              <ul className="space-y-3">
                {["Rings", "Necklaces", "Earrings", "Bracelets"].map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() =>
                        navigate(
                          `/products?category=${cat.toLowerCase()}`
                        )
                      }
                      className="font-body text-xs tracking-wide text-white/50 hover:text-gold transition-colors duration-300"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
                Information
              </p>
              <ul className="space-y-3">
                {[
                  "Our Story",
                  "Craftsmanship",
                  "Ethical Sourcing",
                  "Care Guide",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <span className="font-body text-xs tracking-wide text-white/50 hover:text-gold transition-colors duration-300 cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom strip */}
      <Container className="py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] tracking-wider uppercase text-white/30">
            © {new Date().getFullYear()} Maison Aurore. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <span
                key={item}
                className="font-body text-[10px] tracking-wider uppercase text-white/30 hover:text-gold transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;