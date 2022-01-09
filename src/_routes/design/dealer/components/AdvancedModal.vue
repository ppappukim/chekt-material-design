<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">With Actions</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">With Format</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">With Tab</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Advanced Modal
        </div>
        <div class="__dealer-description">
          A text field is an input that allows a user to write or edit text.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Modal" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a modal.
          </div>
          <div class="__dealer-demo">
            <AdvancedModal/>
          </div>  
        </section>

        <!-- With Actions -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Actions</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ModalWithActions" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a modal.
          </div>
          <div class="__dealer-demo">
            <ModalWithActions/>
          </div>  
        </section>

        <!-- With Format -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Format</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ModalWithFormat" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a modal.
          </div>
          <div class="__dealer-demo">
            <ModalWithFormat/>
          </div>  
        </section>

        <!-- With Tab -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Tab</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ModalWithTab" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a modal.
          </div>
          <div class="__dealer-demo">
            <ModalWithTab/>
          </div>  
        </section>

      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import AdvancedModal from '@/components/advancedmodals/AdvancedModal'
import ModalWithActions from '@/components/modals/ModalWithActions'
import ModalWithFormat from '@/components/modals/ModalWithFormat'
import ModalWithTab from '@/components/modals/ModalWithTab'
export default {
  components: {
    MyIcon,
    AdvancedModal,
    ModalWithActions,
    ModalWithFormat,
    ModalWithTab
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
