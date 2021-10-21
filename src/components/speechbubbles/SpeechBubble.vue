<template>
  <div class="spbubbles">
    <div>
      <div 
      class="spbubble-text">
      <div>Hover top</div>
        <div 
        id="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'top')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div id="__chekt-spbubble-top">
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
        id="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'bottom')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div id="__chekt-spbubble-bottom">
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
        id="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'left')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div id="__chekt-spbubble-left">
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
        id="__chekt-spbubble-wrapper"
        @mouseover="onHoverSpbubble($event, 'right')" 
        @mouseleave="onCloseSpbubble($event)">
          <MyIcon class="bubbleicon" v-bind:icon="'info'" v-bind:width="14"/>
          <div id="__chekt-spbubble-right">
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
          this.spbubbleEl = document.getElementById('__chekt-spbubble-top')
          if (!this.spbubbleEl) return

          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y  - this.spbubbleEl.offsetHeight  + 'px'
          this.spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.spbubbleEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'bottom':
          // GET - dialog element
          this.spbubbleEl = document.getElementById('__chekt-spbubble-bottom')
          if (!this.spbubbleEl) return

          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y + this.targetEl.offsetHeight +'px'
          this.spbubbleEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.spbubbleEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'left':
          // GET - dialog element
          this.spbubbleEl = document.getElementById('__chekt-spbubble-left')
          if (!this.spbubbleEl) return
          
          // ADD - position css
          this.targetRect = this.targetEl.getBoundingClientRect();
          this.spbubbleEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.spbubbleEl.offsetHeight) / 2 ) +'px'
          this.spbubbleEl.style.left = this.targetRect.x - this.spbubbleEl.offsetWidth + 5 + 'px'
          break;
        case 'right':
          // GET - dialog element
          this.spbubbleEl = document.getElementById('__chekt-spbubble-right')
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
      var spbubbleTopEl = document.getElementById('__chekt-spbubble-top')
      var spbubbleBottomEl = document.getElementById('__chekt-spbubble-bottom')
      var spbubbleLeftEl = document.getElementById('__chekt-spbubble-left')
      var spbubbleRightEl = document.getElementById('__chekt-spbubble-right')
      if (!spbubbleTopEl) return
      if (!spbubbleBottomEl) return
      if (!spbubbleLeftEl) return
      if (!spbubbleRightEl) return

      // GET - position rect
      this.targetRect = this.targetEl.getBoundingClientRect();
      if (!this.targetRect) return

      // ADD TOP - position css
      spbubbleTopEl.style.top = this.targetRect.y  - spbubbleTopEl.offsetHeight  + 'px'
      spbubbleTopEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - spbubbleTopEl.offsetWidth) / 2 ) + 'px'

      // ADD BOTTOM - position css
      spbubbleBottomEl.style.top = this.targetRect.y  + this.targetEl.offsetHeight  + 'px'
      spbubbleBottomEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - spbubbleBottomEl.offsetWidth) / 2 ) + 'px'

      // ADD LEFT - position css
      spbubbleLeftEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - spbubbleLeftEl.offsetHeight) / 2 ) +'px'
      spbubbleLeftEl.style.left = this.targetRect.x - spbubbleLeftEl.offsetWidth + 5 + 'px'

      // ADD RIGHT - position css
      spbubbleRightEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - spbubbleRightEl.offsetHeight) / 2 ) +'px'
      spbubbleRightEl.style.left = this.targetRect.x + this.targetEl.offsetWidth - 5 +'px'

    },
  }
}
</script>

<style scoped>
#__chekt-spbubble-top, #__chekt-spbubble-bottom, #__chekt-spbubble-left, #__chekt-spbubble-right  {
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
#__chekt-spbubble-top.active, #__chekt-spbubble-bottom.active, #__chekt-spbubble-left.active, #__chekt-spbubble-right.active {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1), transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.__chekt-spbubble-text {
  display: flex;
  padding: 20px 20px;
  background-color: white;
  color: var(--chekt-blue-gray-highest);
  font-size: 14px;
  border-radius: 5px;
  line-height: 22px;
  width: 300px;
  box-shadow: 0 0 0 1px rgb(136 152 170 / 10%), 0 15px 35px 0 rgb(49 49 93 / 10%), 0 5px 15px 0 rgb(0 0 0 / 8%)
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



/****************************/
/********** Bottom **********/
/****************************/

#__chekt-spbubble-bottom {
  flex-direction: column-reverse;
}
#__chekt-spbubble-bottom > .__chekt-spbubble-arrow {
  transform: rotate(0deg);
}


/****************************/
/********** Left **********/
/****************************/

#__chekt-spbubble-left {
  flex-direction: row;
}
#__chekt-spbubble-left > .__chekt-spbubble-arrow {
  transform: rotate(90deg);
  width: 20px;
  height: 20px;
}


/****************************/
/********** Right ***********/
/****************************/

#__chekt-spbubble-right {
  flex-direction: row-reverse;
}
#__chekt-spbubble-right > .__chekt-spbubble-arrow {
  transform: rotate(-90deg);
  width: 20px;
  height: 20px;
}
</style>
