import React from 'react';
import Sidebar from './sidebar';

interface ActiveTripsProps {
  children: React.ReactNode;
}

const ActiveTrips: React.FC<ActiveTripsProps> = ({ children }) => {
  return (
    <div className="active-trips" style={{ display: 'flex' }}>
      <Sidebar />
      <main className="content" style={{ flex: 1, padding: '20px' }}>
        <h1 className="title" style={{ fontSize: '24px', marginBottom: '20px' }}>Active Trips</h1>
        {children}
      </main>
    </div>
  );
};

export default ActiveTrips;
