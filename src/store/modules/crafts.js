import api from "@/api/crafts"

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
  category: {
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
}

// getters
const getters = {
  //allCrafts: state => state.all
}

// actions
const actions = {
  async getHomeItems({ commit, dispatch }, payload) {
    const response = await api.getHomeItems(payload.limit);

    commit("setHomeItems", response)
  },
  async getCategoryItems({ commit, dispatch }, payload) {
    commit("setCategoryItems", {
      category: payload.category,
      response: await api.getItems(payload.limit, payload.category)
    })
  }
}

// mutations
const mutations = {
  setHomeItems(state, data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        state.home[key] = data[key]
      }
    }

    state.home.lastUpdated = new Date()
  },
  setCategoryItems(state, data) {
    state.category[data.category].items = data.response
    state.category[data.category].lastUpdated = new Date()
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
