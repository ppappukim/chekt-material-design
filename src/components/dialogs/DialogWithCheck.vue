<template>
  <div>
    <div class="dialog-wrapper">
      <div ref="dialogIcon" id="__chekt-check-dialog">
        <div @click="onClickList($event, '__chekt-check-dialog-list')" class="__chekt-check-dialog-list">
          <MyIcon v-bind:icon="'check'" v-bind:width="18" class="__chekt-check-dialog-list-icon" />
          <div class="__chekt-check-dialog-list-text">Bobby Kim</div>
        </div>
        <div @click="onClickList($event, '__chekt-check-dialog-list')" class="__chekt-check-dialog-list">
          <MyIcon v-bind:icon="'check'" v-bind:width="18" class="__chekt-check-dialog-list-icon"/>
          <div class="__chekt-check-dialog-list-text">Trevor Seo</div>
        </div>
        <div @click="onClickList($event, '__chekt-check-dialog-list')" class="__chekt-check-dialog-list">
          <MyIcon v-bind:icon="'check'" v-bind:width="18" class="__chekt-check-dialog-list-icon"/>
          <div class="__chekt-check-dialog-list-text">Rider Kim</div>
        </div>
      </div>
      <div @click="onClickButtonIcon($event)" class="__chekt-button icon default">
        {{checkedValue}}
        <MyIcon style="color:var(--chekt-blue-gray-higher);" v-bind:icon="'expend-down'" v-bind:width="12"/>
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
      checkedValue: ''
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
    this.init()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true); 
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    init: function () {
      // Add - Default set
      document.getElementsByClassName('__chekt-check-dialog-list')[0].classList.add("active")
      this.checkedValue = document.getElementsByClassName('__chekt-check-dialog-list-text')[0].innerHTML
    },
    onClickButtonIcon: function (e) {
      e.stopPropagation()
    
      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      this.dialogEl = this.$refs.dialogIcon
      if (!this.dialogEl) return

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.dialogEl.style.left = this.targetRect.x  +'px'

      // ACTION - show tooltip
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onClickList: function (e, name) {
      e.stopPropagation()

      // REMOVE - Active Class
      var lists = document.getElementsByClassName(name)
      if (!lists) return
      for (let i = 0; i < lists.length; i++) {
        const list = lists[i];
        if (list.classList.contains("active")) list.classList.remove("active")
      }

      // ADD - Active Class
      e.currentTarget.classList.add("active")

      // ADD - Active name
      var checkedVal = e.currentTarget.getElementsByClassName('__chekt-check-dialog-list-text')[0].innerHTML
      this.checkedValue = checkedVal
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
      this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
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
