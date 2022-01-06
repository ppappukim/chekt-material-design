<template>
  <div>
    <div id="__chekt-datepicker">
      <div class="__chekt-date-picker-header">
        <div @click="changeMonth(-1)" class="__chekt-date-picker-header-icon">
          <MyIcon v-bind:icon="'arrow-left'" v-bind:width="18" />
        </div>
        <div class="__chekt-date-picker-header-info">
          <div>{{current_month_text}}</div>
          <div>{{current_year}}</div>
        </div>
        <div @click="changeMonth(1)" class="__chekt-date-picker-header-icon">
          <MyIcon v-bind:icon="'arrow-right'" v-bind:width="18" />
        </div>
      </div>
      <table class="__chekt-date-picker-table">
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
            v-for="(week, i) in dates"
            v-bind:key="i">
            <td
            @click="setDate(day)"
            v-for="(day, i) in week"
            v-bind:key="i"
            v-bind:class="{ hasday:day ,selected:isSelectedDay === day && day && current_year + '-' + current_month === savedYearMonth}">
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
    datePickerEventPoint: function () {
      return this.$store.getters.datePickerEventPoint
    },
  },
  data: function() {
    return {
      current_year: (new Date()).getFullYear(),
      current_month: (new Date()).getMonth() + 1,
      dates: [],
      datePickerEl: '',
      buttonDate: '',
      isSelectedDay: '',
      current_month_text: '',
      current_month_text_simple: '',
      savedYearMonth: '',
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScrollDatePicker()
    },
    buttonDate: function () {
      this.$store.commit('DATE_PICKER_SELECTED_DATE', this.buttonDate)
    },
    datePickerEventPoint: function () {
      this.onClickDatePicker(this.datePickerEventPoint)
    }
  },
  created: function () {
    document.body.addEventListener('click', this.closeButton, true)
    window.addEventListener("resize", this.onResizeScreen)
  },
  mounted: function () {
    this.init()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true)
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: { 
    init: function () {
      this.changeYearMonth(this.current_year,this.current_month);
    },
    checkLeapYear: function (year) {
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
    getFirstDayOfWeek: function (year, month) {
      if(month < 10) month = "0" + month;

      return (new Date(year+"-"+month+"-01")).getDay();
    },
    changeYearMonth: function (year, month) {
      let month_day = [31,28,31,30,31,30,31,31,30,31,30,31];

      if(month == 2) {
        if(this.checkLeapYear(year)) month_day[1] = 29;
      }

      let first_day_of_week = this.getFirstDayOfWeek(year, month);
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

      this.renderCalendar(arr_calendar);
      this.getMonthToText()
    },
    renderCalendar: function (data) {
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
      this.dates = h
    },
    setDate: function (day) {
      if (!day) return
      this.buttonDate = day + ' ' + this.current_month_text_simple + ", " + this.current_year
      this.isSelectedDay = day
      this.getMonthToText()

      this.savedYearMonth = this.current_year + '-' + this.current_month

      this.datePickerEl.classList.remove('active')

    },
    changeMonth: function (diff) {

      this.current_month = this.current_month + diff;

      if(this.current_month == 0) {
        this.current_year = this.current_year - 1;
        this.current_month = 12;
      }
      else if(this.current_month == 13) {
        this.current_year = this.current_year + 1;
        this.current_month = 1;
      }
      

      this.changeYearMonth(this.current_year,this.current_month)
    },
    getMonthToText: function () {
      switch (this.current_month) {
        case 1:
          this.current_month_text = 'January'
          this.current_month_text_simple = 'Jan'
          break;
        case 2:
          this.current_month_text = 'February'
          this.current_month_text_simple = 'Feb'
          break;
        case 3:
          this.current_month_text = 'March'
          this.current_month_text_simple = 'Mar'
          break;
        case 4:
          this.current_month_text = 'April'
          this.current_month_text_simple = 'Apr'
          break;
        case 5:
          this.current_month_text = 'May'
          this.current_month_text_simple = 'May'
          break;
        case 6:
          this.current_month_text = 'June'
          this.current_month_text_simple = 'Jun'
          break;
        case 7:
          this.current_month_text = 'July'
          this.current_month_text_simple = 'Jul'
          break;
        case 8:
          this.current_month_text = 'August'
          this.current_month_text_simple = 'Aug'
          break;
        case 9:
          this.current_month_text = 'September'
          this.current_month_text_simple = 'Sep'
          break;
        case 10:
          this.current_month_text = 'October'
          this.current_month_text_simple = 'Oct'
          break;
        case 11:
          this.current_month_text = 'November'
          this.current_month_text_simple = 'Nov'
          break;
        case 12:
          this.current_month_text = 'December'
          this.current_month_text_simple = 'Dec'
          break;

        default:
          break;
      }
    },
    onClickDatePicker: function (e) {

      // 달력 다시 켯을때 선택한 날짜가 있는 달로 가기.
      if (this.savedYearMonth) {
        var savedYearMonthSplit = this.savedYearMonth.split('-')
        var year = parseInt(savedYearMonthSplit[0])
        var month = parseInt(savedYearMonthSplit[1])

        this.current_year = year
        this.current_month = month

        this.changeYearMonth(year, month)
      }

      e.stopPropagation()
      
      // GET - dialog element
      this.datePickerEl = document.getElementById('__chekt-datepicker')
      if (!this.datePickerEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.datePickerEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.datePickerEl.style.left = this.targetRect.x  +'px'


      // ACTION - toggle show/hidden
      this.datePickerEl.classList.add('active')
      this.targetEl.classList.add('active')

    },
    closeButton: function (e) {
      if (!this.datePickerEl) return
      // closest() - #__chekt-datepicker 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-datepicker")) return
      if (this.datePickerEl.classList.contains('active')) e.stopPropagation()
      this.datePickerEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onResizeScreen: function () {
      // GET - dialog element
      if (!this.datePickerEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.datePickerEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.datePickerEl.style.left = this.targetRect.x  +'px'

    },
    onScrollDatePicker: function () {
      // GET - dialog element
      if (!this.datePickerEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.datePickerEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.datePickerEl.style.left = this.targetRect.x  +'px'

    }
    // 참고 코드링크
    // https://github.com/seungwongo/dev_dignity/blob/master/examples/html/calendar.html

  }
}
</script>


<style scoped>
/* src/styles/dealer-datepicker.css */
</style>
