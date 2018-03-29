import api from '@/api/crafts'

// initial state
const state = {
  all: [],
  crafts: {
    popular: [],
    latest: [],
    papercraft: [],
    origami: [],
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
  origami: state => state.crafts.origami,
  modelism: state => state.crafts.modelism
}

// actions
const actions = {
  async getAllCrafts({ commit, dispatch }, limit) {
    let response = await api.getCrafts(limit)

    commit('setCrafts', response)
  },
  async getCategoryItems({ commit, dispatch }, category, limit) {
    let response = await api.getCrafts(limit, category)

    commit('setCategoryItems', { category: category, response: response })
  }
}

// mutations
const mutations = {
  setCrafts(state, response) {
    state.crafts = response
  },
  setCategoryItems(state, data) {
    state.crafts[data.category] = data.response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
