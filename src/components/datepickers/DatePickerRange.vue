<template>
  <div>
    <!-- START CARLANDAR -->
    <div id="__chekt-datepicker-range">
      <div class="__chekt-range-date-picker-header">
        <div @click="changeRangeMonth(-1)" class="__chekt-range-date-picker-header-icon">
          <MyIcon v-bind:icon="'arrow-left'" v-bind:width="18" />
        </div>
        <div class="__chekt-range-date-picker-header-info">
          <div>{{range_current_month_text}}</div>
          <div>{{range_current_year}}</div>
        </div>
        <div @click="changeRangeMonth(1)" class="__chekt-range-date-picker-header-icon">
          <MyIcon v-bind:icon="'arrow-right'" v-bind:width="18" />
        </div>
      </div>
      <table class="__chekt-range-date-picker-table">
        <thead>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(week, i) in rangeDates"
            v-bind:key="i">
            
            <td
            @click="onClickRangeDate(day)"
            v-for="(day, i) in week"
            v-bind:key="i"
            v-bind:class="{ 
              hasday:day,
              startday:new Date(range_current_year, range_current_month, day).getTime() == new Date(rangeSavedStartYear, rangeSavedStartMonth, rangeIsSelectedStartDay).getTime() && day,
              endday:new Date(range_current_year, range_current_month, day).getTime() == new Date(rangeSavedEndYear, rangeSavedEndMonth, rangeIsSelectedEndDay).getTime() && day,
              range: new Date(rangeSavedStartYear, rangeSavedStartMonth, rangeIsSelectedStartDay).getTime() < new Date(range_current_year, range_current_month, day).getTime() && day && rangeIsSelectedStartDay,
              rangeremove: new Date(rangeSavedEndYear, rangeSavedEndMonth, rangeIsSelectedEndDay).getTime() < new Date(range_current_year, range_current_month, day).getTime() && day && rangeIsSelectedEndDay,
              disable: new Date(rangeSavedStartYear, rangeSavedStartMonth, rangeIsSelectedStartDay).getTime() > new Date(range_current_year, range_current_month, day).getTime() && day && rangeIsSelectedStartDay && !rangeIsSelectedEndDay,
              }">
              {{day}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
    rangeDatePickerEventPoint: function () {
      return this.$store.getters.rangeDatePickerEventPoint
    },
  },
  data: function() {
    return {
      range_current_year: (new Date()).getFullYear(),
      range_current_month: (new Date()).getMonth() + 1,
      rangeDates: [],
      rangeLowDates: [],
      rangeDatePickerEl: '',

      rangeButtonDateStart: '',
      rangeButtonDateEnd: '',

      range_current_month_text: '',
      range_current_month_text_simple: '',
      rangeIsSelectedStartDay: '',
      rangeIsSelectedEndDay: '',

      rangeSavedStartMonth: '',
      rangeSavedStartYear: '',
      rangeSavedEndMonth: '',
      rangeSavedEndYear: '',
    }
  },
  watch: {
    scrollPositon: function () {
      this.rangeOnScrollDatePicker()
    },
    rangeDatePickerEventPoint: function () {
      this.onClickDatePickerRange(this.rangeDatePickerEventPoint)
    },
    rangeButtonDateStart: function () {
      this.$store.commit('RANGE_DATE_PICKER_SELECTED_START_DATE', this.rangeButtonDateStart)
    },
    rangeButtonDateEnd: function () {
      this.$store.commit('RANGE_DATE_PICKER_SELECTED_END_DATE', this.rangeButtonDateEnd)
    },
  },
  created: function () {
    document.body.addEventListener('click', this.closeRangeButton, true)
    window.addEventListener("resize", this.onResizeScreenRange)
  },
  mounted: function () {
    this.init()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeRangeButton, true)
    window.removeEventListener("resize", this.onResizeScreenRange)
  },
  methods: { 
    init: function () {
      this.rangeChangeYearMonth(this.range_current_year,this.range_current_month);
    },
    rangeCheckLeapYear: function (year) {
      // 윤년 계산
      if(year%400 == 0) {
        return true;
      }else if(year%100 == 0) {
        return false;
      }else if(year%4 == 0) {
        return true;
      }else {
        return false;
      }
    },
    getRangeFirstDayOfWeek: function (year, month) {
      if(month < 10) month = "0" + month;

      return (new Date(year+"-"+month+"-01")).getDay();
    },
    rangeChangeYearMonth: function (year, month) {

      let month_day = [31,28,31,30,31,30,31,31,30,31,30,31];

      if(month == 2) {
        if(this.rangeCheckLeapYear(year)) month_day[1] = 29;
      }

      let first_day_of_week = this.getRangeFirstDayOfWeek(year, month);
      let arr_calendar = [];
      for(let i=0 ; i<first_day_of_week ; i++){
        arr_calendar.push("");
      }

      for(let i=1 ; i<=month_day[month-1] ; i++) {
        arr_calendar.push(String(i));
      }

      let remain_day = 7 - (arr_calendar.length%7);
      if(remain_day < 7) {
        for(let i=0 ; i<remain_day ; i++) {
          arr_calendar.push("");
        }
      }

      this.renderRangeCalendar(arr_calendar);
      this.getRangeMonthToText()
    },
    renderRangeCalendar: function (data) {
      this.rangeLowDates = data
      let h = [];
      h[1] = []
      h[2] = []
      h[3] = []
      h[4] = []
      h[5] = []
      h[6] = []

      for(let i =0 ; i<data.length ; i++) {
        if(i>=0 && i<7) {
          h[1].push(data[i]);
        }
        else if(i>=7 && i<14) {
          h[2].push(data[i]);
        }
        else if(i>=14 && i<21) {
          h[3].push(data[i]);
        }
        else if(i>=21 && i<28) {
          h[4].push(data[i]);
        }
        else if(i>=28 && i<35) {
          h[5].push(data[i]);
        }
        else if(i>=35) {
          h[6].push(data[i]);
        }

      }
      this.rangeDates = h
    },
    onClickRangeDate: function (day) {
      // CHECK - day data
      if (!day) return

      // CHECK - Start day & End day
      if (this.rangeIsSelectedStartDay && this.rangeIsSelectedEndDay) {

        // PUT - Start date Data
        this.rangeIsSelectedStartDay = day
        this.rangeSavedStartYear = this.range_current_year
        this.rangeSavedStartMonth = this.range_current_month
        this.rangeButtonDateStart = day + ' ' + this.range_current_month_text_simple + ", " + this.range_current_year

        // DELETE - End date Data
        this.rangeIsSelectedEndDay = ''
        this.rangeButtonDateEnd = 'End day'
      }
      // CHECK - Start day
      else if (!this.rangeIsSelectedStartDay) {
        // PUT - Start date Data
        this.rangeIsSelectedStartDay = day
        this.rangeSavedStartYear = this.range_current_year
        this.rangeSavedStartMonth = this.range_current_month
        this.rangeButtonDateStart = day + ' ' + this.range_current_month_text_simple + ", " + this.range_current_year
      }
      else {
        // PUT - End date Data
        this.rangeButtonDateEnd = day + ' ' + this.range_current_month_text_simple + ", " + this.range_current_year
        this.rangeIsSelectedEndDay = day
        this.rangeSavedEndYear = this.range_current_year
        this.rangeSavedEndMonth = this.range_current_month

        this.rangeDatePickerEl.classList.remove('active')
      }



      this.getRangeMonthToText()

    },
    changeRangeMonth: function (diff) {

      this.range_current_month = this.range_current_month + diff;

      if(this.range_current_month == 0) {
        this.range_current_year = this.range_current_year - 1;
        this.range_current_month = 12;
      }
      else if(this.range_current_month == 13) {
        this.range_current_year = this.range_current_year + 1;
        this.range_current_month = 1;
      }
      
      this.rangeChangeYearMonth(this.range_current_year,this.range_current_month)

    },
    getRangeMonthToText: function () {
      switch (this.range_current_month) {
        case 1:
          this.range_current_month_text = 'January'
          this.range_current_month_text_simple = 'Jan'
          break;
        case 2:
          this.range_current_month_text = 'February'
          this.range_current_month_text_simple = 'Feb'
          break;
        case 3:
          this.range_current_month_text = 'March'
          this.range_current_month_text_simple = 'Mar'
          break;
        case 4:
          this.range_current_month_text = 'April'
          this.range_current_month_text_simple = 'Apr'
          break;
        case 5:
          this.range_current_month_text = 'May'
          this.range_current_month_text_simple = 'May'
          break;
        case 6:
          this.range_current_month_text = 'June'
          this.range_current_month_text_simple = 'Jun'
          break;
        case 7:
          this.range_current_month_text = 'July'
          this.range_current_month_text_simple = 'Jul'
          break;
        case 8:
          this.range_current_month_text = 'August'
          this.range_current_month_text_simple = 'Aug'
          break;
        case 9:
          this.range_current_month_text = 'September'
          this.range_current_month_text_simple = 'Sep'
          break;
        case 10:
          this.range_current_month_text = 'October'
          this.range_current_month_text_simple = 'Oct'
          break;
        case 11:
          this.range_current_month_text = 'November'
          this.range_current_month_text_simple = 'Nov'
          break;
        case 12:
          this.range_current_month_text = 'December'
          this.range_current_month_text_simple = 'Dec'
          break;

        default:
          break;
      }
    },
    onClickDatePickerRange: function (e) {

      if (this.rangeSavedStartYear && this.rangeSavedStartMonth) {
        var year = this.rangeSavedStartYear
        var month = this.rangeSavedStartMonth
        
        this.range_current_year = year
        this.range_current_month = month

        this.rangeChangeYearMonth(year, month)
      }

      e.stopPropagation()
      
      // GET - dialog element
      this.rangeDatePickerEl = document.getElementById('__chekt-datepicker-range')
      if (!this.rangeDatePickerEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.rangeDatePickerEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.rangeDatePickerEl.style.left = this.targetRect.x  +'px'


      // ACTION - toggle show/hidden
      this.rangeDatePickerEl.classList.add('active')
      this.targetEl.classList.add('active')

    },
    closeRangeButton: function (e) {
      if (!this.rangeDatePickerEl) return
      // closest() - #__chekt-datepicker-range 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-datepicker-range")) return
      if (this.rangeDatePickerEl.classList.contains('active')) e.stopPropagation()
      this.rangeDatePickerEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onResizeScreenRange: function () {
      // GET - dialog element
      if (!this.rangeDatePickerEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.rangeDatePickerEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.rangeDatePickerEl.style.left = this.targetRect.x  +'px'

    },
    rangeOnScrollDatePicker: function () {
      // GET - dialog element
      if (!this.rangeDatePickerEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.rangeDatePickerEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.rangeDatePickerEl.style.left = this.targetRect.x  +'px'

    }

  }
}
</script>


<style scoped>
/* src/styles/dealer-datepicker.css */
</style>
