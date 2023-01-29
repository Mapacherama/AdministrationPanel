<template>
  <div>
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Cloud Usage (GB)',
            backgroundColor: '#f87979',
            data: [40, 60, 80, 100, 120, 140]
          },
          {
            label: 'Cloud Costs ($)',
            backgroundColor: '#7df879',
            data: [100, 150, 200, 250, 300, 350]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderLineChart()
  },
  methods: {
    renderLineChart() {
      this.lineChart = new Chart(this.$refs.lineChart, {
        type: 'line',
        data: this.chartData,
        options: this.options
      })
    }
  }
}
</script>
