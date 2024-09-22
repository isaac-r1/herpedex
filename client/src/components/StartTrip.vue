<template>
    <div class="start-trip">
      <Sidebar />
      <main class="content">
        <h2>Start a New Trip</h2>
        <form @submit.prevent="createTrip">
          <div>
            <label for="tripName">Trip Name:</label>
            <input type="text" id="tripName" v-model="tripName" required>
          </div>
          <div>
            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" v-model="startDate" required>
          </div>
          <div>
            <label for="counties">Select Counties:</label>
            <multiselect
              v-model="selectedCounties"
              :options="countiesWithLabels"
              :multiple="true"
              :searchable="true"
              placeholder="Select counties"
              label="fullLabel"
              track-by="county_full"
            />
          </div>
          <button type="submit">Create Trip</button>
        </form>
      </main>
    </div>
  </template>
  
<style scoped>
@import "vue-multiselect/dist/vue-multiselect.css";

.start-trip {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  width: 100%; 
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  width: 150px;
  align-self: center; 
}

button:hover {
  background-color: #45a049;
}

.multiselect {
  margin-bottom: 1rem;
  max-width: 100%; 
}

</style>