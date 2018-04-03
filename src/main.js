// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Axios from "axios";
import Buefy from "buefy";
import VueMq from "vue-mq";

import App from "./components/App";
import router from "./router";
import store from "./store";

import "./helpers/filters";
import * as constants from "./helpers/constants";

Vue.config.productionTip = false;

Vue.use(Buefy);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
});

Vue.prototype.$http = Axios.create({
  baseURL: "http://localhost:8080/datas/tests/"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
