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
  githubUrlInfo: {},
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
  githubUrlInfo: function (state) {
    return state.githubUrlInfo
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

    // PARSE
    const searchDataInfo = parser.parseSearchData()

    // CHECK
    // if (!searchDataInfo) return
    // if (!(searchDataInfo instanceof Array)) return

    // INIT
    let githubUrlInfo = {}

    // GET - Github url
    Object.values(searchDataInfo).map(v => {
      
      Object.entries(v.github).map(kv => { 
        githubUrlInfo[kv[0]] = kv[1]
      })
    }),

    state.githubUrlInfo = githubUrlInfo
    state.searchDataInfo = searchDataInfo
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
