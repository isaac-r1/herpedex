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
    width: 200px;
    background-color: #f4f4f4;
    padding: 20px;
  }
  
  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #333;
  }
  </style>