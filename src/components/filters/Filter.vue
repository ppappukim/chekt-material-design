<template>
  <div>

    <!-- Filter -->
    <div id="__chekt-filter">
      <!-- Header -->
      <div class="__chekt-filter-header">
        <div @click="onClickClearBtn()" class="__chekt-button-small default">Clear</div>
        <div class="__chekt-filter-header-text">
          <div>Filter</div>
          <div v-if="filterEnabledCounter > 0" class="__chekt-filter-header-count">{{filterEnabledCounter}}</div>
        </div>
        <div @click="onClickDoneBtn()" class="__chekt-button-small primary">Done</div>
      </div>
      <!-- Body -->
      <div class="__chekt-filter-body">

        <!-- Item -->
        <div class="__chekt-filter-body-item">

          <!-- Item > Title -->
          <div class="__chekt-filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="__chekt-checkbox">
                <input @change="onChangeCheckbox('date')" type="checkbox" ref="dateCheckbox">
                <span class="__chekt-checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Date</div>
          </div>

          <!-- Item > Content -->
          <div v-if="isDateChecked" class="__chekt-filter-body-item-content">

            <!-- Content main -->
            <div>
              <div class="__chekt-select" style="width:100%;">
                <select @change="onChangeDatePeriodType($event)" class="__chekt-select-content">
                  <option value="0">is in the last</option>
                  <option value="1">is equal to</option>
                  <option value="2">is between</option>
                  <option value="3">is after</option>
                  <option value="4">is before</option>
                </select>
                <div class="__chekt-select-icon">
                  <MyIcon v-bind:icon="'folder-open'" v-bind:width="18" />
                </div>
              </div>
            </div>

            <!-- Content sub 0 -->
            <div v-if="dateSelectType === '0'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="__chekt-input-text">
                  <input v-model="messageDateA" @input="maxLengthCheck(messageDateA)" type="number" placeholder="0">
                </div>
              </div>
              <div style="margin-left:5px;">
                <div class="__chekt-select small" style="width:80px;">
                  <select class="__chekt-select-content">
                    <option value="0">days</option>
                    <option value="1">months</option>
                  </select>
                  <div class="__chekt-select-icon">
                    <MyIcon v-bind:icon="'folder-open'" v-bind:width="18"/>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content sub 1 -->
            <div v-else-if="dateSelectType === '1'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <!-- Datepicker -->
                <div @click="onClickDatePicker($event)" ref="datePickerButton" class="__chekt-button-small default icon">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{datePickerSelectedDate}}</div>
                </div>
            </div>

            <!-- Content sub 2 -->
            <div v-else-if="dateSelectType === '2'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>

              <!-- Range Datepicker -->
              <div>
                <div @click="onClickDatePickerRange($event)" ref="datePickerButton" class="__chekt-button-small default icon">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{rangeDatePickerSelectedStartDate}} - {{rangeDatePickerSelectedEndDate}}</div>
                </div>
              </div>
            </div>

            <!-- Content sub 3 -->
            <div v-else-if="dateSelectType === '3'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <!-- Datepicker -->
              <div>
                <div @click="onClickDatePicker($event)" ref="datePickerButton" class="__chekt-button-small default icon">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{datePickerSelectedDate}}</div>
                </div>
              </div>
            </div>

            <!-- Content sub 4 -->
            <div v-else-if="dateSelectType === '4'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <!-- Datepicker -->
              <div>
                <div @click="onClickDatePicker($event)" ref="datePickerButton" class="__chekt-button-small default icon">
                  <MyIcon v-bind:icon="'calendar'" v-bind:width="16" />
                  <div>{{datePickerSelectedDate}}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Item -->
        <div class="__chekt-filter-body-item">
          <div class="__chekt-filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="__chekt-checkbox">
                <input type="checkbox" @change="onChangeCheckbox('amount')" ref="amountCheckbox">
                <span class="__chekt-checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Amount</div>
          </div>

            <!-- Item > Content -->
          <div v-if="isAmountChecked" class="__chekt-filter-body-item-content">

            <!-- Content main -->
            <div>
              <div class="__chekt-select" style="width:100%;">
                <select @change="onChangeAmountPeriodType($event)" class="__chekt-select-content">
                  <option value="0">is equal to</option>
                  <option value="1">is between</option>
                  <option value="2">is greater than</option>
                  <option value="3">is less than</option>
                </select>
                <div class="__chekt-select-icon">
                  <MyIcon v-bind:icon="'folder-open'" v-bind:width="18" />
                </div>
              </div>
            </div>

            <!-- Content sub 0 -->
            <div v-if="amountSelectType === '0'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="__chekt-input-text" style="width:70px;">
                  <input v-model="messageAmountA" @input="maxLengthCheck(messageAmountA)" type="number" placeholder="0">
                </div>
              </div>
            </div>

            <!-- Content sub 1 -->
            <div v-if="amountSelectType === '1'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div class="__chekt-filter-content-sub-body">
                <div class="__chekt-input-text" style="width:70px;">
                  <input v-model="messageAmountB" @input="maxLengthCheck(messageAmountB)" type="number" placeholder="0">
                </div>
                <div class="__chekt-filter-content-sub-body-text">and</div>
                <div class="__chekt-input-text" style="width:70px;">
                  <input v-model="messageAmountC" @input="maxLengthCheck(messageAmountC)" type="number" placeholder="0">
                </div>
              </div>
            </div>

            <!-- Content sub 2 -->
            <div v-if="amountSelectType === '2'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="__chekt-input-text" style="width:70px;">
                  <input v-model="messageAmountD" @input="maxLengthCheck(messageAmountD)" type="number" placeholder="0">
                </div>
              </div>
            </div>

            <!-- Content sub 3 -->
            <div v-if="amountSelectType === '3'" class="__chekt-filter-content-sub">
              <div class="__chekt-filter-content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
              <div>
                <div class="__chekt-input-text" style="width:70px;">
                  <input v-model="messageAmountE" @input="maxLengthCheck(messageAmountE)" type="number" placeholder="0">
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Item -->
        <div class="__chekt-filter-body-item">
          <div class="__chekt-filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="__chekt-checkbox">
                <input type="checkbox" @change="onChangeCheckbox('status')" ref="statusCheckbox">
                <span class="__chekt-checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Status</div>
          </div>

            <!-- Item > Content -->
          <div v-if="isStatusChecked" class="__chekt-filter-body-item-content">

            <!-- Content main -->
            <div class="__chekt-filter-body-item-main">

              <!-- Checkbox -->
              <div class="__chekt-filter-body-item-main-line">
                <div>
                  <label class="__chekt-checkbox">
                    <input type="checkbox">
                    <span class="__chekt-checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Successed</div>
              </div>

              <!-- Checkbox -->
              <div class="__chekt-filter-body-item-main-line">
                <div>
                  <label class="__chekt-checkbox">
                    <input type="checkbox">
                    <span class="__chekt-checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Incomplete</div>
              </div>

              <!-- Checkbox -->
              <div class="__chekt-filter-body-item-main-line">
                <div>
                  <label class="__chekt-checkbox">
                    <input type="checkbox">
                    <span class="__chekt-checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Pending</div>
              </div>

              <!-- Checkbox -->
              <div class="__chekt-filter-body-item-main-line">
                <div>
                  <label class="__chekt-checkbox">
                    <input type="checkbox">
                    <span class="__chekt-checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Refunded</div>
              </div>

              <!-- Checkbox -->
              <div class="__chekt-filter-body-item-main-line">
                <div>
                  <label class="__chekt-checkbox">
                    <input type="checkbox">
                    <span class="__chekt-checkmark small"></span>
                  </label>
                </div>
                <!-- Text -->
                <div class="item-main">Failed</div>
              </div>

            </div>

          </div>
        </div>

        <!-- Item -->
        <div class="__chekt-filter-body-item">
          <div class="__chekt-filter-body-item-title">
            <!-- Checkbox -->
            <div>
              <label class="__chekt-checkbox">
                <input type="checkbox" @change="onChangeCheckbox('payment method')" ref="paymentMethodCheckbox">
                <span class="__chekt-checkmark"></span>
              </label>
            </div>
            <!-- Text -->
            <div class="item-text">Payment Method</div>
          </div>

            <!-- Item > Content -->
          <div v-if="isPaymentMethodChecked" class="__chekt-filter-body-item-content">

            <!-- Content main -->
            <div class="__chekt-filter-body-item-main" style="padding:0;">
              <div class="__chekt-select" style="width:100%;">
                <select class="__chekt-select-content">
                  <option value="0">Card</option>
                  <option value="1">Bank Account</option>
                  <option value="2">ACH Credit Transfer</option>
                  <option value="3">Apple Pay</option>
                </select>
                <div class="__chekt-select-icon">
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
    datePickerEventPoint: function () {
      return this.$store.getters.datePickerEventPoint
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
      filterEnabledCounter: 0,

      datePickerButtonPointRect: ''
    }
  },
  watch: {
    propsFilterClickEvent: function () {
      this.onClickFilterBtn(this.propsFilterClickEvent)
    },
    scrollPositon: function () {
      this.onScrollFilter()
      this.onScrollDatePicker()
      this.onScrollDatePickerRange()
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
      this.datePickerButtonPointRect = e.currentTarget.getBoundingClientRect();
      this.$store.commit('DATE_PICKER_EVENT_POINT', e)
    },
    onClickDatePickerRange: function (e) {
      this.datePickerButtonPointRect = e.currentTarget.getBoundingClientRect();
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
    },
    onScrollDatePicker: function () {
      // GET - dialog element
      this.datePickerEl = document.getElementById('__chekt-datepicker')

      // GET - target position
      if (!this.datePickerEventPoint) return
      this.datePickerButtonPointRect = this.$refs.datePickerButton.getBoundingClientRect()

      // ADD - position css
      this.datePickerEl.style.top = this.datePickerButtonPointRect.y + this.targetEl.offsetHeight +'px'
      this.datePickerEl.style.left = this.datePickerButtonPointRect.x  +'px'
    },
    onScrollDatePickerRange: function () {
      // GET - dialog element
      this.datePickerEl = document.getElementById('__chekt-datepicker-range')

      // GET - target position
      if (!this.datePickerEventPoint) return
      this.datePickerButtonPointRect = this.$refs.datePickerButton.getBoundingClientRect()

      // ADD - position css
      this.datePickerEl.style.top = this.datePickerButtonPointRect.y + this.targetEl.offsetHeight +'px'
      this.datePickerEl.style.left = this.datePickerButtonPointRect.x  +'px'
    }

  }
}
</script>

<style scoped>
/* src/styles/dealer-filter.css */
</style>
