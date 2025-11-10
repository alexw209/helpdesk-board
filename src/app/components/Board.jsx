'use client';

// Import Components
import {useEffect, useState} from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import StatusMessage from './StatusMessage';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

// Fetch Tickets
  useEffect(() => {
    async function getTickets() {
      setLoading(true);
      setError('');
      
      try {
        const response = await fetch('/api/tickets');
        
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        
        setTickets(data);
      } catch (err) {
        setError('Unable to load tickets.');
      } finally {
        setLoading(false);
      }
    }
    
    getTickets();
  }, []);

// Derive visible tickets
  const q = search.toLowerCase();
  const visibleTickets = tickets.filter(t => {
    const statusOk = filters.status === 'All' || t.status === filters.status;
    const priorityOk = filters.priority === 'All' || t.priority === filters.priority;
    const textOk = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
    return statusOk && priorityOk && textOk;
  });

  const handleAddToQueue = (ticketId) => {
    setQueue(q => ({ ...q, [ticketId]: true }));
  };

  const handleRemoveFromQueue = (ticketId) => {
    setQueue(q => {
      const clone = { ...q };
      delete clone[ticketId];
      return clone;
    });
  };

  const handleClearQueue = () => setQueue({});

  const handleStatusChange = (value) => {
    setFilters(f => ({ ...f, status: value }));
  };

  const handlePriorityChange = (value) => {
    setFilters(f => ({ ...f, priority: value }));
  };

  const handleSearchChange = (value) => setSearch(value);

  return (
    <div className="space-y-6">
      {/*Filters Section*/}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatusFilter value={filters.status} onChange={handleStatusChange} />
          <PriorityFilter value={filters.priority} onChange={handlePriorityChange} />
          <SearchBox value={search} onChange={handleSearchChange} />
        </div>
      </div>

      {/*Queue Summary*/}
      <MyQueueSummary
        queue={queue}
        tickets={tickets}
        onRemove={handleRemoveFromQueue}
        onClear={handleClearQueue}
      />

      {/*Status Messages*/}
      <StatusMessage
        loading={loading}
        error={error}
        isEmpty={!loading && !error && visibleTickets.length === 0}
      />

      {/*Ticket List*/}
      {!loading && !error && visibleTickets.length > 0 && (
        <TicketList
          tickets={visibleTickets}
          onAddToQueue={handleAddToQueue}
          queue={queue}
        />
      )}
    </div>
  );
}