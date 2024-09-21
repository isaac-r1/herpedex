<template>
    <div class="herpedex">
      <Sidebar />
      <main class="content">
        <h1 class="title">The Herpedex</h1>
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
  .herpedex {
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