import Vue from 'vue'
import {
  RESET_STATE,
  SHOW_ADVANCED_MODAL,
  ADVANCED_MODAL_DETAIL_PAGE_SHOW_HIDE,
} from '@/store/mutation-types'

let initialState = {
  advacnedModalDetialPageShowHide: false,
  showAdvacnedModal: false,
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  showAdvacnedModal: function (state) {
    return state.showAdvacnedModal
  },
  advacnedModalDetialPageShowHide: function (state) {
    return state.advacnedModalDetialPageShowHide
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
  [SHOW_ADVANCED_MODAL]: function (state, status) {
    state.showAdvacnedModal = status
  },
  [ADVANCED_MODAL_DETAIL_PAGE_SHOW_HIDE]: function (state, status) {
    state.advacnedModalDetialPageShowHide = status
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
