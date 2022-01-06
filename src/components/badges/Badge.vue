<template>
  <div class="badges">
    <div class="icon">
      <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
      <div class="__chekt-badge">2</div>
    </div>
    <div class="icon">
      <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
      <div class="__chekt-badge">23</div>
    </div>
    <div class="icon">
      <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
      <div class="__chekt-badge">+99</div>
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
