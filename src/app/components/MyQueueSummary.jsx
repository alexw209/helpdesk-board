'use client';

export default function MyQueueSummary({tickets, queue, onRemove, onClear, count}) {
  const queuedIds = Object.keys(queue);
  const queuedTickets = tickets.filter(t => queue[t.id]);

  return (
    <div className="border rounded-lg p-3 bg-white text-black">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">My Queue</h4>
        <span className="text-sm text-gray-600">{count} selected</span>
      </div>

      {queuedIds.length === 0 ? (
        <p className="text-sm text-gray-500 mt-2">No tickets queued.</p>
      ) : (
        <ul className="mt-2 space-y-2 max-h-40 overflow-auto pr-1">
          {queuedTickets.map(t => (
            <li key={t.id} className="flex items-start justify-between gap-2">
              <div className="text-sm">
                <span className="font-medium">{t.title}</span>
                <span className="text-gray-500"> — {t.id}</span>
              </div>
              <button
                onClick={() => onRemove(t.id)}
                className="text-xs px-2 py-1 border rounded hover:bg-gray-50"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3">
        <button
          onClick={onClear}
          disabled={queuedIds.length === 0}
          className={`text-sm px-3 py-2 rounded border
            ${queuedIds.length === 0 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'bg-black text-white hover:opacity-90'}
          `}
        >
          Clear Queue
        </button>
      </div>
    </div>
  );
}
