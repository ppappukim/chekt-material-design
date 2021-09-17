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
            Default
          </div>
          <div class="__dealer-subdescription">
            A spinner is an animated spinning icon that lets users know content is being loaded.
          </div>
          <div class="demo">
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-text-high);" />
            </div>
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-text-high);" />
            </div>
            <div class="primary icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="32" style="stroke:var(--chekt-text-high);" />
            </div>
            <div class="primary icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="48" style="stroke:var(--chekt-text-high);" />
            </div>
          </div>
          <div class="demo">
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-blue-gray-higher);" />
            </div>
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-blue-gray-high);" />
            </div>
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-blue-gray-mideum);" />
            </div>
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-danger-color);" />
            </div>
            <div class="default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-success-color);" />
            </div>
          </div>

        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            With Text
          </div>
          <div class="__dealer-subdescription">
            A spinner is an animated spinning icon with text that lets users know content is being loaded.
          </div>
          <div class="demo">
            <div class="icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-blue-gray-higher);" />
              <div class="loading-text">Loading...</div>
            </div>
          </div>
          <div class="demo">
            <div class="icon-column loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-blue-gray-higher);" />
              <div class="loading-text">Loading Data...</div>
            </div>
          </div>

        </section>
        <!-- Button In Lodaing  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon
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
    onClickCloseLabel: function (e) {
      var labelEl = e.currentTarget.parentNode
      labelEl.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  grid-gap: 20px;
  margin: 48px 0;
}

/* common button */

.loading.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 7px;
}
.loading.icon-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
}
.loading-text {
  color: var(--chekt-blue-gray-higher);
}


</style>
