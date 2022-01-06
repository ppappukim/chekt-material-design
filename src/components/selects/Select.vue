<template>
  <div id="__chekt-select">
    <select class="__chekt-select">
      <option value="0">Bobby kim</option>
      <option value="1">Kevin Park</option>
      <option value="2">Trevor Seo</option>
      <option value="3">Dosung Lee</option>
      <option value="4">Leo Park</option>
      <option value="5">Rider Kim</option>
    </select>
    <div class="__chekt-select-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
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
/* src/styles/dealer-select.css */
</style>
