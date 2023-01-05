<template>
  <div className="grid mt-8">
    <div className="col-12 col-6">
      <div className="card margin">
        <h1>Dashboard</h1>
        <div class="chart-container">
          <DeviceUsageChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DeviceUsageChart from "../components/DeviceUsageChart.vue";
</script>

<style scoped>
.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding: 0 15px;
}
</style>
