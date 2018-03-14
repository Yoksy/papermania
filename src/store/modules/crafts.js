import crafts from '@/api/crafts'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allCrafts: state => state.all
}

// actions
const actions = {
  getAllCrafts ({ commit }) {
    crafts.getCrafts(crafts => {
      commit('setCrafts', crafts)
    })
  }
}

// mutations
const mutations = {
  setCrafts (state, crafts) {
    state.all = crafts
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
