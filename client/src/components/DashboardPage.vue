<template>
  <div class="dashboard">
    <SideBar />
    <main class="content">
      <h1>From the community</h1>
      <p>Select an option from the sidebar to get started.</p>
      <TripPlanButton />
    </main>
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import TripPlanButton from './TripPlanButton.vue';

export default {
  name: 'DashboardPage',
  components: {
    SideBar,
    TripPlanButton
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
