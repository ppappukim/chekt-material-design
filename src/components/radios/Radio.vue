<template>
  <div class="radio">

    <!-- Default -->
    <div id="__chekt-radios">
      <label>
        <input id="__chekt-radio" type="radio" name="radio" checked="checked">
        <div class="radiomark"></div>
        <div class="radiotext">Bobby kim</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radio">
        <div class="radiomark"></div>
        <div class="radiotext">Trevor seo</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radio">
        <div class="radiomark"></div>
        <div class="radiotext">Kevin park</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radio">
        <div class="radiomark"></div>
        <div class="radiotext">Rider kim</div>
      </label>
      <label class="disabled">
        <input id="__chekt-radio" type="radio" name="radio">
        <div class="radiomark"></div>
        <div class="radiotext">Disabled</div>
      </label>
    </div>

    <!-- Large -->
    <div id="__chekt-radios-large" style="padding-top:20px;">
      <label>
        <input id="__chekt-radio" type="radio" name="radiolarge" checked="checked">
        <div class="radiomark large"></div>
        <div class="radiotext large">Bobby kim</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radiolarge">
        <div class="radiomark large"></div>
        <div class="radiotext large">Trevor seo</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radiolarge">
        <div class="radiomark large"></div>
        <div class="radiotext large">Kevin park</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radiolarge">
        <div class="radiomark large"></div>
        <div class="radiotext large">Rider kim</div>
      </label>
    </div>

    <!-- Small -->
    <div id="__chekt-radios-small" style="padding-top:20px;">
      <label>
        <input id="__chekt-radio" type="radio" name="radiosmall" checked="checked">
        <div class="radiomark small"></div>
        <div class="radiotext small">Bobby kim</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radiosmall">
        <div class="radiomark small"></div>
        <div class="radiotext small">Trevor seo</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radiosmall">
        <div class="radiomark small"></div>
        <div class="radiotext small">Kevin park</div>
      </label>
      <label>
        <input id="__chekt-radio" type="radio" name="radiosmall">
        <div class="radiomark small"></div>
        <div class="radiotext small">Rider kim</div>
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

#__chekt-radios > label {
  display: block;
  position: relative;
  padding-left: 14px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
input#__chekt-radio {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.radiomark {
  position: absolute;
  top: 1px;
  left: 0;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}

#__chekt-radios > label.disabled {
  pointer-events: none;
}
#__chekt-radios > label.disabled > .radiomark {
  background-color: var(--chekt-blue-gray-mideum);
}
#__chekt-radios > label.disabled > .radiotext {
  color: var(--chekt-blue-gray-high);
}

/* Create a custom radio text */
.radiotext {
  font-size: 14px;
  padding-left: 10px;
  color: var(--chekt-blue-gray-highest);
}

/* When the radio button is checked, add a blue background */
input#__chekt-radio:checked ~ .radiomark {
  background-color: var(--chekt-primary-color);
  outline: solid 1px var(--chekt-primary-color);
  transition: background-color .5s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radiomark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
input#__chekt-radio:checked ~ .radiomark:after {
  display: block;
  top: 4px;
  left: 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}


/******************/
/* LARGE RADIO */
/*********************/

#__chekt-radios-large > label {
  display: block;
  position: relative;
  padding-left: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radiomark.large {
  position: absolute;
  top: 2px;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: white;
}

/* Show the indicator (dot/circle) when checked */
input#__chekt-radio:checked ~ .radiomark.large:after {
  display: block;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.radiotext.large {
  font-size: 16px;
  padding-left: 12px;
}

/******************/
/* SMALL RADIO */
/*********************/

#__chekt-radios-small > label {
  display: block;
  position: relative;
  padding-left: 12px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radiomark.small {
  position: absolute;
  top: 1px;
  left: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}

/* Show the indicator (dot/circle) when checked */
input#__chekt-radio:checked ~ .radiomark.small:after {
  display: block;
  top: 3px;
  left: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

.radiotext.small {
  font-size: 12px;
  padding-left: 8px;
}


</style>
