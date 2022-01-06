<template>
  <div>
    <div class="buttons">
      <div class="__chekt-button default">Button</div>
      <div class="__chekt-button primary">Button</div>
      <div class="__chekt-button danger">Button</div>
      <div class="__chekt-button success">Button</div>
    </div>
    <div class="buttons" style="margin-top:50px;">
      <div class="__chekt-button-small default">Button</div>
      <div class="__chekt-button-large default">Button</div>
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
/* src/styles/dealer-button.css */
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
</style>
