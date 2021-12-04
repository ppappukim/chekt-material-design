<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">With Title</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">With Image</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Speech Bubble
        </div>
        <div class="__dealer-description">
          Speech bubbles for standard interactive messages and pickers include a title, and can optionally include additional text and an image (which can be a thumbnail). Optional text includes a primary, secondary, and tertiary subtitle, and an image title and subtitle.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.SpeechBubble" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a speech bubble.
          </div>
          <div class="__dealer-demo">
            <SpeechBubble/>
          </div>  
        </section>


        <!-- With Title -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Title</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.SpeechBubbleWithTitle" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a speech bubble.
          </div>
          <div class="__dealer-demo">
            <SpeechBubbleWithTitle/>
          </div>  
        </section>

        <!-- With Img -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Img</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.SpeechBubbleWithImg" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a speech bubble.
          </div>
          <div class="__dealer-demo">
            <SpeechBubbleWithImg/>
          </div>  
        </section>

      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import SpeechBubble from '@/components/speechbubbles/SpeechBubble'
import SpeechBubbleWithTitle from '@/components/speechbubbles/SpeechBubbleWithTitle'
import SpeechBubbleWithImg from '@/components/speechbubbles/SpeechBubbleWithImg'
export default {
  components: {
    MyIcon,
    SpeechBubble,
    SpeechBubbleWithTitle,
    SpeechBubbleWithImg
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
