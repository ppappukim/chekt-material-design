import Vue from 'vue'
import {
  RESET_STATE,
  IS_DATE_PICKER_MODAL_SHOW,
  IS_RANGE_DATE_PICKER_MODAL_SHOW,
  DATE_PICKER_EVENT_POINT,
  DATE_PICKER_SELECTED_DATE,
  RANGE_DATE_PICKER_EVENT_POINT,
  RANGE_DATE_PICKER_SELECTED_START_DATE,
  RANGE_DATE_PICKER_SELECTED_END_DATE,
} from '@/store/mutation-types'

let initialState = {
  isDatePickerModalShow: false,
  isRangeDatePickerModalShow: false,
  datePickerEventPoint: null,
  datePickerSelectedDate: 'Select Date',
  rangeDatePickerEventPoint: null,
  rangeDatePickerSelectedStartDate:'Select Start',
  rangeDatePickerSelectedEndDate:'Select End',
  status: {
  }
}

// initial state
const state = Vue.util.extend({}, initialState)

// getters
const getters = {
  isDatePickerModalShow: function (state) {
    return state.isDatePickerModalShow
  },
  isRangeDatePickerModalShow: function (state) {
    return state.isRangeDatePickerModalShow
  },
  datePickerEventPoint: function (state) {
    return state.datePickerEventPoint
  },
  datePickerSelectedDate: function (state) {
    return state.datePickerSelectedDate
  },
  rangeDatePickerEventPoint: function (state) {
    return state.rangeDatePickerEventPoint
  },
  rangeDatePickerSelectedStartDate: function (state) {
    return state.rangeDatePickerSelectedStartDate
  },
  rangeDatePickerSelectedEndDate: function (state) {
    return state.rangeDatePickerSelectedEndDate
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
  [IS_DATE_PICKER_MODAL_SHOW]: function (state, isDatePickerShow) {
    state.isDatePickerModalShow = isDatePickerShow
  },
  [IS_RANGE_DATE_PICKER_MODAL_SHOW]: function (state, isDatePickerShow) {
    state.isRangeDatePickerModalShow = isDatePickerShow
  },
  [DATE_PICKER_EVENT_POINT]: function (state, eventPoint) {
    state.datePickerEventPoint = eventPoint
  },
  [DATE_PICKER_SELECTED_DATE]: function (state, selectedDate) {
    state.datePickerSelectedDate = selectedDate
  },
  [RANGE_DATE_PICKER_EVENT_POINT]: function (state, eventPoint) {
    state.rangeDatePickerEventPoint = eventPoint
  },
  [RANGE_DATE_PICKER_SELECTED_START_DATE]: function (state, selectedDate) {
    state.rangeDatePickerSelectedStartDate = selectedDate
  },
  [RANGE_DATE_PICKER_SELECTED_END_DATE]: function (state, selectedDate) {
    state.rangeDatePickerSelectedEndDate = selectedDate
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
