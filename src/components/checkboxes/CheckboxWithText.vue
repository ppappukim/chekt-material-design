<template>
  <div>
    <div class="checkboxes">
      <label class="__chekt-checkbox">
        <input type="checkbox">
        <span class="__chekt-checkmark small"></span>
        <span class="checkbox-text small">checkbox with text</span>
      </label>
      <label class="__chekt-checkbox">
        <input type="checkbox">
        <span class="__chekt-checkmark"></span>
        <span class="checkbox-text">checkbox with text</span>
      </label>
      <label class="__chekt-checkbox">
        <input type="checkbox">
        <span class="__chekt-checkmark large"></span>
        <span class="checkbox-text large">checkbox with text</span>
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
.checkbox-text.small {
  font-size: 12px;
  margin-left: 6px;
}
.checkbox-text.large {
  font-size: 16px;
  margin-left: 8px;
}
.checkbox-text {
  margin-left: 7px;
  color: var(--chekt-text-high);
  font-size: 14px;
}
</style>
