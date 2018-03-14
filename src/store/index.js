import Vue from 'vue'
import Vuex from 'vuex'
import crafts from './modules/crafts'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    crafts
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
