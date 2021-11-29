<template>
  <div id="__chekt-search-modal">
    <div  class="search-bar">
      <div class="search-bar-contents">
        <i class="material-icons">search</i>
        <div class="bar-text">
          <input 
          v-model="inputText" 
          @keyup.enter="onkeyUpGoEnter()"
          @keyup.esc="closeKey()"
          @keyup.down="onkeyUpGoDown()"
          @keyup.up="onkeyUpGoUp()"
          @keyup="searchMatchText($event)" 
          type="text" placeholder="Search..." 
          ref="searchInput" 
          class="search-input">
        </div>
      </div>
    </div>
    <div class="search-body">
      <div
      @click="onClickSearchItem(v.path)"
      class="search-item"
      v-for="v in searchList"
      v-bind:key="v.path"
      style="display:none;">
        <div class="search-item-name">{{v.name}}</div>
        <div class="search-item-type">{{v.type}} / {{v.category}}</div>
      </div>
      <div v-if="!isHasList" class="nomatch">😅 Oops! No match.</div>
    </div>
  </div>
</template>

<script>
// import MyIcon from '@/MyIcon'
export default {
  components: {
    // MyIcon
  },
  computed: {
    searchDataInfo: function () {
      return this.$store.getters.searchDataInfo
    },
  },
    data: function() {
    return {
      searchModalEl: '',
      searchInfo: {},
      searchList: [],
      searchedList: [],
      inputText:'',
      isHasList: false,
      isFocused: false,
      searchedListOrder: -1
    }
  },
  watch: {
    inputText: function () {
      this.searchedList = []
      this.searchedListOrder = -1
      var items = document.querySelectorAll('#__chekt-search-modal .search-body .search-item')
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hovered') 
      }
    }
  },
  created: function () {
    document.body.addEventListener('click', this.closeButton, true)
    this.updateSearchInfo()
  },
  mounted: function () {
    this.$refs.searchInput.focus()
    this.searchMatchText()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true)
  },
  methods: {
    closeButton: function (e) {
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-search-modal")) return
      this.$store.commit('IS_SEARCH_ACTIVE', false)
    },
    closeKey: function () {
      this.$store.commit('IS_SEARCH_ACTIVE', false)
    },
    onkeyUpGoDown: function () {

      this.searchedListOrder++

      // GET - search lish elements
      var items = document.querySelectorAll('#__chekt-search-modal .search-body .search-item')

      if (this.searchedList.length < 1) {
        for (let i = 0; i < items.length; i++) {
          
          const item = items[i];

          if (item.style.display == 'none') continue

          this.searchedList.push(item)      
        }
        
      }
      for (let i = 0; i < this.searchedList.length; i++) {
        this.searchedList[i].classList.remove('hovered') 
      }

      if (this.searchedList.length <= this.searchedListOrder) this.searchedListOrder--
      if(!this.searchedList[this.searchedListOrder]) return
      this.searchedList[this.searchedListOrder].classList.add('hovered')
    },
    onkeyUpGoUp: function () {

      this.searchedListOrder--

      // GET - search lish elements
      var items = document.querySelectorAll('#__chekt-search-modal .search-body .search-item')

      if (this.searchedList.length < 1) {
        for (let i = 0; i < items.length; i++) {
          
          const item = items[i];

          if (item.style.display == 'none') continue

          this.searchedList.push(item)      
        }
      }
      for (let i = 0; i < this.searchedList.length; i++) {
        this.searchedList[i].classList.remove('hovered') 
      }

      if (0 > this.searchedListOrder) this.searchedListOrder++
      if(!this.searchedList[this.searchedListOrder]) return
      this.searchedList[this.searchedListOrder].classList.add('hovered')
    },
    onkeyUpGoEnter: function () {
      if(!this.searchedList[this.searchedListOrder]) return
      this.searchedList[this.searchedListOrder].click()
      this.closeKey()
    },
    onClickSearchItem: function (path) {
      this.$router.push({path: path})
      this.closeKey()
    },
    updateSearchInfo: function () {

      Object.values(this.searchDataInfo).map(v => {
        // 첫글자 대문자로 변경
        var name = v.name[0].toUpperCase() + v.name.slice(1)
        var category = v.category[0].toUpperCase() + v.category.slice(1)
        var type =  v.type[0].toUpperCase() + v.type.slice(1)
        var path =  v.path
        var id =  v.id

        this.searchInfo = {
          name,
          category,
          type,
          path,
          id
        }

        // Merge
        this.searchList.push(this.searchInfo)
      })
    },
    searchMatchText: function () {

      // INIT 
      this.isHasList = false
      
      // GET - search lish elements
      var items = document.querySelectorAll('#__chekt-search-modal .search-body .search-item .search-item-name')
      var itemsBody = document.querySelector('#__chekt-search-modal .search-body')

      if (!this.inputText) return itemsBody.style.display = 'none'
      else itemsBody.style.display = ''

      for (let i = 0; i < items.length; i++) {
        
        const item = items[i];
        var inputText = this.inputText.toUpperCase()

        // 공백 제거
        if (item.innerHTML.toUpperCase().replace(/(\s*)/g, "").indexOf(inputText) > -1) item.parentElement.style.display = ''
        // // 대문자
        else item.parentElement.style.display = 'none'

        //  대조 맞지 않을시 "No Match" 보여주기
        if (item.parentElement.style.display == '') this.isHasList = true
      }

    },
  }
}
</script>

<style scoped>
#__chekt-search-modal {
  position: fixed;
  top: 100px; 
  left: 0; 
  right: 0; 
  z-index: 9999;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 60px);
  max-width: 480px;
  border: solid 1px rgba(0, 0, 0, 0.10);
  box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.10);
  background-color: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(30px);
  border-radius: 30px 30px 30px 30px;
}
.search-bar{
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.search-bar-contents {
  display: flex;
  justify-content: start;
  grid-gap: 10px;
  margin: 0 20px;
  width: 100%;
}
.bar-text {
  font-size: 18px;
  width: 100%;
}
.bar-text > input {
  border: 0px;
  font-size: 18px;
  background-color: transparent;
  width: 100%;
}
.bar-text > input:focus{
  outline: none;
}

.search-body {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  border-top: solid 1px rgba(0, 0, 0, 0.10);
  max-height: 500px;
  overflow: auto;
}
.search-item {
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.search-item:hover {
  background-color: rgba(0, 0, 0, 0.087);
}
.search-item.hovered {
  background-color: rgba(0, 0, 0, 0.087);
}
.search-item-type {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
}
.nomatch {
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 521px) {
  .search-item {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>