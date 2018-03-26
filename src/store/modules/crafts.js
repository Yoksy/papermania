import api from '@/api/crafts'

// initial state
const state = {
  all: [],
  homepageCrafts: {
    popular: [],
    latest: [],
    papercraft: [],
    origamis: [],
    modelism: []
  },
  categoryCrafts: {
    papercraft: [],
    origamis: [],
    modelism: []
  },
  currentCraft: null
}

// getters
const getters = {
  allCrafts: state => state.all,
  homepagePopular: state => state.homepageCrafts.popular,
  homepageLatest: state => state.homepageCrafts.latest,
  homepagePapercraft: state => state.homepageCrafts.papercraft,
  homepageOrigamis: state => state.homepageCrafts.origamis,
  homepageModelism: state => state.homepageCrafts.modelism
}

// actions
const actions = {
  getAllCrafts({ commit }) {
    api.getCrafts(crafts => {
      commit('setCrafts', crafts)
    })
  },

  async getHomepageCrafts({ commit, dispatch }, limit) {
    let response = await api.getHomepageCrafts(limit)

    commit('setHomepageCrafts', response)
  }
}

// mutations
const mutations = {
  setCrafts(state, response) {
    state.all = response
  },

  setHomepageCrafts(state, response) {
    state.homepageCrafts = response
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
