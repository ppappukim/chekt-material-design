<template>
  <div class="badges">
    <div class="icon">
      <MyIcon v-bind:icon="'bell'" v-bind:width="32" />
      <div class="__chekt-small-badge"></div>
    </div>
    <div class="icon">
      <MyIcon v-bind:icon="'bell'" v-bind:width="24" />
      <div class="__chekt-smaller-badge"></div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon,
  },
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
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
/* src/styles/dealer-badge.css */
.badges {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
.icon {
  position: relative;
  margin-right: 20px;
}
</style>
