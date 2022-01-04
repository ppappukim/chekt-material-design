import Vue from 'vue'
import {
  RESET_STATE,
  UPDATE_MAIN_ANI_STATUS_DATA,
} from '@/store/mutation-types'

let initialState = {
  // Main Animation
  mainAniStatus: {},
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  mainAniStatusData: function (state) {
    return state.mainAniStatus
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
  [UPDATE_MAIN_ANI_STATUS_DATA]: function (state, {aniName, aniStatus}) {
    // ADD - state.mainAniStatus에 aniName라는 key와 aniStatus라는 value를 넣어라
    // Vue.set으로 넣어야 object안에 값이 바뀌엇을때 트리거됨 
    Vue.set(state.mainAniStatus, aniName, aniStatus)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
