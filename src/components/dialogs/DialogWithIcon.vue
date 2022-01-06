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
      <div @click="onClickButtonIcon($event)" class="__chekt-button default">Click me</div>
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
/* src/styles/dealer-dialog.css */
.dialogs {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
</style>
