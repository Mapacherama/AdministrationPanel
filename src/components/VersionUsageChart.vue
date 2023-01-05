<div class="card">
    <h5>Horizontal</h5>
    <Chart type="bar" :data="basicData" :options="horizontalOptions" />
</div>

<script>
export default {
  data() {
    return {
      basicData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#42A5F5",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: "My Second dataset",
            backgroundColor: "#FFA726",
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      },
    };
  },
};
</script>
