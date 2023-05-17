<template>
  <div class="dashboard">
    <header>
      <h1></h1>
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
    <section class="main-content">
      <div class="widgets-container">
        <v-card>
          <v-toolbar color="primary">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Your Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <template v-slot:extension>
              <v-tabs v-model="tab" align-tabs="title">
                <v-tab v-for="item in items" :key="item" :value="item">
                  {{ item }}
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-window v-model="tab">
            <v-window-item v-for="item in items" :key="item" :value="item">
              <v-card flat>
                <v-card-text v-text="text"></v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
        <v-table class="data-table" theme="dark">
          <thead>
            <tr>
              <th class="text-left">Title</th>
              <th class="text-left">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.title">
              <td>{{ item.title }}</td>
              <td>{{ item.data }}</td>

              <td>Sales Overview</td>
              <td>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Month</th>
                      <th class="text-left">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in salesData" :key="item.month">
                      <td>{{ item.month }}</td>
                      <td>{{ item.sales }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </td>
            </tr>
            <tr>
              <td>User Activity</td>
              <td>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">User</th>
                      <th class="text-left">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in activityData" :key="item.user">
                      <td>{{ item.user }}</td>
                      <td>{{ item.activity }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </td>
            </tr>
            <tr>
              <td>Top Products</td>
              <td>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in productData" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.sales }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </td>
            </tr>
          </tbody>
        </v-table>
        <div class="chart-container">
          <line-chart :activitydata="activityData" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Widget from "../views/UserWidget.vue";
import LineChart from "..//views/LineChart.vue";

export default {
  name: "UserDashboard",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Widget,
    LineChart,
  },
  data() {
    return {
      salesData: [
        { month: "Jan", sales: 1000 },
        { month: "Feb", sales: 1200 },
        { month: "Mar", sales: 800 },
        { month: "Apr", sales: 1500 },
        { month: "May", sales: 1700 },
        { month: "Jun", sales: 1300 },
      ],
      activityData: [
        { user: "John", activity: "Logged in" },
        { user: "Jane", activity: "Added item to cart" },
        { user: "Bob", activity: "Viewed product" },
        { user: "Mary", activity: "Purchased item" },
      ],
      productData: [
        { name: "Product A", sales: 500 },
        { name: "Product B", sales: 700 },
        { name: "Product C", sales: 900 },
        { name: "Product D", sales: 1200 },
      ],
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [1000, 1200, 800, 1500, 1700, 1300],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      tab: null,
      items: ["web", "shopping", "videos", "images", "news"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style scoped>
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
  cursor: pointer;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.data-table th,
.data-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #000000;
}

.data-table th {
  background-color: #333;
  font-weight: bold;
}
</style>
