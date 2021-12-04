<template v-on:update="onClickBackdrop">
	<div>
    <!-- backdrop -->
    <transition name="fade">
      <div v-if="isMenuButtonClicked" id="mdc-drawer-backdrop" v-on:click="onClickBackdrop()"></div>
    </transition>
    <!-- backdrop -->
		<!--  -->
		<!-- HEADER -->
    <header v-bind:class="{ 'hidden': !showNavbar }">
      <button v-if="dealerMenuActive"  class="menu-button" @click="onClickMenuButton()">
        <i class="material-icons">menu</i>
      </button>
      <a @click="onClickLogo()" class="brand" aria-label="Navigate to the chekt material homepage">
        <i class="brand-logo"></i><span class="brand-text">Design</span>
      </a>
      <nav class="nav" role="navigation">
        <ul class="nav-list">
          <li class="nav-item"
          v-bind:class="{ active:dealerMenuActive }"
          v-on:click="onClickMenu($event,'dealer')">Dealer
          <span class="nav-indicator"></span>
          </li>
          <li class="nav-item"
          v-bind:class="{ active:MonitoringMenuActive }"
          v-on:click="onClickMenu($event,'monitoring')">Monitoring
          <span class="nav-indicator"></span>
          </li>
          <li class="nav-item"
          v-bind:class="{ active:EnduserMenuActive }"
          v-on:click="onClickMenu($event,'enduser')">Enduser App
          <span class="nav-indicator"></span>
          </li>
        </ul>
      </nav>
      <form>
      </form>
      <!-- TOOLTIP -->
      <div id="__chekt-tooltip">Shift + S</div>
      <!-- SEARCH ICON -->
      <button 
      @click="onClickSearch()" 
      @mouseover="onHoverTooltip($event, 'bottom')"
      @mouseout="onCloseTooltip($event)"  
      class="search-button">
        <i class="material-icons">search</i>
      </button>
    </header>
		<!-- HEADER -->
		<!--  -->

		<!--  -->
		<!-- ROUTER -->
		<router-view></router-view>
		<!-- ROUTER -->
		<!--  -->

		<!--  -->
		<!-- FOOTER -->
    <Footer
    v-bind:class="{ fullscreen:footerFullWidth }"/>
		<!-- FOOTER -->
		<!--  -->

  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  },
  data: function() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isMenuButtonClicked: false,
      dealerMenuActive: false,
      MonitoringMenuActive: false,
      EnduserMenuActive: false,
      footerFullWidth: false,
    }
  },
  watch: {
    $route: function() {
      this.checkPathRoutine()
      if (this.isMenuButtonClicked == true) this.onClickBackdrop()
    }
  },
  created: function () {
    this.checkPathRoutine()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener("resize", this.onResizeScreen)

    // shift + s 누르면 검색모달이 나온다.
    document.onkeyup = function(e) {
      if (e.shiftKey && e.which == 83) this.onClickSearch()
    }.bind(this)
  },
  mounted: function () {
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    onClickMenu: function (e, menu) {
      switch (menu) {
        case 'dealer':
          this.$router.push({path: `/design/dealer/home`})
          break;
        default:
          this.$router.push({path: `/design/${menu}`})
          break;
      }
    },
    onClickLogo: function () {
      this.$router.push({path: `/design/main`})
    },
    onClickSearch: function () {
      this.$store.commit('IS_SEARCH_ACTIVE', true)
    },
    onClickMenuButton: function () {
      this.isMenuButtonClicked = true
      var mdcDrawerModal = document.getElementsByClassName("mdc-drawer-modal")
      mdcDrawerModal[0].classList.add('mdc-drawer-modal-open')
      // mdcDrawerModal[0].style.display = "flex"
      mdcDrawerModal[0].style.left = "0px"
    },
    onClickBackdrop: function () {
      this.isMenuButtonClicked = false
      var mdcDrawerModal = document.getElementsByClassName("mdc-drawer-modal")
      mdcDrawerModal[0].classList.remove('mdc-drawer-modal-open')
      // var mdcDrawerModal = document.getElementsByClassName("mdc-drawer-modal")
      // mdcDrawerModal[0].style.display = "none"
      var intFrameWidth = window.innerWidth;
      if(1341 > intFrameWidth) mdcDrawerModal[0].style.left = "-280px"
      // mdcDrawerModal[0].style.left = "-280px"
    },
    checkPathRoutine: function () {

      // INIT - 지금 어떤 path에 있는지. 
      let path = this.$router.history.current.path
      this.dealerMenuActive = path.includes('dealer')
      this.MonitoringMenuActive = path.includes('monitoring')
      this.EnduserMenuActive = path.includes('enduser')

      // CHECK - 만약 dealer page가아니면 footer를 full로 해라. 
      if (!this.dealerMenuActive) this.footerFullWidth = true
      else this.footerFullWidth = false
    },
    onHoverTooltip: function (e, position) {
      e.stopPropagation()
      
      // GET - dialog element
      this.tooltipEl = document.getElementById('__chekt-tooltip')
      if (!this.tooltipEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();
      

      // ADD - position css
      switch (position) {
        case 'top':
          this.tooltipEl.style.top = this.targetRect.y - this.targetEl.offsetHeight - 5  +'px'
          this.tooltipEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.tooltipEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'bottom':
          this.tooltipEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5  +'px'
          this.tooltipEl.style.left = this.targetRect.x  + ( (this.targetEl.offsetWidth - this.tooltipEl.offsetWidth) / 2 ) + 'px'
          break;
        case 'left':
          this.tooltipEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.tooltipEl.offsetHeight) / 2 ) +'px'
          this.tooltipEl.style.left = this.targetRect.x - this.tooltipEl.offsetWidth - 5 +  'px'
          break;
        case 'right':
          this.tooltipEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.tooltipEl.offsetHeight) / 2 ) +'px'
          this.tooltipEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'
          break;
      
        default:
          break;
      }

      // ACTION - show tooltip
      this.tooltipEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onCloseTooltip: async function () {
      // ACTION - hidden tooltip
      this.tooltipEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onScroll: function () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Store scroll position
      this.$store.commit('WATCH_SCROLL_EVENT', currentScrollPosition)
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    },
    onResizeScreen: function () {
      this.isMenuButtonClicked = false
      var mdcDrawerModal = document.getElementsByClassName("mdc-drawer-modal")
      var intFrameWidth = window.innerWidth;
      if (1341 < intFrameWidth) {
        if (!mdcDrawerModal[0]) return
        mdcDrawerModal[0].style.left = "0px"
      }
      if(1341 > intFrameWidth) {
        if (!mdcDrawerModal[0]) return
        mdcDrawerModal[0].style.left = "-280px"
      }
    }
  }
}
</script>

<style scoped>
header{
  position: fixed;
  width: 100%;
  transition: transform 300ms 0ms cubic-bezier(0.4, 0, 0.6, 1), opacity 0s 300ms;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 4;
}
header.hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.menu-button{
  color: #fff;
  width: 72px;
  height: 72px;
  border: 0;
  background: 0 0;
  line-height: 0;
  cursor: pointer;
  margin-right: -20px;
}
.menu-button > .ismain{
  margin-left: 20px;
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
  background: url(../../assets/chekt_text_logo.png) 100% 50%/auto 40% no-repeat;
}
.brand-text {
  color: #fff;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
}
.nav{
  margin-left: auto;
}
.nav-list{
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-item{
  position: relative;
  text-decoration: inherit;
  user-select: none;
  color: #fff;
  margin: 0 16px;
  line-height: 72px;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.nav-item.active > .nav-indicator{
  transform: scaleY(1);
}
.nav-item :active{
  color: #212121;
}
.nav-indicator {
  background: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4px;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.search-button{
  color: #fff; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  width: 72px;
  height: 72px;
  padding: 0;
  border: 0;
  background: 0 0;
  font-family: inherit;
  line-height: 0;
  cursor: pointer;
  z-index: 5;
}
.search-button:hover{
  opacity: .6;
}
#mdc-drawer-backdrop {
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 5;
  width: 100%;
  height: 100%;
  position: fixed;
}

.fullscreen {
  margin: 0;
}

/* Tooltip */
#__chekt-tooltip {
  position: fixed;
  padding: 3px 10px;
  background-color: var(--chekt-blue-gray-highest);
  color: white;
  font-size: 12px;
  border-radius: 3px;
  width: fit-content;
  opacity: 0;
  font-weight: 500;
}

#__chekt-tooltip.active, #__chekt-tooltip-large.active {
  opacity: 1;
  transition-property: opacity;
  transition-delay: .3s;
}

/* transition router view */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
/* transition router view */

/*****  @media *****/
@media screen and (min-width: 1341px) {
  .menu-button {
    display: none;
  }
  #mdc-drawer-backdrop {
    display: none;
  }
}
@media screen and (min-width: 921px) {
  header {
      height: 72px;
  }
}
@media screen and (max-width: 920px) {
  header {
      height: 112px;
  }
  .nav{
      position: absolute;
      top: 64px;
      right: 0;
      left: 0;
  }
  .nav-list {
    display: table;
    width: 100%;
  }
  .nav-item {
    display: table-cell;
    transform: translateZ(0);
    text-align: center;
    width: 33.33%;
    line-height: 48px;
  }
}
@media screen and (max-width: 521px) {
  .nav-item {
    font-size: .9rem;
  }
}
</style>
