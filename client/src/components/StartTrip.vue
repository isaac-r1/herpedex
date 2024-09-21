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
  
  <script>
  import Sidebar from './SideBar.vue'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.css'
  import Papa from 'papaparse'

  export default {
    name: 'StartTrip',
    components: {
      Sidebar,
      Multiselect
    },
    data() {
      return {
        tripName: '',
        startDate: '',
        endDate: '',
        selectedCounties: [],
        counties: []
      }
    },
    computed: {
      countiesWithLabels() {
        return this.counties.map(county => ({
          ...county,
          fullLabel: `${county.county_full} (${county.state_id})`
        }));
      }
    },
    mounted() {
      this.loadCSVData();
    },
    methods: {
      createTrip() {
        console.log('Trip created:', {
          name: this.tripName,
          startDate: this.startDate,
          endDate: this.endDate,
          counties: this.selectedCounties
        })
        // Send data to backend
      },
      loadCSVData() {
        fetch('/uscounties.csv')
          .then(response => response.text())
          .then(data => {
            Papa.parse(data, {
              header: true, 
              skipEmptyLines: true, 
              complete: (results) => {
                this.counties = results.data.map(item => ({
                  county_full: item.county_full,
                  state_id: item.state_id
                }));
              },
              error: (error) => {
                console.error('Error parsing CSV file:', error);
              }
            });
          })
          .catch(error => {
            console.error('Error fetching CSV file:', error);
          });
      }
    }
  }
  </script>
  
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