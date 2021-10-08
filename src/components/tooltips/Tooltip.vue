<template>
  <div>
    <div>
      <div 
      @mouseover="onHoverTooltip($event)" 
      @mouseout="onCloseTooltip($event)"
      class="tooltip-text">
      Tooltip top
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
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    onHoverTooltip: function (e) {
      e.stopPropagation()
      
      // GET - dialog element
      this.tooltipEl = document.getElementById('__chekt-tooltip')
      if (!this.tooltipEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.tooltipEl.style.top = this.targetRect.y - this.targetEl.offsetHeight - 5  +'px'
      this.tooltipEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.tooltipEl.offsetWidth) / 2 ) + 'px'


      // ACTION - show tooltip
      this.tooltipEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onCloseTooltip: async function () {
    // await this.$tool.wait(500)
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
}
#__chekt-tooltip.active {
  opacity: 1;
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.tooltip-text {
  cursor: pointer;
}


</style>
