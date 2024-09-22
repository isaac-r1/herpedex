import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import Select from 'react-select';
import Papa from 'papaparse';
import styles from '../styles/StartTrip.module.css';

interface County {
  county_full: string;
  state_id: string;
  fullLabel: string;
}

const StartTrip: React.FC = () => {
  // State management in React
  const [tripName, setTripName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [selectedCounties, setSelectedCounties] = useState<County[]>([]);
  const [counties, setCounties] = useState<County[]>([]);

  // Load CSV data on component mount
  useEffect(() => {
    loadCSVData();
  }, []);

  const loadCSVData = () => {
    fetch('/uscounties.csv')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedCounties: County[] = results.data.map((item: any) => ({
              county_full: item.county_full,
              state_id: item.state_id,
              fullLabel: `${item.county_full}, ${item.state_id}`,
            }));
            setCounties(parsedCounties);
          },
          error: (error: Error) => {
            console.error('Error parsing CSV file:', error);
          }
        });
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  };

  const createTrip = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trip created:', {
      name: tripName,
      startDate: startDate,
      counties: selectedCounties
    });
    // Send data to backend or perform further actions
  };

  return (
    <div className={styles.body}>
      <Sidebar />
      <main className={styles.container}>
        <h2 className={styles.h2}>Start a New Trip</h2>
        <form onSubmit={createTrip} className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="tripName" className={styles.label}>Trip Name:</label>
            <input
              type="text"
              id="tripName"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="startDate" className={styles.label}>Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="counties" className={styles.label}>Select Counties:</label>
            <Select
              isMulti
              options={counties}
              getOptionLabel={(option: County) => option.fullLabel}
              getOptionValue={(option: County) => option.county_full}
              onChange={(selectedOptions) => setSelectedCounties(selectedOptions as County[])}
              placeholder="Select counties"
              className={styles.select}
              classNamePrefix="react-select"
            />
          </div>
          <button type="submit" className={styles.button}>Create Trip</button>
        </form>
      </main>
    </div>
  );
};

export default StartTrip;
