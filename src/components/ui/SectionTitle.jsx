import useScrollFade from "../../hooks/useScrollFade";

const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }) => {
  const [ref, isVisible] = useScrollFade();
  const isCenter = align === "center";

  return (
    <div
      ref={ref}
      className={`mb-14 transition-all duration-700 ${
        isCenter ? "text-center" : "text-left"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {eyebrow && (
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-4xl md:text-5xl text-[#2a2a2a] leading-tight mb-5">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-body text-sm text-softGrey leading-loose ${
            isCenter ? "max-w-lg mx-auto" : "max-w-lg"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative rule */}
      <div className={`flex items-center gap-2 mt-6 ${isCenter ? "justify-center" : ""}`}>
        <span className="block w-10 h-px bg-gold" />
        <span className="block w-1.5 h-1.5 bg-gold rotate-45" />
        <span className="block w-10 h-px bg-gold" />
      </div>
    </div>
  );
};

export default SectionTitle;