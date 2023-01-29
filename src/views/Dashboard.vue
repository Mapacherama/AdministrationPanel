<template>
  <div style="margin-top: 100px;" class="ml-4">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <div>
      <h1 >Dashboard</h1>
    </div>    
    <div class="grid">
      <div class="col-4">
        <DeviceUsageChart />
      </div>
      <div class="col-8">
        <VersionUsageChart class="chart" />
        <StackedBarChart class="chart" />
      </div>
    </div>
    <div class="grid">
      <div class="col-6">
        <ScatterPlotChart class="chart"/>        
      </div>
      <div class="col-6">	
        <ServerLocationPanel class="chart" />   
        <PanelForResourceUtil class="chart" />             
      </div>
      </div>
  </div>
</template>

<script setup>
  import DeviceUsageChart from "../components/DeviceUsageChart.vue";
  import VersionUsageChart from "../components/VersionUsageChart.vue";
  import StackedBarChart from "../components/StackedBarChart.vue";
  import ScatterPlotChart from "../components/ScatterPlotChart.vue";
  import PanelForResourceUtil from "../components/PanelForResourceUtil.vue";
  import ServerLocationPanel from "../components/ServerLocationPanel.vue";

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
    justify-content: start;
  }
  .chart {
    width: 100%;
    height: auto;
  }

</style>
