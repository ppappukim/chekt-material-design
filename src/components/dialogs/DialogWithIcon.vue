<template>
  <div>
    <div class="dialog-wrapper">
      <div ref="dialogIcon" id="__chekt-icon-dialog">
        <div class="icon">
          <MyIcon v-bind:icon="'edit'" v-bind:width="18" />
          <div>Edit</div>
        </div>
        <div class="icon">
          <MyIcon v-bind:icon="'download'" v-bind:width="18" />
          <div>Download</div>
        </div>
        <div class="icon delete">
          <MyIcon v-bind:icon="'delete'" v-bind:width="18" />
          <div>Delete</div>
        </div>
      </div>
      <div @click="onClickButtonIcon($event)" class="button default">Click me</div>
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
    onClickButtonIcon: function (e) {
      e.stopPropagation()
    
      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      this.dialogEl = this.$refs.dialogIcon
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
      if (e.target.closest("#__chekt-icon-dialog")) return

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

#__chekt-icon-dialog {
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
#__chekt-icon-dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}

#__chekt-icon-dialog .icon {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 5px;
}

#__chekt-icon-dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
#__chekt-icon-dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
#__chekt-icon-dialog div:hover {
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
