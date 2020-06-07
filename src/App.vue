<template>
  <div id="app">
    <Header/>
    <view-router></view-router>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body{
  height: 100%;
  margin: 0;
}
:root{
--chekt-primary-color: #212121;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
