const variantClasses = {
  primary:
    "bg-black text-white border hover:border[#E8540A] hover:bg-[#E8540A] hover:text-white",
  outline:
    "bg-white text-black border border-black hover:bg-black hover:text-white",
  ghost:
    "bg-transparent text-black border border-transparent hover:border-black",
};

const sizeClasses = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-sm",
};

export function Button({
  text,
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  variant = "primary" | null,
  size = "md",
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      varian={variant}
      size={size}
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        uppercase tracking-widest font-medium
        transition-all duration-300 cursor-pointer`}
    >
      {children}
    </button>
  );
}
