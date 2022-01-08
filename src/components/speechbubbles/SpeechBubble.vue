<template>
  <div class="spbubbles">
    <div>
      <div 
      class="spbubble-text">
      <div>Hover top</div>
        <div 
        class="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'top')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div class="__chekt-spbubble top" ref="spbubbleTop">
            <div class="__chekt-spbubble-text">Cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</div>
            <div class="__chekt-spbubble-arrow"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div 
      class="spbubble-text">
      <div>Hover bottom</div>
        <div 
        class="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'bottom')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div class="__chekt-spbubble bottom" ref="spbubbleBottom">
            <div class="__chekt-spbubble-text">Cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</div>
            <div class="__chekt-spbubble-arrow"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div 
      class="spbubble-text">
      <div>Hover left</div>
        <div 
        class="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'left')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div class="__chekt-spbubble left" ref="spbubbleLeft">
            <div class="__chekt-spbubble-text">Cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</div>
            <div class="__chekt-spbubble-arrow"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div 
      class="spbubble-text">
      <div>Hover right</div>
        <div 
        class="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'right')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div class="__chekt-spbubble right" ref="spbubbleRight">
            <div class="__chekt-spbubble-text">Cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</div>
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
    onHoverSpbubble: function (e, position) {
      e.stopPropagation()

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return

      // ADD - position css
      switch (position) {
        case 'top':
          // GET - dialog element
          this.spbubbleEl = this.$refs.spbubbleTop
          if (!this.spbubbleEl) return

          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y  - this.spbubbleEl.offsetHeight  + 'px'
          this.spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.spbubbleEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'bottom':
          // GET - dialog element
          this.spbubbleEl = this.$refs.spbubbleBottom
          if (!this.spbubbleEl) return

          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y + this.targetEl.offsetHeight +'px'
          this.spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.spbubbleEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'left':
          // GET - dialog element
          this.spbubbleEl = this.$refs.spbubbleLeft
          if (!this.spbubbleEl) return
          
          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.spbubbleEl.offsetHeight) / 2 ) +'px'
          this.spbubbleEl.style.left = this.targetRect.x - this.spbubbleEl.offsetWidth + 5 + 'px'
          break;
        case 'right':
          // GET - dialog element
          this.spbubbleEl = this.$refs.spbubbleRight
          if (!this.spbubbleEl) return
          
          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.spbubbleEl.offsetHeight) / 2 ) +'px'
          this.spbubbleEl.style.left = this.targetRect.x + this.targetEl.offsetWidth - 5 +'px'
          break;
      
        default:
          break;
      }


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
      var spbubbleEl = this.spbubbleEl
      if (!spbubbleEl) return

      // GET - position rect
      this.targetRect = this.targetEl.getBoundingClientRect();
      if (!this.targetRect) return

      // ADD TOP - position css
      if (this.spbubbleEl.classList.contains('top')) {
        spbubbleEl.style.top = this.targetRect.y  - spbubbleEl.offsetHeight  + 'px'
        spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - spbubbleEl.offsetWidth) / 2 ) + 'px'
      }

      // ADD BOTTOM - position css
      if (this.spbubbleEl.classList.contains('bottom')) {
        spbubbleEl.style.top = this.targetRect.y  + this.targetEl.offsetHeight  + 'px'
        spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - spbubbleEl.offsetWidth) / 2 ) + 'px'
      }
      // ADD LEFT - position css
      if (this.spbubbleEl.classList.contains('left')) {
        spbubbleEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - spbubbleEl.offsetHeight) / 2 ) +'px'
        spbubbleEl.style.left = this.targetRect.x - spbubbleEl.offsetWidth + 5 + 'px'
      }
      // ADD RIGHT - position css
      if (this.spbubbleEl.classList.contains('right')) {
        spbubbleEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - spbubbleEl.offsetHeight) / 2 ) +'px'
        spbubbleEl.style.left = this.targetRect.x + this.targetEl.offsetWidth - 5 +'px'
      }
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
