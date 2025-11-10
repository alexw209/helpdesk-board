'use client';

export default function StatusMessage({loading, error, isEmpty}) {
  if (loading) {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
        Loading…
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
        Unable to load tickets.
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
        No tickets match your filters.
      </div>
    );
  }
  return null;
}
