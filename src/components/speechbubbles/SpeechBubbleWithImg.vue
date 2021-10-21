<template>
  <div class="spbubbles">
    <div>
      <div 
      class="spbubble-text">
      <div>Hover top</div>
        <div 
        id="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event)" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div id="__chekt-spbubble-with-img">
            <div class="__chekt-spbubble-text">
              <div class="__chekt-spbubble-text-box">
                <img class="__chekt-spbubble-text-img" src="../../assets/dog.jpg">
              </div>
              <div class="__chekt-spbubble-text-box">
                <div class="__chekt-spbubble-text-title">Dog</div>
                <div> Dog or domestic dog (Canis familiaris) is a domesticated descendant of the wolf, characterized by an upturning tail. The dog derived from an ancient, extinct wolf.</div>
              </div>
            </div>
            <div class="__chekt-spbubble-arrow"></div>
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
      this.spbubbleEl = document.getElementById('__chekt-spbubble-with-img')
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
      var spbubbleTopEl = document.getElementById('__chekt-spbubble-with-img')
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
#__chekt-spbubble-with-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  transform: scale(.8);
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1), transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
#__chekt-spbubble-with-img.active {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1), transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.__chekt-spbubble-text {
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: 20px 20px;
  background-color: white;
  color: var(--chekt-blue-gray-highest);
  font-size: 14px;
  border-radius: 5px;
  line-height: 22px;
  width: 300px;
  box-shadow: 0 0 0 1px rgb(136 152 170 / 10%), 0 15px 35px 0 rgb(49 49 93 / 10%), 0 5px 15px 0 rgb(0 0 0 / 8%)
}
.__chekt-spbubble-text-img {
  width: 100%;
}
.__chekt-spbubble-text-title {
  color: var(--chekt-gray-high);
  font-weight: 500;
}
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

.__chekt-spbubble-arrow {
  background: url(../../assets/bubble-arrow.svg);
  background-repeat: no-repeat;
  background-position: center bottom;
  transform: rotate(180deg);
  z-index: 1;
  width: 20px;
  height: 15px;
}


.spbubble-text > div > .bubbleicon {
  cursor: pointer;
  color: var(--chekt-blue-gray-high);
}
.spbubble-text > div > div:hover {
  color: var(--chekt-gray-high);
}

</style>
