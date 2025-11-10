export async function GET() {
  const tickets = [
  {
    id: 't-1001',
    title: 'Cannot connect to VPN',
    description: 'User reports intermittent VPN connectivity errors.',
    priority: 'High',
    status: 'Open',
    assignee: 'Unassigned',
    updatedAt: '2025-10-31T14:05:00Z'
  },
  {
    id: 't-1002',
    title: 'Password reset request',
    description: 'User forgot password and cannot access email.',
    priority: 'Medium',
    status: 'In Progress',
    assignee: 'Sarah Chen',
    updatedAt: '2025-11-01T09:30:00Z'
  },
  {
    id: 't-1003',
    title: 'Printer not working',
    description: 'Office printer shows error code 49.',
    priority: 'Low',
    status: 'Open',
    assignee: 'Unassigned',
    updatedAt: '2025-11-02T11:15:00Z'
  },
  {
    id: 't-1004',
    title: 'Software installation failed',
    description: 'Cannot install required software on new machine.',
    priority: 'Critical',
    status: 'Open',
    assignee: 'Mike Johnson',
    updatedAt: '2025-11-03T08:45:00Z'
  },
  {
    id: 't-1005',
    title: 'Email not syncing',
    description: 'Outlook not syncing with server for 2 days.',
    priority: 'High',
    status: 'In Progress',
    assignee: 'Lisa Wang',
    updatedAt: '2025-11-04T13:20:00Z'
  },
  {
    id: 't-1006',
    title: 'Access to shared drive',
    description: 'Need permissions for marketing folder.',
    priority: 'Medium',
    status: 'On Hold',
    assignee: 'Tom Brown',
    updatedAt: '2025-11-05T10:00:00Z'
  },
  {
    id: 't-1007',
    title: 'Monitor flickering',
    description: 'Screen flickers intermittently.',
    priority: 'Low',
    status: 'Resolved',
    assignee: 'Sarah Chen',
    updatedAt: '2025-11-06T16:30:00Z'
  },
  {
    id: 't-1008',
    title: 'Database connection timeout',
    description: 'Production database timing out during peak hours.',
    priority: 'Critical',
    status: 'In Progress',
    assignee: 'Mike Johnson',
    updatedAt: '2025-11-07T07:15:00Z'
  },
  {
    id: 't-1009',
    title: 'Keyboard keys stuck',
    description: 'Several keys not responding properly.',
    priority: 'Low',
    status: 'Open',
    assignee: 'Unassigned',
    updatedAt: '2025-11-08T12:45:00Z'
  },
  {
    id: 't-1010',
    title: 'Wi-Fi dropping frequently',
    description: 'Connection drops every 10-15 minutes.',
    priority: 'Medium',
    status: 'Open',
    assignee: 'Lisa Wang',
    updatedAt: '2025-11-08T14:00:00Z'
  },
  {
    id: 't-1011',
    title: 'Cannot access payroll system',
    description: 'Login credentials not working.',
    priority: 'High',
    status: 'On Hold',
    assignee: 'Tom Brown',
    updatedAt: '2025-11-08T15:30:00Z'
  },
  {
    id: 't-1012',
    title: 'Laptop overheating',
    description: 'Device shutting down due to heat.',
    priority: 'Medium',
    status: 'In Progress',
    assignee: 'Sarah Chen',
    updatedAt: '2025-11-09T09:00:00Z'
  },
  {
    id: 't-1013',
    title: 'Phone system down',
    description: 'Unable to make or receive calls.',
    priority: 'Critical',
    status: 'Open',
    assignee: 'Mike Johnson',
    updatedAt: '2025-11-09T10:20:00Z'
  },
  {
    id: 't-1014',
    title: 'Software license expired',
    description: 'Need renewal for design software.',
    priority: 'High',
    status: 'Open',
    assignee: 'Unassigned',
    updatedAt: '2025-11-09T11:45:00Z'
  },
  {
    id: 't-1015',
    title: 'Mouse not responding',
    description: 'Wireless mouse connection issues.',
    priority: 'Low',
    status: 'Resolved',
    assignee: 'Lisa Wang',
    updatedAt: '2025-11-09T13:10:00Z'
  },
  {
    id: 't-1016',
    title: 'Slow computer performance',
    description: 'System running very slow, taking minutes to open apps.',
    priority: 'Medium',
    status: 'Open',
    assignee: 'Unassigned',
    updatedAt: '2025-11-09T14:25:00Z'
  }
];
  return Response.json(tickets);
}






