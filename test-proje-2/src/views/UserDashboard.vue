<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="dashboard">
    <header>
      <h1>Dashboard</h1>
      <div class="search-box">
        <input type="text" placeholder="Search...">
        <button>Search</button>
      </div>
    </header>
    <section class="main-content">
      <div class="widgets-container">
        <widget :title="'Sales Overview'" :data="salesData" />
        <widget :title="'User Activity'" :data="activityData" />
        <widget :title="'Top Products'" :data="productData" />
      </div>
      <div class="chart-container">
        <line-chart :data="chartData" />
      </div>
    </section>
  </div>
</template>

<script>
import Widget from './Widget.vue';
import LineChart from './LineChart.vue';

export default {
  name: 'UserDashboard',
  components: {
    Widget,
    LineChart,
  },
  data() {
    return {
      salesData: [
        { month: 'Jan', sales: 1000 },
        { month: 'Feb', sales: 1200 },
        { month: 'Mar', sales: 800 },
        { month: 'Apr', sales: 1500 },
        { month: 'May', sales: 1700 },
        { month: 'Jun', sales: 1300 },
      ],
      activityData: [
        { user: 'John', activity: 'Logged in' },
        { user: 'Jane', activity: 'Added item to cart' },
        { user: 'Bob', activity: 'Viewed product' },
        { user: 'Mary', activity: 'Purchased item' },
      ],
      productData: [
        { name: 'Product A', sales: 500 },
        { name: 'Product B', sales: 700 },
        { name: 'Product C', sales: 900 },
        { name: 'Product D', sales: 1200 },
      ],
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [1000, 1200, 800, 1500, 1700, 1300],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
    };
  },
};
</script>

<style>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 36px;
}

.search-box {
  display: flex;
}

.search-box input[type="text"] {
  padding: 10px;
  border-radius: 5px 0 0 5px;
  border: none;
  outline: none;
}

.search-box button {
  padding: 10px 20px;
  border-radius: 0 5px 5px 0;
  border: none;
  outline: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;}