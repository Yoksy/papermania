// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Buefy from "buefy"
import VueMq from "vue-mq"
import axios from "axios"

import App from "./components/App"
//import auth from './auth'
import router from "./router"
import store from "./store"

import "./helpers/filters"
import * as constants from "./helpers/constants"

Vue.config.productionTip = false

Vue.use(Buefy)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

axios.defaults.baseURL = 'http://localhost:3000'

/* axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 401) {
    auth.logout()
    router.replace('/login')
  }
  return Promise.reject(error)
}) */

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})
