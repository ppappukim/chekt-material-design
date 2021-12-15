<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Select Range</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Date Picker
        </div>
        <div class="__dealer-description">
          A date time picker allows the user to select an associated date and time.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.DatePicker" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            By default, selecting the date field opens the calendar view. The current date text is bold, underlined, and highlighted blue.
          </div>
          <div class="__dealer-demo">
            <div @click="onClickDatePicker($event)" class="button default icon date">
              <MyIcon v-bind:icon="'calendar'" v-bind:width="18" />
              <div>{{datePickerSelectedDate}}</div>
            </div>
          </div>

        </section>

        <!-- Select Range  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Select Range</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.DatePickerRange" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            By default, selecting the date field opens the calendar view. The current date text is bold, underlined, and highlighted blue.
          </div>
          <div class="__dealer-demo">
            <div @click="onClickDatePickerRange($event)" class="button default icon date">
              <MyIcon v-bind:icon="'calendar'" v-bind:width="18" />
              <div>{{rangeDatePickerSelectedStartDate}} - {{rangeDatePickerSelectedEndDate}}</div>
            </div>
          </div>
        </section>
        <!-- Button In Lodaing  -->
        <!-- ***************  -->
        <section id="dealer-content-move3" style="height:300px;">
        </section>


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
    githubUrlInfo: function () {
      return this.$store.getters.githubUrlInfo
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
  data: function() {
    return {
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScroll()
    },
  },
  created: function () {
    this.$tool.scrollTo(0, 0)
    window.addEventListener('scroll', this.onScroll)
  },
  mounted: function () {
    this.onScroll()
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: { 
    onClickDatePicker: function (e) {
      this.$store.commit('DATE_PICKER_EVENT_POINT', e)
    },
    onClickDatePickerRange: function (e) {
      this.$store.commit('RANGE_DATE_PICKER_EVENT_POINT', e)
    },
    onClickContent: function (type) {
      switch (type) {
      case '1':
        location.href = "#dealer-content-move1";
        break;
      case '2':
        location.href = "#dealer-content-move2";
        break;
      case '3':
        location.href = "#dealer-content-move3";
        break;
      default:
      }
    },
    onScroll: function () {
      var sections = ''
      var contentMenus = ''
      sections = document.querySelectorAll('.__dealer-component-content section')
      contentMenus = document.querySelectorAll('.__dealer-contents-widget .__dealer-contents-body div')
      this.$tool.scrollContentsWidgetMoving(sections, contentMenus)
    },

  }
}
</script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
.button.icon, .button-small.icon, .button-large.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}

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
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}

/* default color button */
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}
</style>
