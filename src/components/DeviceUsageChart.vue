<template>
  <div class="chart">
    <h3>Device usage count</h3>
    <Chart type="doughnut" :data="chartData" :options="lightOptions" />
  </div>
</template>

<script>
import Chart from "primevue/chart";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      chartData: {
        labels: ["IOS", "Android", "Blackberry", "Symbian", "Others"],
        datasets: [
          {
            data: [30, 10, 20, 15, 30],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#21130d",
              "#FFCE56",
              "#abdbe3",
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          labels: {
            render: "percentage",
            fontColor: ["green", "white", "red"],
            precision: 2,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chart {
  width: 50%;
  box-shadow: 1px 1px 5px 0.2px #000;
  border-radius: 10px;
  padding: 10px;
}
</style>
