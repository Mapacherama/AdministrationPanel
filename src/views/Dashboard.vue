<template>
  <div className="mt-8">    
      <div>
        <h1>Dashboard</h1>
      </div>     
      <div class="grid d-flex">
        <div class="col-4">   
      <DeviceUsageChart /> 
    
      </div>
    </div>
  <div class="grid">   
    <div class="chart-container-row"> 
    <div class="col-6">
  <VersionUsageChart class="chart" />
</div>
<div class="col-6">
  <StackedBarChart class="chart" />
</div>
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
  flex-wrap: wrap;
  padding: 0 15px;
  gap: 5px;
  flex-direction: column;
}

.chart-container-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  gap: 5px;
  flex-direction: row;
}
.chart-smaller{
  width: 25%;
}

.grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart {
  width: 100%;
}
</style>
