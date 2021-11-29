<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Toggle with text</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Toggle
        </div>
        <div class="__dealer-description">
          A toggle is used to view or switch between enabled or disabled states.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default
          </div>
          <div class="__dealer-subdescription">
            The default form of a toggle. For pages with lots of toggles, use the default size.
          </div>
          <div class="__dealer-demo">
            <Toggle/>
          </div>  
        </section>

        <!-- Toggle with text -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Toggle with text
          </div>
          <div class="__dealer-subdescription">
            The default form of a toggle. For pages with lots of toggles, use the default size.
          </div>
          <div class="__dealer-demo">
            <ToggleWithText/>
          </div>  
        </section>

      </div>

    </div>
  </div>
</template>

<script>
import Toggle from '@/components/toggles/Toggle'
import ToggleWithText from '@/components/toggles/ToggleWithText'
export default {
  components: {
    Toggle,
    ToggleWithText
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
