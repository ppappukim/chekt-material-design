<template>
  <div>
    <div class="checkboxes">
      <label class="__chekt-checkbox">
        <input type="checkbox">
        <span class="__chekt-checkmark small"></span>
      </label>                       
      <label class="__chekt-checkbox">
        <input type="checkbox">
        <span class="__chekt-checkmark"></span>
      </label>
      <label class="__chekt-checkbox">
        <input type="checkbox">
        <span class="__chekt-checkmark large"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
/* src/styles/dealer-checkbox.css */
.checkboxes {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
</style>
