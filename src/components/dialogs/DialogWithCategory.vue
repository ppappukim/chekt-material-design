<template>
  <div>
    <div class="dialogs">
      <div ref="dialogCategory" id="__chekt-category-dialog" class="dialog">
        <div class="category">ACTIONS</div>
        <div>Save</div>
        <div>Edit</div>
        <div class="delete">Delete</div>
        <div class="line"></div>
        <div class="category">CONNECTIONS</div>
        <div>View customer</div>
        <div>View site</div>
      </div>
      <div @click="onClickButtonCategory($event)" class="button default">Click me</div>
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
      this.repositionDialogLocatoion()
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
    onClickButtonCategory: function (e) {
      e.stopPropagation()
    
      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      this.dialogEl = this.$refs.dialogCategory
      if (!this.dialogEl) return

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x  +'px'

      // ACTION - show tooltip
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    closeButton: function (e) {
      if (!this.dialogEl) return
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-category-dialog")) return

      // ACTION
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onResizeScreen: function () {
      this.repositionDialogLocatoion()
    },
    repositionDialogLocatoion: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x  +'px'
    }
  }
}
</script>

<style scoped>

.dialogs {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

#__chekt-category-dialog {
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
#__chekt-category-dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}

#__chekt-category-dialog .category {
  font-size: 12px;
  padding: 14px 10px 7px 10px;
  color: var(--chekt-blue-gray-higher);
  pointer-events: none;
}
#__chekt-category-dialog .line {
  border-bottom: solid 1px var(--chekt-border);
  height: 1px;
  padding: 0;
}

#__chekt-category-dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
#__chekt-category-dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
#__chekt-category-dialog div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
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
