<template>
    <div class="start-trip">
      <Sidebar />
      <main class="content">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  import Sidebar from './SideBar.vue'
  
  export default {
    name: 'StartTrip',
    components: {
      Sidebar
    }
  }
  </script>
  
  <style scoped>
  .start-trip {
    display: flex;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>