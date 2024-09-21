<template>
    <div class="active-trips">
      <Sidebar />
      <main class="content">
        <h1 class="title">Active Trips</h1>
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  import Sidebar from './SideBar.vue'
  
  export default {
    name: 'ActiveTrips',
    components: {
      Sidebar
    }
  }
  </script>
  
  <style scoped>
  .active-trips {
    display: flex;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>