<template>
  <div class="toggle-wrapper">
    <label class="toggle" for="__chekt-toggle">
      <input type="checkbox" id="__chekt-toggle" />
      <div class="slider round"></div>
    </label>
    <label class="toggle large" for="__chekt-toggle-large">
      <input type="checkbox" id="__chekt-toggle-large" />
      <div class="slider round large"></div>
    </label>
    <label class="toggle small" for="__chekt-toggle-small">
      <input type="checkbox" id="__chekt-toggle-small" />
      <div class="slider round"></div>
    </label>
    <label class="toggle disabled" for="__chekt-toggle">
      <input type="checkbox" id="__chekt-toggle" />
      <div class="slider round"></div>
    </label>
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
.toggle-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
}
.toggle {
  display: inline-block;
  height: 18px;
  position: relative;
  width: 36px;
}

.toggle input {
  display:none;
}

.slider {
  background-color: var(--chekt-blue-gray-mideum);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  cursor: pointer;
  transition: .4s;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px;
}

.slider:before {
  background-color: #fff;
  content: "";
  height: 18px;
  width: 18px;
  position: absolute;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--chekt-primary-color);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(30 136 229) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px;

}

input#__chekt-toggle:checked + .slider:before {
  transform: translateX(18px);
}

.slider.round {
  border-radius: 18px;
}

.slider.round:before {
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
              rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}


/**************************/
/****** Toggle Large ******/
/**************************/
.toggle.large {
  height: 20px;
  width: 40px;
}
.toggle.large > .slider {
  border-radius: 20px;
}
.toggle.large > .slider:before {
  height: 20px;
  width: 20px;
}
input#__chekt-toggle-large:checked + .slider:before {
  transform: translateX(20px);
}

/**************************/
/****** Toggle Small ******/
/**************************/
.toggle.small {
  height: 14px;
  width: 28px;
}
.toggle.small > .slider {
  border-radius: 14px;
}
.toggle.small > .slider:before {
  height: 14px;
  width: 14px;
}
input#__chekt-toggle-small:checked + .slider:before {
  transform: translateX(14px);
}

/*****************************/
/****** Toggle Disabled ******/
/*****************************/
.toggle.disabled {
  pointer-events: none;
}
.toggle.disabled > .slider:before {
  background-color: var(--chekt-blue-gray-mideum);
}

</style>
