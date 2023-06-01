<template>
  <div class="dashboard" :class="{ 'dark-mode': isDarkMode }">
    <div class="sidebar">
      <div class="logo">
        <img src="DefineX.logo.png" alt="DefineX logo" />
        <h3>Dashboard</h3>
      </div>
      <ul class="menu">
        <li
          :class="{ 'menu-item': true, active: activeMenuItem === 'Home' }"
          @click="setActiveMenuItem('Home')"
        >
          <i class="fas fa-home"></i>
          <span>Home</span>
        </li>
        <li
          :class="{ 'menu-item': true, active: activeMenuItem === 'Messages' }"
          @click="setActiveMenuItem('Messages')"
        >
          <i class="fas fa-envelope"></i>
          <span>Messages</span>
        </li>
        <li
          :class="{ 'menu-item': true, active: activeMenuItem === 'Settings' }"
          @click="setActiveMenuItem('Settings')"
        >
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </li>
      </ul>
      <button class="logout-button" @click="logout">Logout</button>
    </div>
    <div class="content">
      <div v-if="activeMenuItem === 'Home'">
        <div class="input-container">
          <input type="text" v-model="searchText" placeholder="Search" />
          <button @click="search">Search</button>
        </div>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Programming Language</th>
              <th class="text-left">Framework</th>
              <th class="text-left">Experience (in years)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredDesserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.branch }}</td>
              <td>{{ item.framework }}</td>
              <td>{{ item.experience }}</td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div v-if="activeMenuItem === 'Messages'">
        <h1>Messages Page</h1>
        <ul class="message-list">
          <li
            v-for="message in messages"
            :key="message.id"
            class="message-item"
          >
            <div class="message-header">
              <span class="message-sender">{{ message.sender }}</span>
              <span class="message-time">{{ message.time }}</span>
            </div>
            <div class="message-content">{{ message.content }}</div>
          </li>
        </ul>
      </div>
      <div v-if="activeMenuItem === 'Settings'">
        <h1>Settings Page</h1>
        <div class="dark-mode-toggle">
          <span>Dark Mode:</span>
          <label class="switch">
            <input
              type="checkbox"
              v-model="darkMode"
              @change="toggleDarkMode"
            />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [],
      activeMenuItem: "Home",
      searchText: "",
      desserts: [
        { name: "John", branch: "Python", framework: "Django", experience: 5 },
        {
          name: "Emma",
          branch: "JavaScript",
          framework: "Vue.js",
          experience: 3,
        },
        { name: "Sarah", branch: "Java", framework: "Spring", experience: 7 },
        { name: "Michael", branch: "C#", framework: ".NET", experience: 4 },
        {
          name: "Emily",
          branch: "Ruby",
          framework: "Ruby on Rails",
          experience: 6,
        },
        { name: "David", branch: "PHP", framework: "Laravel", experience: 2 },
        { name: "Sophia", branch: "Python", framework: "Flask", experience: 3 },
        {
          name: "Oliver",
          branch: "JavaScript",
          framework: "React",
          experience: 4,
        },
        {
          name: "Isabella",
          branch: "Java",
          framework: "Spring Boot",
          experience: 1,
        },
        { name: "Daniel", branch: "C#", framework: "ASP.NET", experience: 3 },
        { name: "Ava", branch: "Ruby", framework: "Sinatra", experience: 2 },
        {
          name: "Ethan",
          branch: "PHP",
          framework: "CodeIgniter",
          experience: 2,
        },
        { name: "Mia", branch: "Python", framework: "Django", experience: 2 },
        {
          name: "Noah",
          branch: "JavaScript",
          framework: "Vue.js",
          experience: 3,
        },
        { name: "Liam", branch: "Java", framework: "Hibernate", experience: 2 },
      ],
      isDarkMode: false,
      messages: [
        {
          id: 1,
          sender: "John Doe",
          time: "10:00 AM",
          content: "Hello, how are you?",
        },
        {
          id: 2,
          sender: "Jane Smith",
          time: "11:30 AM",
          content: "I'm good. Thanks for asking!",
        },
        {
          id: 3,
          sender: "New Sender 1",
          time: "1:30 PM",
          content: "This is a new message.",
        },
        {
          id: 4,
          sender: "New Sender 2",
          time: "2:30 PM",
          content: "Another new message.",
        },
        {
          id: 5,
          sender: "New Sender 3",
          time: "3:30 PM",
          content: "Yet another new message.",
        },
        {
          id: 6,
          sender: "New Sender 4",
          time: "4:30 PM",
          content: "One more new message.",
        },
        {
          id: 7,
          sender: "New Sender 5",
          time: "5:30 PM",
          content: "Last new message.",
        },
      ],
    };
  },
  created() {
    this.fetchClients();
  },
  computed: {
    filteredDesserts() {
      return this.desserts.filter((dessert) =>
        dessert.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    fetchClients() {
      const token = "at";

      fetch(
        "https://api-testxtre.definexlabs.com/api/management/Client/Clients",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.clients = data;
        })
        .catch((error) => {
          console.error("Müşterileri getirirken hata oluştu:", error);
        });
    },
    setActiveMenuItem(item) {
      this.activeMenuItem = item;
    },
    search() {},
    logout() {
      localStorage.removeItem("isLoggedIn");
      this.$router.push({ name: "login" });
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background-color: #f8f8f8;
}

.sidebar {
  width: 200px;
  background-color: #ffffff;
}

.logo {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
}

.menu-item.active {
  background-color: #525eff;
}

.menu-item i {
  margin-right: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}

.logout-button {
  display: block;
  width: 100%;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #ffffff;
  border: none;
  text-align: left;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #ff0000;
}

.input-container {
  display: flex;
  margin-bottom: 20px;
}

.input-container input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #000000;
  border-radius: 4px 0 0 4px;
}

.input-container button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.v-table {
  width: 100%;
  border-collapse: collapse;
}

.v-table th,
.v-table td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.v-table th {
  background-color: #5900ff;
}

.v-table td {
  background-color: #ffffff;
}

.message-list {
  list-style: none;
  padding: 0;
}

.message-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #fd0000;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.message-sender {
  font-weight: bold;
}

.message-time {
  color: #888888;
}

.dark-mode-toggle {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.dark-mode-toggle span {
  margin-right: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: rgb(255, 71, 71);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #098cf8;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.dark-mode {
  background-color: #333333;
  color: #ffffff;
}
.dark-mode .logo {
  background-color: #333333;
  color: #f8f8f8;
}

.dark-mode .sidebar {
  background-color: #444444;
  color: #ffffff;
}

.dark-mode .menu-item.active {
  background-color: #555555;
}

.dark-mode .logout-button {
  background-color: #444444;
  color: #ffffff;
}

.dark-mode .input-container input {
  border: 1px solid #999999;
  color: #ffffff;
}

.dark-mode .v-table th {
  background-color: #555555;
  color: #ffffff;
}

.dark-mode .v-table td {
  background-color: #444444;
  color: #ffffff;
}

.dark-mode .message-item {
  border: 1px solid #999999;
}

.dark-mode .message-sender {
  color: #ffffff;
}

.dark-mode .message-time {
  color: #cccccc;
}
</style>
