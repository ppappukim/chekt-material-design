<template>
  <div class="labels">

    <div class="labels-wrapper">
      <div class="label default">Label</div>
      <div class="label normal">Normal</div>
      <div class="label danger">Danger</div>
      <div class="label success">Success</div>
      <div class="label good">Good</div>
      <div class="label other">Other</div>
      <div class="label disabled">Disabled</div>
    </div>

    <div class="labels-wrapper">
      <div class="label small default">Label</div>
      <div class="label large default">Label</div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/* common button */
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
.label {
  padding: 3px 10px;
  color: var(--chekt-primary-color);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: #E9F3FC;
  box-sizing: border-box;
}
.label.small {
  padding: 2px 8px;
  color: var(--chekt-primary-color);
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  background-color: #E9F3FC;
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
/* danger color button */
.label.danger {
  color: var(--chekt-danger-color);
  background-color: #FAECF0;
}
/* success color button */
.label.success {
  color: var(--chekt-success-color);
  background-color: #E9F6F1;
}
/* good color button */
.label.good {
  color: #366202;
  background-color: #EBEFE6;
}
/* other color button */
.label.other {
  color: #983705;
  background-color: #F5EBE6;
}
/* disabled color button */
.label.disabled {
  color: var(--chekt-blue-gray-high);
  background-color: #EEF0F2;
}

</style>