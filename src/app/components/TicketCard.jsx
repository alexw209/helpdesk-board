'use client';

export default function TicketCard({ticket, isQueued, onAddToQueue}) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm text-black">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{ticket.title}</h3>
        <span className="text-xs text-gray-500">#{ticket.id}</span>
      </div>
      
      <p className="text-sm text-gray-700 mb-3">{ticket.description}</p>
      
      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <div><span className="font-medium">Priority:</span> {ticket.priority}</div>
        <div><span className="font-medium">Status:</span> {ticket.status}</div>
        <div><span className="font-medium">Assignee:</span> {ticket.assignee}</div>
        <div className="text-gray-600">
          <span className="font-medium">Updated:</span> {new Date(ticket.updatedAt).toLocaleString()}
        </div>
      </div>
      
      <button
        onClick={onAddToQueue}
        disabled={isQueued}
        className={`px-3 py-2 rounded text-sm font-medium border w-full ${
          isQueued ? 'bg-gray-100 text-gray-400' : 'bg-black text-white hover:opacity-90'
        }`}
      >
        {isQueued ? 'In My Queue' : 'Add to My Queue'}
      </button>
    </div>
  );
}