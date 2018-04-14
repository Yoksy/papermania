import axios from 'axios'
import { getCurrentStrftime } from '@/helpers/helpers'

// initial state
const state = {
  home: {
    popular: [],
    rising: [],
    papercraft: [],
    origami: [],
    modelism: [],
    lastUpdated: null
  },
  papercraft: {
    items: [],
    lastUpdated: null
  },
  origami: {
    items: [],
    lastUpdated: null
  },
  modelism: {
    items: [],
    lastUpdated: null
  }
}

// getters
const getters = {
  //allCrafts: state => state.all
}

// actions
const actions = {
  LOAD_HOME_ITEMS({ commit, dispatch }, payload) {
    axios.get('/items').then((response) => {
      commit('SET_HOME_ITEMS', response.data)
    }, (err) => {
      console.log(err)
    })
  },
  LOAD_CATEGORY_ITEMS({ commit, dispatch }, payload) {
    axios.get(`/items/${payload.category}`).then((response) => {
      commit('SET_CATEGORY_ITEMS', {
        category: payload.category,
        response: response.data
      })
    }, (err) => {
      console.log(err)
    })
  }
}

// mutations
const mutations = {
  SET_HOME_ITEMS(state, data) {
    //console.log(data)
    /* for (let key in data) {
      if (data.hasOwnProperty(key)) {
        state.home[key] = data[key]
      }
    } */

    state.home.popular = data
    state.home.lastUpdated = getCurrentStrftime()
  },
  SET_CATEGORY_ITEMS(state, data) {
    state[data.category].items = data.response
    state[data.category].lastUpdated = getCurrentStrftime()
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
