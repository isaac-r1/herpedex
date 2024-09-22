<template>
    <div class="account">
      <Sidebar />
      <main class="content">
        <h1>Account Page</h1>
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  import Sidebar from './SideBar.vue'
  
  export default {
    name: 'AccountPage',
    components: {
      Sidebar
    }
  }
  </script>
  
  <style scoped>
  .account {
    display: flex;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>