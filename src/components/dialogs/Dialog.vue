<template>
  <div>
    <!-- Dialogs -->
    <div ref="dialogDefaultTop" id="__chekt-dialog" class="top">
      <div>Save</div>
      <div>Edit</div>
      <div class="delete">Delete</div>
    </div>
    <div ref="dialogDefaultBottom" id="__chekt-dialog" class="bottom">
      <div>Save</div>
      <div>Edit</div>
      <div class="delete">Delete</div>
    </div>
    <div ref="dialogDefaultLeft" id="__chekt-dialog" class="left">
      <div>Save</div>
      <div>Edit</div>
      <div class="delete">Delete</div>
    </div>
    <div ref="dialogDefaultRight" id="__chekt-dialog" class="right">
      <div>Save</div>
      <div>Edit</div>
      <div class="delete">Delete</div>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <div @click="onClickShowDialog($event, 'top')" class="__chekt-button default">Click me</div>
      <div @click="onClickShowDialog($event, 'bottom')" class="__chekt-button default">Click me</div>
      <div @click="onClickShowDialog($event, 'left')" class="__chekt-button default">Click me</div>
      <div @click="onClickShowDialog($event, 'right')" class="__chekt-button default">Click me</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
      this.onScrollDialog()
    },
  },
  created: function () {
    document.body.addEventListener('click', this.closeButton, true); 
    window.addEventListener("resize", this.onResizeScreen) 
  },
  mounted: function () {
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true); 
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    onClickShowDialog: function (e, position) {
      e.stopPropagation()

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      switch (position) {
        case 'top':
          // GET - dialog element
          this.dialogEl = this.$refs.dialogDefaultTop
          if (!this.dialogEl) return
          // ADD - position css
          this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
          this.dialogEl.style.left = this.targetRect.x  +'px'
          break;
        case 'bottom':
          // GET - dialog element
          this.dialogEl = this.$refs.dialogDefaultBottom
          if (!this.dialogEl) return
          // ADD - position css
          this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
          this.dialogEl.style.left = this.targetRect.x  +'px'
          break;
        case 'left':
          // GET - dialog element
          this.dialogEl = this.$refs.dialogDefaultLeft
          if (!this.dialogEl) return
          // ADD - position css
          this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight - this.dialogEl.offsetHeight +'px'
          this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth - 5 +  'px'
          break;
        case 'right':
          // GET - dialog element
          this.dialogEl = this.$refs.dialogDefaultRight
          if (!this.dialogEl) return
          // ADD - position css
          this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight - this.dialogEl.offsetHeight +'px'
          this.dialogEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'
          break;
      
        default:
          break;
      }

      // ACTION - show tooltip
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    closeButton: function (e) {
      if (!this.dialogEl) return
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-dialog")) return

      // ACTION
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onScrollDialog: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      if (this.dialogEl.classList.contains('top')) {
        this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
        this.dialogEl.style.left = this.targetRect.x  +'px'
      }
      else if (this.dialogEl.classList.contains('bottom')) {
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
        this.dialogEl.style.left = this.targetRect.x  +'px'
      }
      else if (this.dialogEl.classList.contains('left')) {
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight - this.dialogEl.offsetHeight +'px'
        this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth - 5 +  'px'
      }
      else if (this.dialogEl.classList.contains('right')) {
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight - this.dialogEl.offsetHeight +'px'
        this.dialogEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'
      }

    },
    onResizeScreen: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      if (this.dialogEl.classList.contains('top')) {
        this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
        this.dialogEl.style.left = this.targetRect.x  +'px'
      }
      else if (this.dialogEl.classList.contains('bottom')) {
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
        this.dialogEl.style.left = this.targetRect.x  +'px'
      }
      else if (this.dialogEl.classList.contains('left')) {
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight - this.dialogEl.offsetHeight +'px'
        this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth - 5 +  'px'
      }
      else if (this.dialogEl.classList.contains('right')) {
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight - this.dialogEl.offsetHeight +'px'
        this.dialogEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'
      }
    }
  }
}
</script>

<style scoped>
/* src/styles/dealer-dialog.css */
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
</style>
