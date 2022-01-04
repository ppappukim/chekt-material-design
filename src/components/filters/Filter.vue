<template>
  <div>

    <!-- Filter -->
    <div id="__chekt-filter">
      <!-- Header -->
      <div class="filter-header">
        <div @click="onClickClearBtn()" class="button-small default">Clear</div>
        <div class="filter-header-text">
          <div>Filter</div>
          <div v-if="filterEnabledCounter > 0" class="filter-header-count">{{filterEnabledCounter}}</div>
        </div>
        <div @click="onClickDoneBtn()" class="button-small primary">Done</div>
      </div>
      <!-- Body -->
      <div class="filter-body">

        <!-- Item -->
        <div class="filter-body-item">

          <!-- Item > Title -->
          <div class="filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="checkbox">
                <input @change="onChangeCheckbox('date')" type="checkbox" ref="dateCheckbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Date</div>
          </div>

          <!-- Item > Content -->
          <div v-if="isDateChecked" class="filter-body-item-content">

            <!-- Content main -->
            <div>
              <div id="__chekt-select">
                <select @change="onChangeDatePeriodType($event)" class="select">
                  <option value="0">is in the last</option>
                  <option value="1">is equal to</option>
                  <option value="2">is between</option>
                  <option value="3">is after</option>
                  <option value="4">is before</option>
                </select>
                <div class="select-icon">
                  <MyIcon v-bind:icon="'folder-open'" v-bind:width="18" />
                </div>
              </div>
            </div>

            <!-- Content sub 0 -->
            <div v-if="dateSelectType === '0'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="input-text">
                  <input v-model="messageDateA" @input="maxLengthCheck(messageDateA)" type="number" placeholder="0">
                </div>
              </div>
              <div style="margin-left:5px;">
                <div id="__chekt-select">
                  <select class="select">
                    <option value="0">days</option>
                    <option value="1">months</option>
                  </select>
                  <div class="select-icon">
                    <MyIcon v-bind:icon="'folder-open'" v-bind:width="18"/>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content sub 1 -->
            <div v-else-if="dateSelectType === '1'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <!-- Datepicker -->
                <div @click="onClickDatePicker($event)" class="button-small default icon date">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{datePickerSelectedDate}}</div>
                </div>
            </div>

            <!-- Content sub 2 -->
            <div v-else-if="dateSelectType === '2'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>

              <!-- Range Datepicker -->
              <div>
                <div @click="onClickDatePickerRange($event)" class="button-small default icon date">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{rangeDatePickerSelectedStartDate}} - {{rangeDatePickerSelectedEndDate}}</div>
                </div>
              </div>
            </div>

            <!-- Content sub 3 -->
            <div v-else-if="dateSelectType === '3'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <!-- Datepicker -->
              <div>
                <div @click="onClickDatePicker($event)" class="button-small default icon date">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{datePickerSelectedDate}}</div>
                </div>
              </div>
            </div>

            <!-- Content sub 4 -->
            <div v-else-if="dateSelectType === '4'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <!-- Datepicker -->
              <div>
                <div @click="onClickDatePicker($event)" class="button-small default icon date">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{datePickerSelectedDate}}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Item -->
        <div class="filter-body-item">
          <div class="filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="checkbox">
                <input type="checkbox" @change="onChangeCheckbox('amount')" ref="amountCheckbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Amount</div>
          </div>

            <!-- Item > Content -->
          <div v-if="isAmountChecked" class="filter-body-item-content">

            <!-- Content main -->
            <div>
              <div id="__chekt-select">
                <select @change="onChangeAmountPeriodType($event)" class="select">
                  <option value="0">is equal to</option>
                  <option value="1">is between</option>
                  <option value="2">is greater than</option>
                  <option value="3">is less than</option>
                </select>
                <div class="select-icon">
                  <MyIcon v-bind:icon="'folder-open'" v-bind:width="18" />
                </div>
              </div>
            </div>

            <!-- Content sub 0 -->
            <div v-if="amountSelectType === '0'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="input-text">
                  <input v-model="messageAmountA" @input="maxLengthCheck(messageAmountA)" type="number" placeholder="0">
                </div>
              </div>
            </div>

            <!-- Content sub 1 -->
            <div v-if="amountSelectType === '1'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div class="content-sub-body">
                <div class="input-text">
                  <input v-model="messageAmountB" @input="maxLengthCheck(messageAmountB)" type="number" placeholder="0">
                </div>
                <div class="content-sub-body-text">and</div>
                <div class="input-text">
                  <input v-model="messageAmountC" @input="maxLengthCheck(messageAmountC)" type="number" placeholder="0">
                </div>
              </div>
            </div>

            <!-- Content sub 2 -->
            <div v-if="amountSelectType === '2'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="input-text">
                  <input v-model="messageAmountD" @input="maxLengthCheck(messageAmountD)" type="number" placeholder="0">
                </div>
              </div>
            </div>

            <!-- Content sub 3 -->
            <div v-if="amountSelectType === '3'" class="content-sub">
              <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="input-text">
                  <input v-model="messageAmountE" @input="maxLengthCheck(messageAmountE)" type="number" placeholder="0">
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Item -->
        <div class="filter-body-item">
          <div class="filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="checkbox">
                <input type="checkbox" @change="onChangeCheckbox('status')" ref="statusCheckbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Status</div>
          </div>

            <!-- Item > Content -->
          <div v-if="isStatusChecked" class="filter-body-item-content">

            <!-- Content main -->
            <div class="filter-body-item-main">

              <!-- Checkbox -->
              <div class="filter-body-item-main-line">
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                    <span class="checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Successed</div>
              </div>

              <!-- Checkbox -->
              <div class="filter-body-item-main-line">
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                    <span class="checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Incomplete</div>
              </div>

              <!-- Checkbox -->
              <div class="filter-body-item-main-line">
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                    <span class="checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Pending</div>
              </div>

              <!-- Checkbox -->
              <div class="filter-body-item-main-line">
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                    <span class="checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Refunded</div>
              </div>

              <!-- Checkbox -->
              <div class="filter-body-item-main-line">
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                    <span class="checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Failed</div>
              </div>

            </div>

          </div>
        </div>

        <!-- Item -->
        <div class="filter-body-item">
          <div class="filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="checkbox">
                <input type="checkbox" @change="onChangeCheckbox('payment method')" ref="paymentMethodCheckbox">
                <span class="checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Payment Method</div>
          </div>

            <!-- Item > Content -->
          <div v-if="isPaymentMethodChecked" class="filter-body-item-content">

            <!-- Content main -->
            <div class="filter-body-item-main" style="padding:0;">
              <div id="__chekt-select">
                <select class="select">
                  <option value="0">Card</option>
                  <option value="1">Bank Account</option>
                  <option value="2">ACH Credit Transfer</option>
                  <option value="3">Apple Pay</option>
                </select>
                <div class="select-icon">
                  <MyIcon v-bind:icon="'folder-open'" v-bind:width="18" />
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon,
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
    datePickerSelectedDate: function () {
      return this.$store.getters.datePickerSelectedDate
    },
    rangeDatePickerSelectedStartDate: function () {
      return this.$store.getters.rangeDatePickerSelectedStartDate
    },
    rangeDatePickerSelectedEndDate: function () {
      return this.$store.getters.rangeDatePickerSelectedEndDate
    }
  },
  props: {
    propsFilterClickEvent: {
      type: PointerEvent,
      default: function () {
        return null
      }
    },
  },
  data: function() {
    return {
      messageDateA: '',
      messageAmountA: '',
      messageAmountB: '',
      messageAmountC: '',
      messageAmountD: '',
      messageAmountE: '',
      dateSelectType: '0',
      amountSelectType: '0',
      isInTheLast: true,
      isEqualTo: false,
      isBetweem: false,
      isAfter: false,
      isBefore: false,

      // Checkbox
      isDateChecked: false,
      isAmountChecked: false,
      isStatusChecked: false,
      isPaymentMethodChecked: false,
      filterEnabledCounter: 0
    }
  },
  watch: {
    propsFilterClickEvent: function () {
      this.onClickFilterBtn(this.propsFilterClickEvent)
    },
    scrollPositon: function () {
      this.onScrollFilter()
    },
  },
  created: function () {
    document.body.addEventListener('click', this.closeButton, true);
    window.addEventListener("resize", this.onResizeScreen) 
  },
  mounted: function () {
    this.init()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true);
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    init: function () {
    },
    onChangeCheckbox: function (type) {
      switch (type) {
        case 'date':
          if (this.$refs.dateCheckbox.checked) {
            this.filterEnabledCounter++
            this.isDateChecked = true
          }
          else {
            this.filterEnabledCounter--
            this.isDateChecked = false
          }
          break;
        case 'amount':
          if (this.$refs.amountCheckbox.checked) {
            this.filterEnabledCounter++
            this.isAmountChecked = true
          }
          else {
            this.filterEnabledCounter--
            this.isAmountChecked = false
          }
          break
        case 'status':
          if (this.$refs.statusCheckbox.checked) {
            this.filterEnabledCounter++
            this.isStatusChecked = true
          }
          else {
            this.filterEnabledCounter--
            this.isStatusChecked = false
          }
          break
        case 'payment method':
          if (this.$refs.paymentMethodCheckbox.checked) {
            this.filterEnabledCounter++
            this.isPaymentMethodChecked = true
          }
          else {
            this.filterEnabledCounter--
            this.isPaymentMethodChecked = false
          }
          break
        default:
          break;
      }
      this.$emit('emitFilterCounter', this.filterEnabledCounter)
    },
    onClickClearBtn: function () {
      this.$refs.dateCheckbox.checked = false
      this.$refs.amountCheckbox.checked = false
      this.$refs.statusCheckbox.checked = false
      this.$refs.paymentMethodCheckbox.checked = false
      this.isDateChecked = false
      this.isAmountChecked = false
      this.isStatusChecked = false
      this.isPaymentMethodChecked = false
      this.filterEnabledCounter = 0
      this.$emit('emitFilterCounter', this.filterEnabledCounter)
    },
    onClickDoneBtn:function () {
      this.filterEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onClickDatePicker: function (e) {
      this.$store.commit('DATE_PICKER_EVENT_POINT', e)
    },
    onClickDatePickerRange: function (e) {
      this.$store.commit('RANGE_DATE_PICKER_EVENT_POINT', e)
    },
    onChangeDatePeriodType: function (e) {
      this.dateSelectType = e.target.value
    },
    onChangeAmountPeriodType: function (e) {
      this.amountSelectType = e.target.value
    },
    maxLengthCheck: function (){
    // if (message.length > 3){
    //     this.messageDateA = message.slice(0, 3);
    //   }    
    },

    onClickFilterBtn: function (e) {
      e.stopPropagation()
      
      // GET - dialog element
      this.filterEl = document.getElementById('__chekt-filter')
      if (!this.filterEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.filterEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.filterEl.style.left = this.targetRect.x  +'px'


      // ACTION - toggle show/hidden
      this.filterEl.classList.add('active')
      this.targetEl.classList.add('active')

    },
    closeButton: function (e) {
      if (!this.filterEl) return
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-filter")) return

      // CHECK
      if (!document.getElementById('__chekt-filter').classList.contains('active')) return
      if (document.getElementById('__chekt-datepicker').classList.contains('active')) return
      if (document.getElementById('__chekt-datepicker-range').classList.contains('active')) return
      if (this.filterEl.classList.contains('active')) e.stopPropagation()

      // ACTION
      this.filterEl.classList.remove('active')
      this.targetEl.classList.remove('active')
      this.$emit('emitFilterCounter', this.filterEnabledCounter)
      this.onClickClearBtn()
    },
    onResizeScreen: function () {
      console.log();
      // GET - dialog element
      if (!this.filterEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.filterEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.filterEl.style.left = this.targetRect.x  +'px'

    },
    onScrollFilter: function () {
      // GET - dialog element
      if (!this.filterEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.filterEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.filterEl.style.left = this.targetRect.x  +'px'
    }

  }
}
</script>

<style scoped>

/* FILTER */

#__chekt-filter {
  position: fixed;
  width: 250px;
  box-shadow: 
  0 0 0 1px rgb(136 152 170 / 10%), 
  0 15px 35px 0 rgb(49 49 93 / 10%), 
  0 5px 15px 0 rgb(0 0 0 / 8%);
  border-radius: 5px;
  transform: scale(.8);
  opacity: 0;
  visibility: hidden;
  user-select: none;
  background-color: white;
  z-index: 300;
}
#__chekt-filter.active {
  visibility: visible;
  transform: scale(1);
  opacity: 1;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.filter-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--chekt-blue-gray-lower);
  padding: 10px;
}
.filter-header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  font-size: 14px;
  color: var(--chekt-text-high);
}
.filter-header-text > .filter-header-count {
  font-weight: 500;
  color: var(--chekt-primary-color);
}
.filter-body-item {
  border-top: 1px solid var(--chekt-border);
}
.filter-body-item-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 10px;
}
.filter-body-item-title > .item-text {
  font-size: 14px;
  color: var(--chekt-blue-gray-highest);
}
.filter-body-item-content {
  background-color: var(--chekt-blue-gray-lower);
  border-top: 1px solid var(--chekt-border);
  padding: 10px;
}
.item-main {
  font-size: 13px;
  color: var(--chekt-blue-gray-highest);
}
.filter-body-item-main {
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  padding: 10px 5px;
}
.filter-body-item-main-line {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  grid-gap: 10px;
}


.content-sub {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
}
.content-sub-icon {
  color: var(--chekt-primary-color);
}
.content-sub-body {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 5px;
}
.content-sub-body-text {
  font-size: 12px;
  color: var(--chekt-blue-gray-highest);
}


/* BUTTON */

/* common button */
.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.button-small {
  padding: 5px 8px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}
.button-large {
  padding: 9px 12px;
  color: var(--chekt-text-high);
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}
.button-small:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
.button-large:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}
.button.icon, .button-small.icon, .button-large.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}

/* default color button */

.button.default, .button-small.default {
  background-color: white;
  color: var(--chekt-text-high);
}
/* primary color button */

.button.primary, .button-small.primary {
  background-color: var(--chekt-primary-color);
}
.button.primary:hover, .button-small.primary:hover {
  background-color: var(--chekt-primary-shadow-color);
}
/* danger color button */
.button.danger {
  background-color: var(--chekt-danger-color);
}
.button.danger:hover {
  background-color: var(--chekt-danger-shadow-color);
}
/* success color button */
.button.success {
  background-color: var(--chekt-success-color);
}
.button.success:hover {
  background-color: var(--chekt-success-shadow-color);
}



/* CHECKBOX */

.checkboxes {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

.checkbox {
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.checkbox-text.small {
  font-size: 12px;
  margin-left: 6px;
}
.checkbox-text.large {
  font-size: 16px;
  margin-left: 8px;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark.small {
  height: 12px;
  width: 12px;
  border-radius: 2px;
}
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px ;
}
.checkmark.large {
  height: 16px;
  width: 16px;
  border-radius: 4px;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: var(--chekt-primary-color);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(30 136 229) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  opacity: 1;
}
/* Click animation */
.checkbox input ~ .checkmark {
  transition: background-color .5s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Style the checkmark/indicator -- small */
.checkbox .checkmark.small:after {
  left: 3.5px;
  top: 0px;
  width: 2.1px;
  height: 6.8px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 4px;
  top: 0px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator -- large */
.checkbox .checkmark.large:after {
  left: 5px;
  top: 0px;
  width: 3px;
  height: 9px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}



/* SELECT */

#__chekt-select {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
              rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}

#__chekt-select > .select {
    position: relative;
    z-index: 1;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    margin: 0;
    text-decoration: none;
    vertical-align: middle;
    word-break: normal;
    background: transparent;
    border: 0;
    outline: 0;
    transition: color .24s;
    padding: 3px 6px;
    -webkit-appearance: none;
    width: 100%;
    appearance: none;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    line-height: 20px;
    cursor: pointer;
    padding-right: 29px;

    /* Select에서 폰트가 안먹기 때문에 따로 선언 (폰트 굵기설정이 안됨) */
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    font-size: 13px;
    color: var(--chekt-blue-gray-highest);
}
.select-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  z-index: 2;
  margin-top: -9px;
  transition: color .24s;
  pointer-events: none;
  color: var(--chekt-blue-gray-highest);
}

/* TEXT */

.input-text {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
}
.input-text input {
  width: calc(100% - 20px);
  font-size: 14px;
  border: solid 1px var(--chekt-border);
  padding: 5px 10px;
  border-radius: 3px;
  transition:box-shadow .3s;
}
.input-text input::placeholder {
  color: var(--chekt-gray-low);
}
.input-text input:focus {
  outline: none; 
  box-shadow: 0 0 0 3px #AAD2F5;
}
.text {
  font-size: 14px;
  color: var(--chekt-gray-high);
  text-align: start;
  margin-bottom: 10px;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


</style>
