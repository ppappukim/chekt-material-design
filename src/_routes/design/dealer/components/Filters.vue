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
          Filters
        </div>
        <div class="__dealer-description">
          An inline filter is a pop-up container for small amounts of information. It can also contain controls.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Filter  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Dialog" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Filter are displayed when triggered by a user action, usually by clicking a button.</div>
          <!-- DEMO -->
          <div class="__dealer-demo">

            <!-- Button -->
            <div @click="onClickFilterBtn($event)" class="button default icon">
              <MyIcon v-bind:icon="'filter'" v-bind:width="18" />
              Filter
            </div>
          </div>
        </section>

      </div>

    </div>
    <Filters
    :propsFilterClickEvent="propsFilterClickEvent"
    />
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Filters from '@/components/filters/Filter'
export default {
  components: {
    MyIcon,
    Filters,
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
      propsFilterClickEvent: null,
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
    onClickFilterBtn: function (e) {
      this.propsFilterClickEvent = e
    },
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
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 20px;
  }
  .button.icon, .button-small.icon, .button-large.icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
  }

  /* common button */
  .button {
    padding: 7px 10px;
    color: white;
    border-radius: 5px;
    border: solid 1px var(--chekt-border);
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }
  .button:hover {
    transition: background-color .3s, box-shadow .3s;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  }

  /* default color button */
  .button.default {
    background-color: white;
    color: var(--chekt-text-high);
  }
</style>
