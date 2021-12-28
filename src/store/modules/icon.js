import Vue from 'vue'
import parser from '@/data/icon'
import {
  RESET_STATE,
  GET_ICON_DATA,
} from '@/store/mutation-types'

let initialState = {
  iconList: [],
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  iconList: function (state) {
    return state.iconList
  },
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
  [GET_ICON_DATA]: function (state) {

    // PARSE
    const iconList = parser.parseIconData()
    console.log(iconList);
    state.iconList = iconList
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
