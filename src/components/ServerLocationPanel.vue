<template>
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h3 class="card-title">Top Server Locations</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in locations" :key="location.id">
            <td>{{ location.name }}</td>
            <td>{{ location.count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        locations: [
          { id: 1, name: "Amsterdam", count: 125 },
          { id: 2, name: "Spain", count: 25 },
          { id: 3, name: "Frankfurt", count: 10 },
          { id: 4, name: "Italy", count: 7 }
        ]
      };
    }
  };
  </script>
  