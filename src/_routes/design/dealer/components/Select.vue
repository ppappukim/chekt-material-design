<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Select with search</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Select with options</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Select
        </div>
        <div class="__dealer-description">
          Select allows users to make a single selection or multiple selections from a list of options.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Select" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Allows the user to select a single item from a dropdown list of options.
          </div>
          <div class="__dealer-demo">
            <Select/>
          </div>
        </section>

        <!-- Select with search  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Select with search</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.SelectWithSearch" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Discrete sliders can be adjusted to a specific value by referencing its value indicator.
            Allowed selections may be organized and indicated with tick marks that a slider thumb will snap to. 
          </div>
          <div class="__dealer-demo">
            <SelectWithSearch/>
          </div>

        </section>
        <!-- Select with options -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Select with options</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.SelectWithOption" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Range used with the value.
          </div>
          <div class="__dealer-demo">
            <SelectWithOption/>
          </div>
        </section>

        <!-- Default With Input  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Select With Input</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Select" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Allows the user to select a single item from a dropdown list of options.
          </div>
          <div class="__dealer-demo">
            <SelectWithInput/>
          </div>
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Select from '@/components/selects/Select'
import SelectWithSearch from '@/components/selects/SelectWithSearch'
import SelectWithOption from '@/components/selects/SelectWithOption'
import SelectWithInput from '@/components/selects/SelectWithInput'
export default {
  components: {
    MyIcon,
    Select,
    SelectWithSearch,
    SelectWithOption,
    SelectWithInput
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
    githubUrlInfo: function () {
      return this.$store.getters.githubUrlInfo
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
