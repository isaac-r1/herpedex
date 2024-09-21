<template>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/dashboard">Community</router-link></li>
          <li><router-link to="/herpedex">The Herpedex</router-link></li>
          <li><router-link to="/trip-planning">Trip planning</router-link></li>
          <li><router-link to="/account">Account</router-link></li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px; /* Increased width for better visibility */
    background-color: #417b4d; /* Darker background color */
    padding: 30px 20px; /* Increased padding */
    height: 100vh; /* Full height */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    margin-bottom: 20px; /* Increased spacing between items */
  }

  .sidebar a {
    text-decoration: none;
    color: #ecf0f1; /* Light text color for contrast */
    font-size: 18px; /* Larger font size */
    font-weight: 500; /* Slightly bolder font */
    transition: color 0.3s ease; /* Smooth color transition on hover */
    display: block; /* Make the entire area clickable */
    padding: 10px 15px; /* Add padding to links */
    border-radius: 5px; /* Rounded corners for hover effect */
  }

  .sidebar a:hover {
    color: #ccfccb; /* Bright color on hover */
    background-color: rgba(255, 255, 255, 0.1); /* Subtle background on hover */
  }

  /* Active link styles */
  .sidebar a.router-link-active {
    color: #ccfccb; /* Highlight active link */
    font-weight: 700; /* Make active link bolder */
  }
  </style>