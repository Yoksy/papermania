import axios from 'axios'
import { getCurrentStrftime } from '@/helpers/helpers'

// initial state
const state = {
  user: {}
}

// getters
const getters = {

}

// actions
const actions = {
  async CHECK_USERNAME_OR_EMAIL_AVAILABILITY({ commit }, payload) {
    const queryData = payload.username || payload.email;
    const user = await axios.get(`/users/${queryData}`);

    console.log(user.data, user.data.length === 0)

    return user.data.length === 0
  }
}

// mutations
const mutations = {
  SET_ITEM(state, response) {
    state.currentItem = response[0]
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
