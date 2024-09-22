import React from 'react';
import Sidebar from './sidebar';
import styles from '../styles/Dashboard.module.css' // Import CSS module

function App() {
  return (
    <div className={styles.container}>
      {/* Sidebar component */}
      <Sidebar />

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1>Welcome to the Dashboard</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
}

export default App;
