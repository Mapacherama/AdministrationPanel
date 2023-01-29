<template>
    <div>
      <canvas ref="barChart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        chartData: {
            labels: ['Web Apps', 'Containers', 'Cloud Native Apps', 'DevOps'],
            datasets: [
          {
            label: 'Reliability',
            backgroundColor: '#f87979',
            data: [85, 75, 80, 90]
          },
          {
            label: 'Performance',
            backgroundColor: '#7df879',
            data: [90, 80, 75, 95]
          },
          {
            label: 'User-friendliness',
            backgroundColor: '#79a8f8',
            data: [95, 85, 90, 80]
          }
        ]
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.renderBarChart()
  },
  methods: {
    renderBarChart() {
      this.barChart = new Chart(this.$refs.barChart, {
        type: 'bar',
        data: this.chartData,
        options: this.options
      })
    }
  }
}
</script>