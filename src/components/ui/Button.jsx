const variants = {
  primary: "bg-gold text-white border border-gold hover:bg-[#b8942e] hover:border-[#b8942e]",
  outline: "bg-transparent text-gold border border-gold hover:bg-gold hover:text-white",
  dark: "bg-[#2a2a2a] text-primaryBg border border-[#2a2a2a] hover:bg-[#3a3a3a]",
  ghost: "bg-transparent text-[#2a2a2a] border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-primaryBg",
};

const sizes = {
  sm: "text-[10px] px-5 py-2",
  md: "text-xs px-7 py-3",
  lg: "text-xs px-10 py-4",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => (
  <button
    onClick={onClick}
    className={`
      inline-flex items-center justify-center
      font-body tracking-[0.25em] uppercase
      transition-all duration-300 focus:outline-none
      ${variants[variant]} ${sizes[size]} ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;