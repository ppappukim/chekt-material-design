<template>
  <div>
    <div class="checkboxes">
      <label class="checkbox">
        <input type="checkbox">
        <span class="checkmark small"></span>
        <span class="checkbox-text small">checkbox with text</span>
      </label>
      <label class="checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
        <span class="checkbox-text">checkbox with text</span>
      </label>
      <label class="checkbox">
        <input type="checkbox">
        <span class="checkmark large"></span>
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

.checkboxes {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

.checkbox {
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark.small {
  height: 12px;
  width: 12px;
  border-radius: 2px;
}
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px ;
}
.checkmark.large {
  height: 16px;
  width: 16px;
  border-radius: 4px;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: var(--chekt-primary-color);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(30 136 229) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  opacity: 1;
}
/* Click animation */
.checkbox input ~ .checkmark {
  transition: background-color .5s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Style the checkmark/indicator -- small */
.checkbox .checkmark.small:after {
  left: 3.5px;
  top: 0px;
  width: 2.1px;
  height: 6.8px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 4px;
  top: 0px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator -- large */
.checkbox .checkmark.large:after {
  left: 5px;
  top: 0px;
  width: 3px;
  height: 9px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}
</style>
