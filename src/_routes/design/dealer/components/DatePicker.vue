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
            Default
          </div>
          <div class="__dealer-subdescription">
            By default, selecting the date field opens the calendar view. The current date text is bold, underlined, and highlighted blue.
          </div>
          <div class="__dealer-demo">
            <DatePicker/>
          </div>

        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top">
            Select Range
          </div>
          <div class="__dealer-subdescription">
            By default, selecting the date field opens the calendar view. The current date text is bold, underlined, and highlighted blue.
          </div>
          <div class="__dealer-demo">
            <DatePickerRange/>
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
import DatePicker from '@/components/datepickers/DatePicker'
import DatePickerRange from '@/components/datepickers/DatePickerRange'
export default {
  components: {
    DatePicker,
    DatePickerRange
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
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

</style>
