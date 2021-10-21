<template>
  <div class="tooltips">
    <div>
      <div 
      @mouseover="onHoverTooltip($event, 'top')" 
      @mouseout="onCloseTooltip($event)"
      class="tooltip-text">
      Hover me top
      </div>
      <div id="__chekt-tooltip">tooltip</div>
    </div>
    <div>
      <div 
      @mouseover="onHoverTooltip($event, 'bottom')" 
      @mouseout="onCloseTooltip($event)"
      class="tooltip-text">
      Hover me bottom
      </div>
      <div id="__chekt-tooltip">tooltip</div>
    </div>
    <div>
      <div 
      @mouseover="onHoverTooltip($event, 'left')" 
      @mouseout="onCloseTooltip($event)"
      class="tooltip-text">
      Hover me left
      </div>
      <div id="__chekt-tooltip">tooltip</div>
    </div>
    <div>
      <div 
      @mouseover="onHoverTooltip($event, 'right')" 
      @mouseout="onCloseTooltip($event)"
      class="tooltip-text">
      Hover me right
      </div>
      <div id="__chekt-tooltip">tooltip</div>
    </div>
  </div>
  
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  data: function() {
    return {
      targetEl: '',
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    onHoverTooltip: function (e, position) {
      e.stopPropagation()

      
      // GET - dialog element
      this.tooltipEl = document.getElementById('__chekt-tooltip')
      if (!this.tooltipEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();
      

      // ADD - position css
      switch (position) {
        case 'top':
          this.tooltipEl.style.top = this.targetRect.y - this.targetEl.offsetHeight - 5  +'px'
          this.tooltipEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.tooltipEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'bottom':
          this.tooltipEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5  +'px'
          this.tooltipEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.tooltipEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'left':
          this.tooltipEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.tooltipEl.offsetHeight) / 2 ) +'px'
          this.tooltipEl.style.left = this.targetRect.x - this.tooltipEl.offsetWidth - 5 +  'px'
          break;
        case 'right':
          this.tooltipEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.tooltipEl.offsetHeight) / 2 ) +'px'
          this.tooltipEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'
          break;
      
        default:
          break;
      }


      // ACTION - show tooltip
      this.tooltipEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onCloseTooltip: async function () {
    // ACTION - hidden tooltip
    this.tooltipEl.classList.remove('active')
    this.targetEl.classList.remove('active')

    }
  }
}
</script>

<style scoped>
#__chekt-tooltip {
  position: fixed;
  padding: 3px 10px;
  background-color: var(--chekt-blue-gray-highest);
  color: white;
  font-size: 14px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
#__chekt-tooltip.active {
  opacity: 1;
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.tooltips {
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
}
.tooltip-text {
  cursor: pointer;
}


</style>
