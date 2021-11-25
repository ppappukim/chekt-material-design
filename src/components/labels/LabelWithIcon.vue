<template>
  <div class="labels">

    <div class="label default icon">
      <div class="label-icon">
        <MyIcon v-bind:icon="'person-circle'" v-bind:width="16"/>
      </div>
      bobbyk@chekt.com
    </div>
    <div class="label default large icon">
      <div class="label-icon">
        <MyIcon v-bind:icon="'person-circle'" v-bind:width="18"/>
      </div>
      trevors@chekt.com
    </div>
    <div class="label default small icon">
      <div class="label-icon">
        <MyIcon v-bind:icon="'person-circle'" v-bind:width="14"/>
      </div>
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
</style>