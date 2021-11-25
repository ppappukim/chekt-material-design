<template>
	<div id="__chekt-body-container" class="body-container">
    <div class="left-navi">
      <aside class="mdc-drawer mdc-drawer-modal">
        <div class="header">
          <a @click="onClickLogo()" class="brand" aria-label="Navigate to the chekt material homepage">
            <i class="brand-logo"></i><span class="brand-text">Design</span>
          </a>
        </div>
        <div class="content" id="left-menu">
          <div class="section">System</div>
          <ul class="topics-container"> 
            <li v-on:click="onClickList('layout')" v-bind:class="{ active:currentMenu === 'layout' }">Layout</li>
            <li v-on:click="onClickList('color')" v-bind:class="{ active:currentMenu === 'color' }">Color</li>
            <li v-on:click="onClickList('typograph')" v-bind:class="{ active:currentMenu === 'typograph' }">Typograph</li>
            <!-- <li v-on:click="onClickList('icons')">Icons< /li> -->
          </ul>
          <div class="section">Components</div> 
          <ul class="topics-container">
            <li v-on:click="onClickList('avatar')" v-bind:class="{ active:currentMenu === 'avatar' }">Avatar</li>
            <li v-on:click="onClickList('badge')" v-bind:class="{ active:currentMenu === 'badge' }">Badge</li>
            <li v-on:click="onClickList('buttons')" v-bind:class="{ active:currentMenu === 'buttons' }">Buttons</li>
            <!-- <li v-on:click="onClickList('cards')">Cards</li> -->
            <li v-on:click="onClickList('checkboxes')" v-bind:class="{ active:currentMenu === 'checkboxes' }">Checkboxes</li>
            <li v-on:click="onClickList('datatable')" v-bind:class="{ active:currentMenu === 'datatable' }">Data table</li>
            <li v-on:click="onClickList('datepicker')" v-bind:class="{ active:currentMenu === 'datepicker' }">Date Picker</li>
            <li v-on:click="onClickList('dialog')" v-bind:class="{ active:currentMenu === 'dialog' }">Dialog</li>
            <li v-on:click="onClickList('label')" v-bind:class="{ active:currentMenu === 'label' }">Label</li>
            <li v-on:click="onClickList('loading')" v-bind:class="{ active:currentMenu === 'loading' }">Loading</li>
            <li v-on:click="onClickList('modal')" v-bind:class="{ active:currentMenu === 'modal' }">Modal</li>
            <li v-on:click="onClickList('radio')" v-bind:class="{ active:currentMenu === 'radio' }">Radio</li>
            <li v-on:click="onClickList('range')" v-bind:class="{ active:currentMenu === 'range' }">Range</li>
            <li v-on:click="onClickList('select')" v-bind:class="{ active:currentMenu === 'select' }">Select</li>
            <li v-on:click="onClickList('speechbubble')" v-bind:class="{ active:currentMenu === 'speechbubble' }">Speech Bubble</li>
            <li v-on:click="onClickList('tab')" v-bind:class="{ active:currentMenu === 'tab' }">Tabs</li>
            <li v-on:click="onClickList('textinput')" v-bind:class="{ active:currentMenu === 'textinput' }">Text Input</li>
            <li v-on:click="onClickList('toast')" v-bind:class="{ active:currentMenu === 'toast' }">Toast</li>
            <li v-on:click="onClickList('toggle')" v-bind:class="{ active:currentMenu === 'toggle' }">Toggle</li>
            <li v-on:click="onClickList('tooltip')" v-bind:class="{ active:currentMenu === 'tooltip' }">Tooltips</li>
          </ul> 
        </div>
      </aside>
    </div>
    <div class="content-container">
      <!--  -->
      <!-- ROUTER -->
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <!-- ROUTER -->
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  data: function() {
    return {
      currentMenu: ''
    }
  },
  watch: {
    $route(to) {
      let splitPath = this.$router.history.current.path.split('/')
      this.currentMenu = splitPath.reverse()[0]
      if (to.path === '/design/dealer/home') {
        var leftMenuList = document.getElementById('left-menu').getElementsByTagName('li')
        for (let i = 0; i < leftMenuList.length; i++) {
          leftMenuList[i].classList.remove("left-menu-active")
        }
      }
    }
  },
  created: function () {
    let splitPath = this.$router.history.current.path.split('/')
    this.currentMenu = splitPath.reverse()[0]
  },
  methods: {
    onClickLogo: function () {
      this.$router.push({path: `/design/main`})
    },
    onClickList: function (menu) {
      this.$router.push({path: `/design/dealer/${menu}`})
    },
    onCheckList: function (menu) {
      var leftMenuList = document.getElementById('left-menu').getElementsByTagName('li')
      for (let i = 0; i < leftMenuList.length; i++) {
        leftMenuList[i].classList.remove("left-menu-active")
        if (leftMenuList[i].innerHTML === menu) leftMenuList[i].classList.add("left-menu-active")
      }
    }
  }
}
</script>

<style scoped>
.body-container {
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
}
.left-navi {
  display: block;
  min-width: 280px;
  z-index: 3;
}
.mdc-drawer {
  border-color: rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border-radius: 0 0 0 0;
  z-index: 5;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  border-right-width: 1px;
  border-right-style: solid;
  overflow: hidden;
  position: fixed;

  /* ANIMATION */
  transition: left .5s;
}
.mdc-drawer .header {
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.mdc-drawer-modal-open {
  display: flex !important;
}
.content {
  overflow-y: auto;
}
.brand {
  display: flex;
  align-items: center;
  height: 72px;
  margin-right: auto;
  -webkit-font-smoothing: auto;
  text-decoration: none;
}
.brand:hover {
  cursor: pointer;
}
.brand-logo{
  display: block;
  width: 65px;
  height: 32px;
  margin-right: 8px;
  margin-left: 24px;
  background: url(../../../assets/chekt_text_logo_dark.png) 100% 50%/auto 40% no-repeat;
}
.brand-text {
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
}
ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
li {
    color: #616161;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
    padding: 12px 48px 12px 24px;
    border: 0;
    outline: 0;
    background: transparent;
    letter-spacing: normal;
    line-height: 18px;
    text-align: left;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.05);
  font-weight: 400;
  color: #212121;
}
.topics-container > .active {
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: 400;
  transition: .25s;
  color: #212121;
}
.section {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
    color: #212121;
    padding-top: 40px;
    padding-bottom: 12px;
    padding-left: 24px;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
}
ul.topics-container {
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.content-container {
  width: 100%;
}

/* transition router view */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active {
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
/* transition router view */

@media screen and (max-width: 1341px) {
  .left-navi {
    left: -280px;
    position: fixed;
    z-index: 6;
  }
  /* .mdc-drawer-modal {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  right: initial;
  } */
}
</style>
