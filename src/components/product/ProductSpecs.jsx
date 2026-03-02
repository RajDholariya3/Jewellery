const SPEC_LABELS = {
  material: "Material",
  stone: "Stone",
  weight: "Weight",
  craftsmanshipNote: "Craftsmanship",
};

const ProductSpecs = ({ specs }) => (
  <div className="mt-8 border-t border-softGrey/30 pt-8">
    <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold mb-6">
      Specifications
    </p>
    <dl className="space-y-5">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="grid grid-cols-[130px_1fr] gap-4 items-start">
          <dt className="font-body text-[10px] tracking-[0.2em] uppercase text-softGrey pt-0.5">
            {SPEC_LABELS[key] || key}
          </dt>
          <dd className="font-body text-sm text-[#3a3a3a] leading-relaxed">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export default ProductSpecs;