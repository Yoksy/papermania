import Vue from "vue"
import Vuex from "vuex"
import vuexCache from 'vuex-cache'
import createLogger from "vuex/dist/logger"

import crafts from "./modules/crafts"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    crafts
  },
  strict: debug,
  plugins: debug ? [createLogger(), vuexCache] : [vuexCache]
})
