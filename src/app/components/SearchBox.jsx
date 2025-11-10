'use client';

export default function SearchBox({value, onChange}) {
  return (
    <label className="flex flex-col md:col-span-2 text-black">
      <span className="text-sm font-medium mb-1">Search</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or description…"
        className="border rounded-lg px-3 py-2"
      />
    </label>
  );
}
