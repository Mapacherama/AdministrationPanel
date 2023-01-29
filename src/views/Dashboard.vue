<template>
  <div style="margin-top: 100px;" class="ml-4">
    <div>
      <h1 >Dashboard</h1>
    </div>    
    <div class="grid">
      <div class="col-6">
        <DeviceUsageChart />
      </div>
      <div class="col-6">
        <VersionUsageChart class="chart" />
        <StackedBarChart class="chart" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import DeviceUsageChart from "../components/DeviceUsageChart.vue";
  import VersionUsageChart from "../components/VersionUsageChart.vue";
  import StackedBarChart from "../components/StackedBarChart.vue";
</script>

<style scoped>
  .chart-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
    padding: 0 15px;
  }
  .chart-container-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    padding: 0 15px;
  }
  .grid {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .chart {
    width: 100%;
  }
  .chart-smaller {
    width: 25%;
  }
</style>
