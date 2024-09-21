<template>
    <div class="trip-planning">
      <SideBar />
      <main class="content">
        <h2>Trip Planning Guides</h2>
        <ul>
          <li v-for="guide in guides" :key="guide.id">
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.description }}</p>
          </li>
        </ul>
      </main>
    </div>
  </template>
  
  <script>
  import SideBar from './SideBar.vue';
  
  export default {
    name: 'TripPlanning',
    components: {
      SideBar
    },
    data() {
      return {
        guides: [
          { id: 1, title: 'Choosing Your Destination', description: 'Tips for selecting the perfect travel spot.' },
          { id: 2, title: 'Budgeting for Your Trip', description: 'How to plan and manage your travel expenses.' },
          { id: 3, title: 'Packing Essentials', description: 'A comprehensive list of must-pack items for any journey.' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .trip-planning {
    display: flex;
    height: 100vh;
  }
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
  }
  </style>