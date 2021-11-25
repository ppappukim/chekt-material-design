import Vue from 'vue'
import {
  RESET_STATE,
  IS_DEFAULT_TOAST_SHOW_LEFT,
  IS_DEFAULT_TOAST_SHOW_RIGHT,
  IS_DEFAULT_TOAST_SHOW_CENTER,
  IS_DEFAULT_TOAST_SHOW_SUCCESS,
  IS_DEFAULT_TOAST_SHOW_DANGER,
  IS_DEFAULT_TOAST_SHOW_WARNING,
  IS_ACTION_TOAST_SHOW,
  IS_ACTION_AFTER_TOAST_SHOW,
  IS_ACTIONS_TOAST_SHOW,
  IS_ACTIONS_AFTER_TOAST_SHOW,
  ACTION_TOAST_$T,
  ACTIONS_TOAST_$T,
} from '@/store/mutation-types'

let initialState = {
  isDefaultToastShowLeft: false,
  isDefaultToastShowRight: false,
  isDefaultToastShowCenter: false,
  isDefaultToastShowSuccess: false,
  isDefaultToastShowDanger: false,
  isDefaultToastShowWarning: false,
  isActionToastShow: false,
  isActionAfterToastShow: false,
  isActionsToastShow: false,
  isActionsAfterToastShow: false,
  actionToast$t: null,
  actionsToast$t: null,

  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  isDefaultToastShowLeft: function (state) {
    return state.isDefaultToastShowLeft
  },
  isDefaultToastShowRight: function (state) {
    return state.isDefaultToastShowRight
  },
  isDefaultToastShowCenter: function (state) {
    return state.isDefaultToastShowCenter
  },
  isDefaultToastShowSuccess: function (state) {
    return state.isDefaultToastShowSuccess
  },
  isDefaultToastShowDanger: function (state) {
    return state.isDefaultToastShowDanger
  },
  isDefaultToastShowWarning: function (state) {
    return state.isDefaultToastShowWarning
  },
  isActionToastShow: function (state) {
    return state.isActionToastShow
  },
  isActionAfterToastShow: function (state) {
    return state.isActionAfterToastShow
  },
  isActionsToastShow: function (state) {
    return state.isActionsToastShow
  },
  isActionsAfterToastShow: function (state) {
    return state.isActionsAfterToastShow
  },
  actionsToast$t: function (state) {
    return state.actionsToast$t
  },
  actionToast$t: function (state) {
    return state.actionToast$t
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
  [IS_DEFAULT_TOAST_SHOW_LEFT]: function (state, isToastShow) {
    state.isDefaultToastShowLeft = isToastShow
  },
  [IS_DEFAULT_TOAST_SHOW_RIGHT]: function (state, isToastShow) {
    state.isDefaultToastShowRight = isToastShow
  },
  [IS_DEFAULT_TOAST_SHOW_CENTER]: function (state, isToastShow) {
    state.isDefaultToastShowCenter = isToastShow
  },
  [IS_DEFAULT_TOAST_SHOW_SUCCESS]: function (state, isToastShow) {
    state.isDefaultToastShowSuccess = isToastShow
  },
  [IS_DEFAULT_TOAST_SHOW_DANGER]: function (state, isToastShow) {
    state.isDefaultToastShowDanger = isToastShow
  },
  [IS_DEFAULT_TOAST_SHOW_WARNING]: function (state, isToastShow) {
    state.isDefaultToastShowWarning = isToastShow
  },
  [IS_ACTION_TOAST_SHOW]: function (state, isToastShow) {
    state.isActionToastShow = isToastShow
  },
  [IS_ACTION_AFTER_TOAST_SHOW]: function (state, isToastShow) {
    state.isActionAfterToastShow = isToastShow
  },
  [IS_ACTIONS_TOAST_SHOW]: function (state, isToastShow) {
    state.isActionsToastShow = isToastShow
  },
  [IS_ACTIONS_AFTER_TOAST_SHOW]: function (state, isToastShow) {
    state.isActionsAfterToastShow = isToastShow
  },
  [ACTION_TOAST_$T]: function (state, actionToast$t) {
    state.actionToast$t = actionToast$t
  },
  [ACTIONS_TOAST_$T]: function (state, actionsToast$t) {
    state.actionsToast$t = actionsToast$t
  },
  
}

export default {
  state,
  getters,
  actions,
  mutations
}
