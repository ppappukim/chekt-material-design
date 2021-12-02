<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default avatar</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Avatar with name</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Avatar with image</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Avatar
        </div>
        <div class="__dealer-description">
          An avatar is a visual representation of a user or entity.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div> 
            <span class="__dealer-github">
              <a href="https://github.com/ppappukim/chekt-material-design/blob/dev/src/components/avatars/Avatar.vue" target="_blank">
              <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            A default image is displayed for avatars when a chosen source is unavailable (for example, when there is a problem displaying the image due to an error), or simply unspecified.
          </div>
          <div class="__dealer-demo">
            <Avatar/>
          </div>  
        </section>

        <!-- Avatar with name -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Avatar with name</div> 
            <span class="__dealer-github">
              <a href="https://github.com/ppappukim/chekt-material-design/blob/dev/src/components/avatars/AvatarWithName.vue" target="_blank">
              <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Allows the user to select a single item from a dropdown list of options.
          </div>
          <div class="__dealer-demo">
            <AvatarWithName/>
          </div>  
        </section>

        <!-- Avatar with image -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Avatar with image</div> 
            <span class="__dealer-github">
              <a href="https://github.com/ppappukim/chekt-material-design/blob/dev/src/components/avatars/AvatarWithImg.vue" target="_blank">
              <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Allows the user to select a single item from a dropdown list of options.
          </div>
          <div class="__dealer-demo">
            <AvatarWithImg/>
          </div>  
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Avatar from '@/components/avatars/Avatar'
import AvatarWithName from '@/components/avatars/AvatarWithName'
import AvatarWithImg from '@/components/avatars/AvatarWithImg'
export default {
  components: {
    MyIcon,
    Avatar,
    AvatarWithName,
    AvatarWithImg
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
