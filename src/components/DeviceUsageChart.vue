<template>
    <h3 class="ml-4">Fascinating Device Utilization Visualization</h3>
    <Chart class="chart-small" type="doughnut" :data="chartData" :options="options" />

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
h3{
  color: var(--text-color);
}
</style>
