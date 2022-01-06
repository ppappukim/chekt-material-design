<template>
  <div class="labels">
    <div class="__chekt-label large normal icon">
      bobby@chekt.com
      <div @click="onClickCloseLabel($event)" class="__chekt-label-action-icon">
        <MyIcon v-bind:icon="'close'" v-bind:width="18"/>
      </div>
    </div>
    <div class="__chekt-label large normal icon">
      bobbykim@chekt.c...
      <div @click="onClickCloseLabel($event)" class="__chekt-label-action-icon">
        <MyIcon v-bind:icon="'close'" v-bind:width="18"/>
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
  methods: {
    onClickCloseLabel: function (e) {
      var labelEl = e.currentTarget.parentNode
      labelEl.style.display = 'none'
    }
  }
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