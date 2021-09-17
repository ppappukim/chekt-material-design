<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'App',
}
</script>

<style>
@import './styles/dealer.css';
body{
  height: 100%;
  margin: 0;
}
:root{
  --chekt-primary-color: #1E88E5;
  --chekt-primary-shadow-color: #1A78CA;
  --chekt-primary-tint-color: #3594E8;

  --chekt-secondary-color: #4A5CBB;
  --chekt-secondary-shadow-color: #4A5CBB;
  --chekt-secondary-tint-color: #6578D8;

  --chekt-success-color: #1EA675;
  --chekt-success-shadow-color: #1A9267;
  --chekt-success-tint-color: #35AF83;

  --chekt-danger-color: #CD3D64;
  --chekt-danger-shadow-color: #B43658;
  --chekt-danger-tint-color: #D25074;

  --chekt-warning-color: #F5925E;
  --chekt-warning-shadow-color: #D88053;
  --chekt-warning-tint-color: #F69D6E;

  --chekt-gray-high: #212121;
  --chekt-gray-mideum: #666666;
  --chekt-gray-low: #9E9E9E;

  --chekt-blue-gray-highest: #3c4257;
  --chekt-blue-gray-higher: #55647B;
  --chekt-blue-gray-high: #8792A2;
  --chekt-blue-gray-mideum: #E3E8EE;
  --chekt-blue-gray-low: #F2F6F9;
  --chekt-blue-gray-lower: #F7FAFC;

  --chekt-border: #E6E6E6;
  --chekt-badge: #ba2222;

  /* Text Color - Color Code */
  --chekt-text-high: #212121;
  --chekt-text-medeium: #1f1d1d;
  --chekt-text-disable: #9E9E9E;

  /* Text Color - Opacity */
  --chekt-text-high-rgb: rgba(0,0,0,0.87);
  --chekt-text-medeium-rgb: rgba(0,0,0,0.6);
  --chekt-text-disable-rgb: rgba(0,0,0,0.38);

}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
