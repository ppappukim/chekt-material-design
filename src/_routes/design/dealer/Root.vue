<template>
	<div class="body-container">
    <aside class="mdc-drawer">
      <div class="header">
        <a class="brand" aria-label="Navigate to the chekt material homepage">
          <i class="brand-logo"></i><span class="brand-text">Design</span>
        </a>
      </div>
      <div class="content">
        <div class="section">System</div>
        <ul class="topics-container">
          <li v-on:click="onClickList($event,'layout')">Layout</li>
          <li v-on:click="onClickList($event,'color')">Color</li>
          <li v-on:click="onClickList($event,'typograph')">Typograph</li>
          <li v-on:click="onClickList($event,'icons')">Icons</li>
        </ul>
        <div class="section">Components</div>
        <ul class="topics-container">
          <li>Bagde</li>
          <li>Buttons</li>
          <li>Cards</li>
          <li>Data table</li>
          <li>Dialog</li>
          <li>Label</li>
          <li>Loading</li>
          <li>Modal</li>
          <li>Piker</li>
          <li>Range Sliber</li>
          <li>Toast</li>
        </ul> 
      </div>
    </aside>
    <div class="content-container">
      <!--  -->
      <!-- ROUTER -->
      <router-view></router-view>
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
    }
  },
  watch: {
  },
  created: function () {
  },
  methods: {
    onClickList: function (e, menu) {
      this.$router.push({path: `/design/dealer/${menu}`})
    },
  }
}
</script>

<style scoped>
.body-container {
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
}
.mdc-drawer {
  border-color: rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border-radius: 0 0 0 0;
  z-index: 5;
  width: 280px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 100%;
  border-right-width: 1px;
  border-right-style: solid;
  overflow: hidden;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-drawer .header {
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.brand {
  display: flex;
  align-items: center;
  height: 72px;
  margin-right: auto;
  -webkit-font-smoothing: auto;
  text-decoration: none;
}
.brand-logo{
  display: block;
  width: 65px;
  height: 32px;
  margin-right: 8px;
  margin-left: 24px;
  /* background: url(../../assets/chekt_text_logo_dark.png) 100% 50%/auto 40% no-repeat; */
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
    width: 100%;
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

@media screen and (min-width: 1341px) {
  .mdc-drawer { 
    z-index: 3;
  }
}
</style>
