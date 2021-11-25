<template>
  <div class="labels">
    <div class="label large normal icon">
      bobby@chekt.com
      <div @click="onClickCloseLabel($event)" class="label-icon">
        <MyIcon v-bind:icon="'close'" v-bind:width="18"/>
      </div>
    </div>
    <div class="label large normal icon">
      bobbykim@chekt.c...
      <div @click="onClickCloseLabel($event)" class="label-icon">
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

/* common button */
.labels {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  grid-gap: 20px;
  flex-wrap: wrap;
}
.label.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}
.label {
  padding: 3px 10px;
  color: var(--chekt-primary-color);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: #E9F3FC;
  box-sizing: border-box;
}
.label.large {
  padding: 4px 12px;
  color: var(--chekt-primary-color);
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  background-color: #E9F3FC;
}

/* normal color button */
.label.normal {
  color: var(--chekt-blue-gray-higher);
  background-color: var(--chekt-blue-gray-mideum);
}
.label-icon {
  cursor: pointer;
}
.label-icon:hover {
  color: var(--chekt-primary-color);
}
</style>