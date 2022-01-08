<template>
  <div class="spbubbles">
    <div>
      <div 
      class="spbubble-text">
      <div>Hover top</div>
        <div 
        class="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event)" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div class="__chekt-spbubble-with-title" ref="chektSpbubbleWithTitle">
            <div class="__chekt-spbubble-with-title-text">
              <div class="__chekt-spbubble-with-title-text-box">
                <div class="__chekt-spbubble-with-title-text-title">Cat</div>
                <div>Cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</div>
              </div>
              <div class="__chekt-spbubble-with-title-text-box">
                <div class="__chekt-spbubble-with-title-text-title">Dog</div>
                <div>Dog or domestic dog (Canis familiaris) is a domesticated descendant of the wolf, characterized by an upturning tail. The dog derived from an ancient, extinct wolf.</div>
              </div>
              <div class="__chekt-spbubble-with-title-text-link-box">
                <div class="__chekt-spbubble-with-title-text-link">
                  See more detail
                  <div class="bubbleicon"><MyIcon v-bind:icon="'arrow-right'" v-bind:width="12"/></div>
                </div>
              </div>
            </div>
            <div class="__chekt-spbubble-with-title-arrow"></div>
          </div>
        </div>
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
      targetEl: '',
      spbubbleEl: '',
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScroll()
    },
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    onHoverSpbubble: function (e) {
      e.stopPropagation()

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return

      // GET - dialog element
      this.spbubbleEl = this.$refs.chektSpbubbleWithTitle
      if (!this.spbubbleEl) return

      // ADD - position css
      this.targetRect = this.targetEl.getBoundingClientRect();
      this.spbubbleEl.style.top = this.targetRect.y  - this.spbubbleEl.offsetHeight  + 'px'
      this.spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.spbubbleEl.offsetWidth) / 2 ) + 'px'

      // ACTION - show tooltip
      this.spbubbleEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onCloseSpbubble: function () {
    // ACTION - hidden tooltip
    this.spbubbleEl.classList.remove('active')
    this.targetEl.classList.remove('active')
    },
    onScroll: function () {
      if (!this.targetEl) return
      
      // GET - dialog element
      var spbubbleTopEl = this.$refs.chektSpbubbleWithTitle
      if (!spbubbleTopEl) return

      // GET - position rect
      this.targetRect = this.targetEl.getBoundingClientRect();
      if (!this.targetRect) return

      // ADD TOP - position css
      spbubbleTopEl.style.top = this.targetRect.y  - spbubbleTopEl.offsetHeight  + 'px'
      spbubbleTopEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - spbubbleTopEl.offsetWidth) / 2 ) + 'px'

    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-spbubble.css */
.spbubbles {
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
}
.spbubble-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 5px;
}
.spbubble-text > div > .bubbleicon {
  cursor: pointer;
  color: var(--chekt-blue-gray-high);
}
.spbubble-text > div > div:hover {
  color: var(--chekt-gray-high);
}

</style>
