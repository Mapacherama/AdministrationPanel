<template>
    <Panel header="Cloud Resource Utilization">
      <div class="p-grid">
        <div class="p-col-12 p-md-4">
            
            <h5>CPU Utilization</h5>
            <ProgressBar :value="cpuValue" :showValue="false"/>
            
            
        </div>
        <div class="p-col-12 p-md-4">
            
            <h5>Memory Utilization</h5>
            <ProgressBar :value="memoryValue" :showValue="false"/>
            
            
        </div>
        <div class="p-col-12 p-md-4">
            
            <h5>Storage Utilization</h5>
            <ProgressBar :value="storageValue" :showValue="false"/>
            
            
        </div>
        <div class="p-col-12 p-md-4">
            
            <h5>Network Utilization</h5>
            <ProgressBar :value="networkValue" :showValue="false"/>
            
        </div>
      </div>
    </Panel>
  </template>
  
  <script>
  import ProgressBar from 'primevue/progressbar';
  import Panel from 'primevue/panel';
  import Card from 'primevue/card';
  export default {
    components: {
        Card,
        ProgressBar,
        Panel
    },
    data() {
      return {
        cpuValue: 50,
        memoryValue: 70,
        storageValue: 30,
        networkValue: 80
      };
    }
  };
  </script>
  