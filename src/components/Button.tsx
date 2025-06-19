interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
}

export const Button = ({ variant = "primary", children }: ButtonProps) => {
  let className =
    "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  // Estilo outline
  if (variant === "outline") {
    className =
      "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50";
  } else if (variant === "destructive") {
    className =
      "rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  }

  let hola = "hola"

  // Estilo primario (por defecto)
  return (
    <button type="button" className={className}>
      {children + " " + hola}
    </button>
  );
};