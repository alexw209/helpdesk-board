'use client';

const OPTIONS = ['All', 'Low', 'Medium', 'High', 'Critical'];

export default function PriorityFilter({ value, onChange }) {
  return (
    <label className="flex flex-col text-black">
      <span className="text-sm font-medium mb-1">Priority</span>
      <select
        className="border rounded-lg px-3 py-2 bg-white text-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {OPTIONS.map(opt => (
          <option key={opt} value={opt} className="text-black">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
