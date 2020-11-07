<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './styles/dealer.css';
body{
  height: 100%;
  margin: 0;
}
:root{
--chekt-primary-color: #212121;
--chekt-black-color: #212121;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
