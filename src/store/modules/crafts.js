import api from "@/api/crafts"

// initial state
const state = {
  popular: [],
  rising: [],
  papercraft: [],
  origami: [],
  modelism: [],
  current: null
}

// getters
const getters = {
  //allCrafts: state => state.all
}

// actions
const actions = {
  async getHomeCrafts({ commit, dispatch }, payload) {
    let response = await api.getHomeCrafts(payload.limit)

    commit("setCrafts", response)
  },
  async getCategoryCrafts({ commit, dispatch }, payload) {
    let response = await api.getCrafts(payload.limit, payload.category)

    commit("setCategoryCrafts", {
      category: payload.category,
      response: response
    })
  }
}

// mutations
const mutations = {
  setCrafts(state, data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        state[key] = data[key]
      }
    }
  },
  setCategoryCrafts(state, data) {
    state[data.category] = data.response
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
