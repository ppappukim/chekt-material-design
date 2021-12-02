<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Dialog With Category</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Dialog With Icon</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Dialog
        </div>
        <div class="__dealer-description">
          An inline dialog is a pop-up container for small amounts of information. It can also contain controls.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Table  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default
          </div>
          <div class="__dealer-subdescription">
            dialogs are displayed when triggered by a user action, usually by clicking a button.</div>
          <!-- DEMO -->
          <div class="__dealer-demo">
            <Dialog/>
          </div>
        </section>

        <!-- Dialog With Category  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Dialog With Category
          </div>
          <div class="__dealer-subdescription">
            Table may include an checkbox before or after the cell.
          </div>
          <!-- DEMO -->
          <div class="__dealer-demo">
            <DialogWithCategory/>
          </div>
        </section>

        <!-- Dialog With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Dialog With Icon
          </div>
          <div class="__dealer-subdescription">
            Table may include an Icon before or after the Text.
          </div>
          <!-- DEMO -->
          <div class="__dealer-demo">
            <DialogWithIcon/>
          </div>

        </section>


      </div>

    </div>
  </div>
</template>

<script>
import Dialog from '@/components/dialogs/Dialog'
import DialogWithCategory from '@/components/dialogs/DialogWithCategory'
import DialogWithIcon from '@/components/dialogs/DialogWithIcon'
export default {
  components: {
    Dialog,
    DialogWithCategory,
    DialogWithIcon
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
  },
  data: function() {
    return {
      defaultTopBtnIsClicked: false,
      defaultRightBtnIsClicked: false,
      defaultLeftBtnIsClicked: false,
      defaultBottomBtnIsClicked: false,
      CategoryBtnIsClicked: false,
      IconBtnIsClicked: false
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
