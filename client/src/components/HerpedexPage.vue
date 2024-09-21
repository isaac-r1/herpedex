<template>
    <div class="herpedex">
      <Sidebar />
      <main class="content">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  import Sidebar from './SideBar.vue'
  
  export default {
    name: 'HerpedexPage',
    components: {
      Sidebar
    }
  }
  </script>
  
  <style scoped>
  .herpedx {
    display: flex;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>