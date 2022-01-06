<template>
  <div>
    <div class="buttons">
      <div class="__chekt-button default icon">
        <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-text-high);" />
        Loading
      </div>
      <div class="__chekt-button default icon">
        <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-text-high); width:64px;" />
      </div>
      <div class="__chekt-button primary icon">
        <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:white; width:64px;" />
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon
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
/* src/styles/dealer-button.css */
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
</style>
