<template>
  <div class="labels">

    <div class="__chekt-label default icon">
      <MyIcon v-bind:icon="'person-circle'" v-bind:width="16"/>
      bobbyk@chekt.com
    </div>
    <div class="__chekt-label default large icon">
      <MyIcon v-bind:icon="'person-circle'" v-bind:width="18"/>
      trevors@chekt.com
    </div>
    <div class="__chekt-label default small icon">
      <MyIcon v-bind:icon="'person-circle'" v-bind:width="14"/>
      kevinp@chekt.com
    </div>

  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon,
  },
}
</script>

<style scoped>
/* src/styles/dealer-label.css */
.labels {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  grid-gap: 20px;
  flex-wrap: wrap;
}
</style>