<template>
    <router-link to="/start-trip" class="trip-plan-button">
      <span class="icon">🗺️</span>
      <span class="sr-only">Plan a Trip</span>
    </router-link>
  </template>
  
  <script>
  export default {
    name: 'TripPlanButton'
  }
  </script>
  
  <style scoped>
  .trip-plan-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #4CAF50;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .trip-plan-button:hover {
    background-color: #45a049;
    transform: scale(1.1);
  }
  
  .icon {
    font-size: 24px;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  </style>