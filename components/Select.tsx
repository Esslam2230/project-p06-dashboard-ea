type SelectProps = {
  id: string;
  name: string;
  options: { value: number; label: string }[];
};

export default function Select({ id, name, options }: SelectProps) {
  return (
    <select
      id={id}
      name={name}
      className="border border-teal-400 bg-white/10 text-white rounded-3xl p-3 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-md"
    >
      <option value="">-- Kies een land --</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="text-black">
          {opt.label}
        </option>
      ))}
    </select>
  );
}
