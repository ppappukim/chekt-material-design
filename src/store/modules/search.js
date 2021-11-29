import Vue from 'vue'
import parser from '@/data/search'
import {
  RESET_STATE,
  IS_SEARCH_ACTIVE,
  GET_SEARCH_DATA,
} from '@/store/mutation-types'

let initialState = {
  isSearchActive: false,
  searchDataInfo: [],
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  isSearchActive: function (state) {
    return state.isSearchActive
  },
  searchDataInfo: function (state) {
    return state.searchDataInfo
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
  [IS_SEARCH_ACTIVE]: function (state, isSearchActive) {
    state.isSearchActive = isSearchActive
  },
  [GET_SEARCH_DATA]: function (state) {
    const searchDataInfo = parser.parseSearchData()
    state.searchDataInfo = searchDataInfo
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
