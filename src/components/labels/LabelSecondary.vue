<template>
  <div class="labels">

    <div class="labels-wrapper">
      <div class="__chekt-second-label default">Label</div>
      <div class="__chekt-second-label normal">Normal</div>
      <div class="__chekt-second-label danger">Danger</div>
      <div class="__chekt-second-label success">Success</div>
      <div class="__chekt-second-label good">Good</div>
      <div class="__chekt-second-label other">Other</div>
      <div class="__chekt-second-label disabled">Disabled</div>
    </div>

    <div class="labels-wrapper">
      <div class="__chekt-second-label small default">Label</div>
      <div class="__chekt-second-label large default">Label</div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* src/styles/dealer-label.css */
.labels {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  grid-gap: 50px;
}
.labels-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 20px;
}
</style>