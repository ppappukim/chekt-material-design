<template>
  <div class="tooltips">

    <!-- Tooltip -->
    <div ref="chektTooltip" id="__chekt-tooltip">Tooltip</div>
    <div ref="chektTooltipLarge" id="__chekt-tooltip-large">Tooltip large</div>

    <div class="wrapper">
      <div>
        <div 
        @mouseover="onHoverTooltip($event, 'top')" 
        @mouseout="onCloseTooltip($event)"
        class="tooltip-text">
        Hover me top
        </div>
      </div>
      <div>
        <div 
        @mouseover="onHoverTooltip($event, 'bottom')" 
        @mouseout="onCloseTooltip($event)"
        class="tooltip-text">
        Hover me bottom
        </div>
      </div>
      <div>
        <div 
        @mouseover="onHoverTooltip($event, 'left')" 
        @mouseout="onCloseTooltip($event)"
        class="tooltip-text">
        Hover me left
        </div>
      </div>
      <div>
        <div 
        @mouseover="onHoverTooltip($event, 'right')" 
        @mouseout="onCloseTooltip($event)"
        class="tooltip-text">
        Hover me right
        </div>
      </div>
    </div>

    <!-- Large -->
    <div class="wrapper">
      <div>
        <div 
        @mouseover="onHoverLargeTooltip($event, 'large')" 
        @mouseout="onCloseLargeTooltip($event)"
        class="tooltip-text">
        Hover me large
        </div>
        <div id="__chekt-tooltip" class="large">Tooltip</div>
      </div>
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
      tooltipEl: '',
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
      this.tooltipEl = this.$refs.chektTooltip
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
    onHoverLargeTooltip: function (e) {
      e.stopPropagation()
      
      // GET - dialog element
      this.tooltipLargeEl = this.$refs.chektTooltipLarge
      if (!this.tooltipLargeEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.tooltipLargeEl.style.top = this.targetRect.y - this.targetEl.offsetHeight - 5  +'px'
      this.tooltipLargeEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.tooltipLargeEl.offsetWidth) / 2 ) + 'px'

      // ACTION - show tooltip
      this.tooltipLargeEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onCloseTooltip: async function () {
    // ACTION - hidden tooltip
    this.tooltipEl.classList.remove('active')
    this.targetEl.classList.remove('active')
    },
    onCloseLargeTooltip: async function () {
    // ACTION - hidden tooltip
    this.tooltipLargeEl.classList.remove('active')
    this.targetEl.classList.remove('active')
    },

  }
}
</script>

<style scoped>

.tooltips {
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  grid-gap: 50px;
}

#__chekt-tooltip {
  position: fixed;
  padding: 3px 10px;
  background-color: var(--chekt-blue-gray-highest);
  color: white;
  font-size: 12px;
  border-radius: 3px;
  opacity: 0;
  font-weight: 500;
}

#__chekt-tooltip.active, #__chekt-tooltip-large.active {
  opacity: 1;
  transition-property: opacity;
  transition-delay: .3s;
}
#__chekt-tooltip-large {
  position: fixed;
  padding: 5px 10px;
  background-color: var(--chekt-blue-gray-highest);
  color: white;
  font-size: 13px;
  border-radius: 4px;
  opacity: 0;
  font-weight: 500;
}
.tooltip-text {
  cursor: pointer;
}


</style>
