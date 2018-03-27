import api from '@/api/crafts'

// initial state
const state = {
  all: [],
  crafts: {
    popular: [],
    latest: [],
    papercraft: [],
    origamis: [],
    modelism: []
  },
  currentCraft: null
}

// getters
const getters = {
  allCrafts: state => state.all,
  popular: state => state.crafts.popular,
  latest: state => state.crafts.latest,
  papercraft: state => state.crafts.papercraft,
  origamis: state => state.crafts.origamis,
  modelism: state => state.crafts.modelism
}

// actions
const actions = {
  async getAllCrafts({ commit, dispatch }, limit) {
    let response = await api.getCrafts(limit)

    commit('setCrafts', response)
  },
  async getCategoryCrafts({ commit, dispatch }, category, limit) {
    let response = await api.getCrafts(limit, category)

    commit('setCategoryCrafts', { category: category, response: response })
  }
}

// mutations
const mutations = {
  setCrafts(state, response) {
    state.crafts = response
  },
  setCategoryCrafts(state, data) {
    state.crafts[data.category] = data.response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
