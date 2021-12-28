<template>
  <div class="__chekt-select-search-with-input-wrapper">
    <div class="input-text">
      <div class="input-currency">{{selectValue}}</div>
      <input type="text" placeholder="0.00">
    </div>
    <div id="__chekt-select-search" @click="openSelectSearchModal($event)">
      <div class="select">
        <div>{{selectValue}}</div>
      </div>
      <div class="select-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
    </div>
    <div ref="chektSelectSearchModal" id="__chekt-select-search-modal">
      <input type="text" ref="chektSelectSearchInput" id="__chekt-select-search-input" @keyup="searchMatchText()" placeholder="search...">
      <div id="select-search-modal-list">
        <div
        v-for="name in modalList"
        v-bind:key="name"
        @click="onClickItem($event)">
         {{name}}
        </div>
      </div>
      <div v-show="!isHasList" class="nomatch">No match</div>
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
      selectValue: 'USD',
      selectSearchEl: '',
      targetEl: '',
      modalList:[
        'USD - US Dollar', 
        'AED - United Arab Emirates Dirham', 
        'AFN - Afghan Afgjani', 
        'ALL - Albanian Lek', 
        'AMD - Armenian Darm', 
        'AMG - Netherlands Antillean Guilder', 
        'AOA - Angolan Kwanza', 
        'ARS - Argentine Peso', 
        'AUD - Australian Dollar'],
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
      var items = document.querySelectorAll('#select-search-modal-list div')

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

      // ACTION - 문자 가공
      const splitText = this.selectValue.slice(0, 4);
      this.selectValue = splitText

      // ACTION - 모달 지우기
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
.__chekt-select-search-with-input-wrapper{
  position: relative;
  display: flex;
  justify-content: center;
}
#__chekt-select-search {
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: white;
  border-radius: 0px 3px 3px 0px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
              rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}

#__chekt-select-search > .select {
    position: relative;
    z-index: 1;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    margin: 0;
    text-decoration: none;
    vertical-align: middle;
    word-break: normal;
    background: transparent;
    border: 0;
    outline: 0;
    transition: color .24s;
    padding: 4px 8px;
    -webkit-appearance: none;
    width: 100%;
    appearance: none;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    line-height: 20px;
    cursor: pointer;

    /* Select에서 폰트가 안먹기 때문에 따로 선언 (폰트 굵기설정이 안됨) */
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    font-size:14px;
    color: var(--chekt-blue-gray-highest);
}
.select-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  z-index: 2;
  margin-top: -9px;
  transition: color .24s;
  pointer-events: none;
  color: var(--chekt-blue-gray-highest);
}

.select-search-modal-ul {
  list-style-type: none;
}

/*********************/
/* SELECT SEARCH MODAL */
/*********************/

#__chekt-select-search-modal {
  background-color: white;
  width: 300px;
  position: fixed;
  box-shadow: 0 0 0 1px rgb(136 152 170 / 10%), 0 15px 35px 0 rgb(49 49 93 / 10%), 0 5px 15px 0 rgb(0 0 0 / 8%);
  border-radius: 4px;
  transform: scale(.8);
  opacity: 0;
  visibility: hidden;
  user-select: none;
}
#__chekt-select-search-modal.active {
  visibility: visible;
  transform: scale(1);
  opacity: 1;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

#__chekt-select-search-input {
  width: calc(100% - 16px);
  padding: 8px;
  border-width: 0;
  border: solid #e3e8ee;
  border-width: 0 0 1px;
  outline: none;
  font-size: 14px;
  color: var(--chekt-blue-gray-higher);
}
input#__chekt-select-search-input::placeholder {
  color: var(--chekt-blue-gray-high);
}
#select-search-modal-list {
  cursor: pointer;
  max-height: 200px;
  color: var(--chekt-blue-gray-higher);
  font-size: 14px;
  overflow-y: auto;
}
#select-search-modal-list > div {
  padding: 8px;
}
#select-search-modal-list > div:hover {
  background-color: var(--chekt-blue-gray-lower);
}

#__chekt-select-search-modal .nomatch {
  color: var(--chekt-blue-gray-high);
  padding: 8px;
  font-size: 14px;
}


/*********************/
/****** Text ********/
/*********************/

.input-text {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 220px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
  border-radius: 3px 0px 0px 3px;
  transition:box-shadow .3s;
}
.input-currency {
  font-size: 14px;
  color: var(--chekt-blue-gray-highest);
  padding-left: 10px;
}
.input-text input {
  width: calc(100% - 20px);
  font-size: 14px;
  border: none;
  padding: 5px 10px;
}
.input-text input::placeholder {
  color: var(--chekt-gray-low);
}
.input-text input:focus {
  outline: none; 
}
.input-text:focus-within {
  box-shadow: 0 0 0 4px #AAD2F5;
}

.text {
  font-size: 14px;
  color: var(--chekt-gray-high);
  text-align: start;
  margin-bottom: 10px;
}


</style>
