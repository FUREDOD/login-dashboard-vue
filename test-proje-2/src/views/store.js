import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      isLoggedIn: false,
      user: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  actions: {
    async fetchUser(context, userId) {
      try {
        const response = await API.getUser(userId);
        context.commit("login", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    logout(context) {
      context.commit("logout");
    },
  },
});

export default store;
