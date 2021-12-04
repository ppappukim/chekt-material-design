<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">With Action</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">With Actions</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Toast
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
              <a :href="githubUrlInfo.Toast" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a toast.
          </div>
          <div class="__dealer-demo">
            <Toast/>
          </div>  
        </section>

        <!-- With Action -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Action</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ToastWithAction" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a toast.
          </div>
          <div class="__dealer-demo">
            <ToastWithAction/>
          </div>  
        </section>

        <!-- With actions -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">With Actions</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.ToastWithActions" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a toast.
          </div>
          <div class="__dealer-demo">
            <ToastWithActions/>
          </div>  
        </section>

      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Toast from '@/components/toasts/Toast'
import ToastWithAction from '@/components/toasts/ToastWithAction'
import ToastWithActions from '@/components/toasts/ToastWithActions'
export default {
  components: {
    MyIcon,
    Toast,
    ToastWithAction,
    ToastWithActions
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
