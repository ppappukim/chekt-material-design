<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Table With Checkbox</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Table With Action Button</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Data Table
        </div>
        <div class="__dealer-description">
          Data tables display sets of data across rows and columns.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Table  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Datatable" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The data table’s features are ideal for organizing and displaying data in a UI. The column headers can sort data in ascending or descending order, rows can be expanded to progressively disclose information, and single or batch actions can be taken on rows.<br><br>
            The data table toolbar gives a location for primary buttons, search, filtering, table display settings, and other utilities.
          </div>
          <!-- DEMO TABLE DEFAULT -->
          <div class="__dealer-demo">
            <Datatable/>
          </div>
        </section>


        <!-- Table With Checkbox  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Table With Checkbox</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.DatatableWithCheckbox" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Table may include an checkbox before or after the cell.
          </div>
          <!-- DEMO TABLE DEFAULT -->
          <div class="__dealer-demo">
            <DatatableWithCheckbox/>
          </div>
        </section>

        <!-- Table With Action Button -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Table With Action Button</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.DatatableWithActions" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Data tables are an enhanced version of an HTML table and are used to display tabular data.
          </div>
          <div class="__dealer-demo">
            <DatatableWithActions/>
          </div>
        </section>

        <!-- Table With Sort -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Table With Sort</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.DatatableWithActions" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Data tables are an enhanced version of an HTML table and are used to display tabular data.
          </div>
          <div class="__dealer-demo">
            <DatatableWithSort/>
          </div>
        </section>

      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Datatable from '@/components/datatables/Datatable'
import DatatableWithCheckbox from '@/components/datatables/DatatableWithCheckbox'
import DatatableWithActions from '@/components/datatables/DatatableWithActions'
import DatatableWithSort from '@/components/datatables/DatatableWithSort'
export default {
  components: {
    MyIcon,
    Datatable,
    DatatableWithCheckbox,
    DatatableWithActions,
    DatatableWithSort
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
  },
  created: function () {
    this.$tool.scrollTo(0, 0)
  },
  mounted: function () {
    this.onScrollForContetntWidget()
  },
  beforeDestroy: function () {
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
    onScrollForContetntWidget: function () {
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
