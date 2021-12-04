<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">With Text</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Loading
        </div>
        <div class="__dealer-description">
          A tag labels UI objects for quick recognition and navigation.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Loading" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            A spinner is an animated spinning icon that lets users know content is being loaded.
          </div>
          <div class="__dealer-demo">
            <Loading/>
          </div>
        </section>

        <!-- With Text  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">With Text</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.LoadingWithText" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            A spinner is an animated spinning icon with text that lets users know content is being loaded.
          </div>
          <div class="__dealer-demo">
            <LoadingWithText/>
          </div>

        </section>
        <!-- With Text  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Loading from '@/components/loadings/Loading'
import LoadingWithText from '@/components/loadings/LoadingWithText'
export default {
  components: {
    MyIcon,
    Loading,
    LoadingWithText
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
