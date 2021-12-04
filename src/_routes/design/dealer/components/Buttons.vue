<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Button with icon</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Button in loading</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Buttons
        </div>
        <div class="__dealer-description">
          A button triggers an event or action. They let users know what will happen next.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Button" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a button, used for most cases. They are not impactful enough to represent the primary action in a container.
          </div>
          <div class="__dealer-demo">
            <Button/>
          </div>
        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Button With Icon</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ButtonWithIcon" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Buttons may include an icon before or after the text.
          </div>
          <div class="__dealer-demo">
            <ButtonWithIcon/>
          </div>
        </section>

        <!-- Button In Lodaing  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Button In Lodaing</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ButtonWithLoading" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Set isLoading to indicate the button is loading. The button text is hidden and a spinner is shown in its place, while maintaining the width that it would have if the text were visible.
          </div>
          <div class="__dealer-demo">
            <ButtonWithLoading/>
          </div>
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Button from '@/components/buttons/Button'
import ButtonWithIcon from '@/components/buttons/ButtonWithIcon'
import ButtonWithLoading from '@/components/buttons/ButtonWithLoading'
export default {
  components: {
    MyIcon,
    Button,
    ButtonWithIcon,
    ButtonWithLoading
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
