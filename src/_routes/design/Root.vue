<template>
	<div>

		<!--  -->
		<!-- HEADER -->
    <header v-bind:class="{ 'hidden': !showNavbar }">
      <button class="menu-button">
        <i class="material-icons">menu</i>
      </button>
      <a class="brand" aria-label="Navigate to the chekt material homepage">
        <i class="brand-logo"></i>
      </a>
      <nav class="nav" role="navigation">
        <ul class="nav-list">
          <li class="nav-item"><router-link to="/design/dealer">Dealer</router-link></li>
          <li class="nav-item"><router-link to="/design/monitoring">Monitoring</router-link></li>
          <li class="nav-item"><router-link to="/design/enduser">Enduser App</router-link></li>
        </ul>
      </nav>
      <form>
      </form>
      <button class="search-button">
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
		<!-- FOOTER -->
		<!--  -->

  </div>
</template>

<script>
export default {
  computed: {
  },
  data: function() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  watch: {
  },
  created: function () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
header{
  width: 100%;
  transition: transform 300ms 0ms cubic-bezier(0.4, 0, 0.6, 1), opacity 0s 300ms;
  background-color: var(--chekt-primary-color, #212121);
  display: flex;
  justify-content: space-between;
  height: 72px;
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
}
.brand {
  display: flex;
  align-items: center;
  height: 72px;
  margin-right: auto;
  padding-left: 24px;
  -webkit-font-smoothing: auto;
  text-decoration: none;
}
.brand-logo{
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  background: url(../../assets/logo.png) 100% 50%/auto 100% no-repeat;
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
  text-decoration: inherit;
  user-select: none;
  color: #fff;
  padding: 0 16px;
  line-height: 72px;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
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
</style>
