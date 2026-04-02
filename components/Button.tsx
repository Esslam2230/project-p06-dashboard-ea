type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export default function Button({ type = "button", children }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-teal-500 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-teal-600 transition-colors shadow-lg"
    >
      {children}
    </button>
  );
}
