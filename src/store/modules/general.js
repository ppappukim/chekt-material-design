import Vue from 'vue'
import {
  RESET_STATE,
  WATCH_SCROLL_EVENT
} from '@/store/mutation-types'

let initialState = {
  scrollPositon: 0,
  status: {
    getMyProfile: null,
    updateMyProfile: null,
    sendEmailChangeEmail: null
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  scrollPositon: function (state) {
    return state.scrollPositon
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  [RESET_STATE]: function (state) {
    for (let f in state) {
      Vue.set(state, f, initialState[f])
    }
  },
  [WATCH_SCROLL_EVENT]: function (state, scrollPositon) {
    state.scrollPositon = scrollPositon

  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
