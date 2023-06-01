import axios from "axios";

export default class Api {
  apiClient = axios.create({
    baseURL: "https://api-testxtre.definexlabs.com/api/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  login(data) {
    return this.apiClient.post("/account/Authentication/Login", data);
  }

  logout() {
    return this.apiClient.get("/account/Authentication/Logout");
  }

  getClients() {
    return this.apiClient.get("/management/Client/Clients", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("at"),
      },
    });
  }
}
