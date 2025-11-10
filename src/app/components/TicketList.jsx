'use client';

import TicketCard from './TicketCard';

export default function TicketList({tickets, queue, onAddToQueue}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {tickets.map((t) => (
        <TicketCard
          key={t.id}
          ticket={t}
          isQueued={!!queue[t.id]}
          onAddToQueue={() => onAddToQueue(t.id)}
        />
      ))}
    </div>
  );
}
