import Vue from 'vue'
import {
  RESET_STATE,
  IS_DIALOG_SHOW
} from '@/store/mutation-types'

let initialState = {
  isDialogShow: false,
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  isDialogShow: function (state) {
    return state.isDialogShow
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
  [IS_DIALOG_SHOW]: function (state, isDialogShow) {
    console.log('IS_DIALOG_SHOW');
    console.log(isDialogShow);
    state.isDialogShow = isDialogShow

  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
