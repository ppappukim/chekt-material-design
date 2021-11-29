<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Double range</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Range with value</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Range
        </div>
        <div class="__dealer-description">
          A range lets users choose an approximate value on a slider.
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
            The default form of a range.
          </div>
          <div class="__dealer-demo">
            <Range/>
          </div>

          
        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Double range
          </div>
          <div class="__dealer-subdescription">
            Discrete sliders can be adjusted to a specific value by referencing its value indicator.
            Allowed selections may be organized and indicated with tick marks that a slider thumb will snap to. 
          </div>
          <div class="__dealer-demo">
            <DoubleRange/>
          </div>

        </section>
        <!-- Button In Lodaing  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Range with value
          </div>
          <div class="__dealer-subdescription">
            Range used with the value.
          </div>
          <div class="__dealer-demo">
            <RangeWithValue/>
          </div>
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import Range from '@/components/ranges/Range'
import DoubleRange from '@/components/ranges/DoubleRange'
import RangeWithValue from '@/components/ranges/RangeWithValue'
export default {
  components: {
    Range,
    DoubleRange,
    RangeWithValue
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
  },
  mounted: function () {
    this.onScroll()
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
