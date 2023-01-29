<template>
    <div>
      <canvas ref="scatterPlot"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
        return {
            chartData: {
            datasets: [{
              label: 'Cloud Provider Usage',
              data: [{
                x: 1,
                y: 10
              }, {
                x: 2,
                y: 15
              }, {
                x: 3,
                y: 8
              }, {
                x: 2,
                y: 12
              }],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointRadius: 5,
              pointHoverRadius: 10
            }]
          },
          options: {
            scales: {
              xAxes: [{
                type: 'linear',
                position: 'bottom'
              }]
            }
          }
        }
    },
    mounted() {
      this.renderChart()
    },
    methods: {
      renderChart() {
        this.scatterPlot = new Chart(this.$refs.scatterPlot, {
          type: 'scatter',
          data: this.chartData,
          options: this.options
        });
      }
    }
  }
  </script>
  