<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Secondary Label</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Removable</div>
        <div class="dealer-content-move3" @click="onClickContent('4')">With Icon</div>
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

        <!-- Default Label  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Default</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.Label" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The default form of a label, used for most cases. They are not impactful enough to represent the primary action in a container.
          </div>
          <div class="__dealer-demo">
            <Label/>
          </div>
        </section>

        <!-- Secondary Label  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            <div class="__dealer-subtitle-text">Secondary Label</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.LabelSecondary" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            The Secondary form of a label, used for most cases. They are not impactful enough to represent the primary action in a container.
          </div>
          <div class="__dealer-demo">
            <LabelSecondary/>
          </div>
        </section>

        <!-- Removable Label  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Removable Label</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.RemovableLabel" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or in multi-select controls.
          </div>
          <div class="__dealer-demo">
            <RemovableLabel/>
          </div>
        </section>

        <!-- Label With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            <div class="__dealer-subtitle-text">Label With Icon</div>
            <span class="__dealer-github">
              <a :href="githubUrlInfo.LabelWithIcon" target="_blank">
                <MyIcon v-bind:icon="'github'" v-bind:width="24" />
              </a>
            </span>
          </div>
          <div class="__dealer-subdescription">
            Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or in multi-select controls.
          </div>
          <div class="__dealer-demo">
            <LabelWithIcon/>
          </div>
        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Label from '@/components/labels/Label'
import RemovableLabel from '@/components/labels/RemovableLabel'
import LabelWithIcon from '@/components/labels/LabelWithIcon'
import LabelSecondary from '@/components/labels/LabelSecondary.vue'
export default {
  components: {
    MyIcon,
    Label,
    RemovableLabel,
    LabelWithIcon,
    LabelSecondary
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
    onClickCloseLabel: function (e) {
      var labelEl = e.currentTarget.parentNode
      labelEl.style.display = 'none'
    }
  }
}
</script>

<style scoped>

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
