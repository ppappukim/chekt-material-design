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
          Label
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
            Default Label
          </div>
          <div class="__dealer-subdescription">
            The default form of a button, used for most cases. They are not impactful enough to represent the primary action in a container.
          </div>
          <div class="demo">
            <div class="label default">Label</div>
            <div class="label normal">Normal</div>
            <div class="label danger">Danger</div>
            <div class="label success">Success</div>
            <div class="label good">Good</div>
            <div class="label other">Other</div>
            <div class="label disabled">Disabled</div>
          </div>
          <div class="demo">
            <div class="label small default">
              Label

            </div>
            <div class="label large default">Label</div>
          </div>

        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Removable
          </div>
          <div class="__dealer-subdescription">
            Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or in multi-select controls.
          </div>
          <div class="demo">
            <div class="label large normal icon">
              bobby@chekt.com
              <div @click="onClickCloseLabel($event)" class="label-icon">
                <MyIcon v-bind:icon="'close'" v-bind:width="18"/>
              </div>
            </div>
            <div class="label large normal icon">
              bobbykim@chekt.c...
              <div @click="onClickCloseLabel($event)" class="label-icon">
                <MyIcon v-bind:icon="'close'" v-bind:width="18"/>
              </div>
            </div>
          </div>

        </section>
        <!-- Button In Lodaing  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            With Icon
          </div>
          <div class="__dealer-subdescription">
            Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or in multi-select controls.
          </div>
          <div class="demo">
            <div class="label default icon">
              <div class="label-icon">
                <MyIcon v-bind:icon="'person-circle'" v-bind:width="16"/>
              </div>
              bobbyk@chekt.com
            </div>
            <div class="label default large icon">
              <div class="label-icon">
                <MyIcon v-bind:icon="'person-circle'" v-bind:width="18"/>
              </div>
              trevors@chekt.com
            </div>
            <div class="label default small icon">
              <div class="label-icon">
                <MyIcon v-bind:icon="'person-circle'" v-bind:width="14"/>
              </div>
              kevinp@chekt.com
            </div>
          </div>
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
.label {
  padding: 3px 10px;
  color: var(--chekt-primary-color);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: #E9F3FC;
}
.label.small {
  padding: 2px 8px;
  color: var(--chekt-primary-color);
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  background-color: #E9F3FC;
}
.label.large {
  padding: 4px 12px;
  color: var(--chekt-primary-color);
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  background-color: #E9F3FC;
}

.label.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}
.label-icon {
  cursor: pointer;
}
.label-icon:hover {
  color: var(--chekt-primary-color);
}
/* normal color button */
.label.normal {
  color: var(--chekt-blue-gray-higher);
  background-color: var(--chekt-blue-gray-mideum);
}
/* danger color button */
.label.danger {
  color: var(--chekt-danger-color);
  background-color: #FAECF0;
}
/* success color button */
.label.success {
  color: var(--chekt-success-color);
  background-color: #E9F6F1;
}
/* good color button */
.label.good {
  color: #366202;
  background-color: #EBEFE6;
}
/* other color button */
.label.other {
  color: #983705;
  background-color: #F5EBE6;
}
/* disabled color button */
.label.disabled {
  color: var(--chekt-blue-gray-high);
  background-color: #EEF0F2;
}


</style>
