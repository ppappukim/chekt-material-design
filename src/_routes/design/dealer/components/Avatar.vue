<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default button</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Button with icon</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Button in loading</div>
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
            Default
          </div>
          <div class="__dealer-subdescription">
            A default image is displayed for avatars when a chosen source is unavailable (for example, when there is a problem displaying the image due to an error), or simply unspecified.
          </div>
          <div class="__dealer-demo">
            <Avatar/>
          </div>  
        </section>

        <!-- Avatar with name initial -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top">
            Avatar with name
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
            Avatar with image
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
import Avatar from '@/components/avatars/Avatar'
import AvatarWithName from '@/components/avatars/AvatarWithName'
import AvatarWithImg from '@/components/avatars/AvatarWithImg'
export default {
  components: {
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
