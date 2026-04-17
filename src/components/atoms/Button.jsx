export function Button({
  text,
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      className="px-6 py-2.5 text-sm bg-black text-white border border-black hover:bg-white hover:text-black"
    >
      {text}
    </button>
  );
}
