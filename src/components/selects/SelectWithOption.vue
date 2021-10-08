<template>
  <div class="__chekt-select-option-wrapper">
    <div id="__chekt-select-option" @click="openSelectOptionModal($event)">
      <div class="select">
        <div>{{selectValue.name}}</div>
        <div
        v-if="selectValue.permission"
        class="select-permission"
        v-bind:class="{ admin:selectValue.permission === 'admin'}"
        >{{selectValue.permission}}</div>
      </div>
      <div class="select-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
    </div>
    <div id="__chekt-select-option-modal">
      <div id="select-option-modal-list">
        <div
        v-for="(person, index) in modalList"
        v-bind:key="index"
        @click="onClickItem(person)"
        class="modal-list">
          <div>{{person.name}}</div>
          <div 
          v-bind:class="{ admin:person.permission === 'admin'}"
          class="modal-list-permission">{{person.permission}}</div>
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
.__chekt-select-option-wrapper {
  position: relative;
}
#__chekt-select-option {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
              rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}

#__chekt-select-option > .select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    height: 20px;
    cursor: pointer;

    /* Icon 크기만큼 줘야 Icon이 보임 */
    padding-right: 30px;

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


/*********************/
/* SELECT SEARCH MODAL */
/*********************/

#__chekt-select-option-modal {
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
#__chekt-select-option-modal.active {
  visibility: visible;
  transform: scale(1);
  opacity: 1;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

#select-option-modal-list {
  cursor: pointer;
  max-height: 200px;
  color: var(--chekt-blue-gray-higher);
  font-size: 14px;
  overflow-y: auto;
}
#select-option-modal-list > div {
  padding: 8px;
}
#select-option-modal-list > div:hover {
  background-color: var(--chekt-blue-gray-lower);
}

.modal-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.modal-list-permission, .select-permission {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  color: var(--chekt-blue-gray-higher);
  background-color: var(--chekt-blue-gray-mideum);
}
.modal-list-permission.admin {
  color: var(--chekt-primary-color);
  background-color: #E9F3FC;
}

.modal-list-permission.admin, .select-permission.admin {
  color: var(--chekt-primary-color);
  background-color: #E9F3FC;
}
</style>
