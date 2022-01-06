<template>
  <div class="__chekt-select-search-wrapper">
    <div id="__chekt-select-search" @click="openSelectSearchModal($event)">
      <div class="__chekt-select-search">
        <div>{{selectValue}}</div>
      </div>
      <div class="__chekt-select-search-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
    </div>
    <div ref="chektSelectSearchModal" id="__chekt-select-search-modal">
      <input type="text" ref="chektSelectSearchInput" id="__chekt-select-search-input" @keyup="searchMatchText()" placeholder="search...">
      <div id="__chekt-select-search-modal-list">
        <div
        v-for="name in modalList"
        v-bind:key="name"
        @click="onClickItem($event)">
         {{name}}
        </div>
      </div>
      <div v-show="!isHasList" class="__chekt-select-search-nomatch">No match</div>
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
      selectValue: 'Select Name...',
      selectSearchEl: '',
      targetEl: '',
      modalList:['Bobby kim', 'Kevin Park', 'Trevor Seo', 'Dosung Lee', 'Leo Park', 'Rider Kim', 'Daivd Erickson', 'Arina Grande', 'Billy Poter'],
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
    this.searchMatchText()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeSelectSearchModal, true)
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    searchMatchText: function () {

      // INIT
      var input = this.$refs.chektSelectSearchInput
      var filter = input.value.toUpperCase()
      var items = document.querySelectorAll('#__chekt-select-search-modal-list div')

      this.isHasList = false

      // ACTION - search match text
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // 공백 제거
        if (item.innerHTML.toUpperCase().replace(/(\s*)/g, "").indexOf(filter) > -1) item.style.display = ''
        // 대문자
        else if (item.innerHTML.toUpperCase().indexOf(filter) > -1) item.style.display = ''
        // 대조 맞지않을시 안보여주기
        else item.style.display = 'none'

        //  대조 맞지않을시 "No Match" 보여주기
        if (item.style.display == '') this.isHasList = true


      }
    },
    openSelectSearchModal: function (e) {
      // PREVENT - event bubble
      e.stopPropagation()
      
      // Delete saved data
      var input = this.$refs.chektSelectSearchInput
      input.value = ''
      this.searchMatchText()

      // GET - dialog element
      this.selectSearchEl = this.$refs.chektSelectSearchModal
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

      input.focus()

    },
    closeSelectSearchModal: function (e) {
      if (!this.selectSearchEl) return
      // closest() - #__chekt-datepicker-range 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-select-search-modal")) return
      if (this.selectSearchEl.classList.contains('active')) e.stopPropagation()
      this.selectSearchEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onClickItem: function (e) {
      this.selectValue = e.target.innerHTML
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
    // enterInput: function () {
    //   // INIT
    //   var items = document.querySelectorAll('#select-search-modal-list div')
    //   var filteredList = []

    //   // ACTION - add filteredList
    //   for (let i = 0; i < items.length; i++) {
    //     const item = items[i];
    //     if(!item.style.display) filteredList.push(item)
    //   }
  
    //   if (!filteredList[0]) return
    //   this.selectValue = filteredList[0].innerHTML
    //   this.selectSearchEl.classList.remove('active')
    // },
  }
}
</script>

<style scoped>
/* src/styles/dealer-select.css */
</style>
