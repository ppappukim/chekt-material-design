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
      <div @click="onClickShowDialog($event, 'top')" class="button default">Click me</div>
      <div @click="onClickShowDialog($event, 'bottom')" class="button default">Click me</div>
      <div @click="onClickShowDialog($event, 'left')" class="button default">Click me</div>
      <div @click="onClickShowDialog($event, 'right')" class="button default">Click me</div>
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

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

#__chekt-dialog {
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px rgb(136 152 170 / 10%), 0 15px 35px 0 rgb(49 49 93 / 10%), 0 5px 15px 0 rgb(0 0 0 / 8%);
  border-radius: 5px;
  z-index: 1;
  visibility: hidden;
  background-color: white;
  transform:scale(.8);
  opacity: 0;
  white-space: nowrap;
  padding: 5px 0px;
}

#__chekt-dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
#__chekt-dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
#__chekt-dialog div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
}
#__chekt-dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}

/* BUTTON */

.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
/* color button */
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}

/* button hover */
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}

</style>
