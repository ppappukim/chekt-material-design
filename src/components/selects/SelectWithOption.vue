<template>
  <div class="__chekt-select-option-wrapper">
    <div id="__chekt-select-option" @click="openSelectOptionModal($event)">
      <div class="__chekt-select-option">
        <div>{{selectValue.name}}</div>
        <div
        v-if="selectValue.permission"
        class="__chekt-select-option-permission"
        v-bind:class="{ admin:selectValue.permission === 'admin'}"
        >{{selectValue.permission}}</div>
      </div>
      <div class="__chekt-select-option-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
    </div>
    <div id="__chekt-select-option-modal">
      <div id="select-option-modal-list">
        <div
        v-for="(person, index) in modalList"
        v-bind:key="index"
        @click="onClickItem(person)"
        class="__chekt-select-option-modal-list">
          <div>{{person.name}}</div>
          <div 
          v-bind:class="{ admin:person.permission === 'admin'}"
          class="__chekt-select-option-modal-list-permission">{{person.permission}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon,
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
  },
  data: function() {
    return {
      isHasList: false,
      selectValue: {
        name: 'Select name...',
      },
      selectSearchEl: '',
      targetEl: '',
      modalList:[ 
        { 
          name: 'Bobby kim',
          permission: 'admin'
        }, 
        { 
          name: 'Dosung Lee',
          permission: 'memeber'
        }, 
        { 
          name: 'Kevin Park',
          permission: 'memeber'
        }, 
        { 
          name: 'Leo Park',
          permission: 'memeber'
        },
        { 
          name: 'Rider Kim',
          permission: 'memeber'
        },
        { 
          name: 'Trevor Seo',
          permission: 'owner'
        }, 
      ],
      isHover: false

    }
  },
  watch: {
     scrollPositon: function () {
      this.onScrollSearchSelect()
    },
  },
  created: function () {
    document.body.addEventListener('click', this.closeSelectSearchModal, true)
    window.addEventListener("resize", this.onResizeScreen)
  },
  mounted: function () {
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeSelectSearchModal, true)
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    openSelectOptionModal: function (e) {
      // PREVENT - event bubble
      e.stopPropagation()

      // GET - dialog element
      this.selectSearchEl = document.getElementById('__chekt-select-option-modal')
      if (!this.selectSearchEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.selectSearchEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.selectSearchEl.style.left = this.targetRect.x  +'px'


      // ACTION - toggle show/hidden
      this.selectSearchEl.classList.add('active')
      this.targetEl.classList.add('active')

    },
    closeSelectSearchModal: function (e) {
      if (!this.selectSearchEl) return
      // closest() - #__chekt-datepicker-range 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-select-option-modal")) return
      if (this.selectSearchEl.classList.contains('active')) e.stopPropagation()
      this.selectSearchEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onClickItem: function (selectedPerson) {
      console.log(selectedPerson);
      this.selectValue = selectedPerson
      this.selectSearchEl.classList.remove('active')
    },
     onResizeScreen: function () {
      // GET - dialog element
      if (!this.selectSearchEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.selectSearchEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.selectSearchEl.style.left = this.targetRect.x  +'px'

    },
    onScrollSearchSelect: function () {
      // GET - dialog element
      if (!this.selectSearchEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.selectSearchEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.selectSearchEl.style.left = this.targetRect.x  +'px'

    }
  }
}
</script>

<style scoped>
/* src/styles/dealer-select.css */
</style>
