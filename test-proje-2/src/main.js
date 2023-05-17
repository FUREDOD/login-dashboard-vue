import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import store from "./views/store";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const vuetify = createVuetify({
  components,

  directives,
});

const app = createApp(App);

app

  .use(BootstrapVue3)

  .use(vuetify)

  .use(store)

  .use(router)

  .use(ToastPlugin, { position: "top-right" })

  .mount("#app");
