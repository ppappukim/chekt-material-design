<template>
  <div class="toggle-wrapper">
    <div class="toggle-box">
      <label class="toggle" for="__chekt-toggle-text">
        <input type="checkbox" id="__chekt-toggle-text" />
        <div class="slider round"></div>
      </label>
      <div class="toggle-text">Send notification</div>
    </div>
    <div class="toggle-box">
      <label class="toggle disabled" for="__chekt-toggle">
        <input type="checkbox" id="__chekt-toggle" />
        <div class="slider round"></div>
      </label>
      <div class="toggle-text disabled">Send notification</div>
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
.toggle-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
}
.toggle-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.toggle {
  display: inline-block;
  height: 18px;
  position: relative;
  width: 36px;
}
.toggle-text {
  font-size: 16px;
  color: var(--chekt-blue-gray-highest);
  padding-left: 10px;
}
.toggle-text.disabled {
  color: var(--chekt-blue-gray-high);
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

input#__chekt-toggle-text:checked + .slider:before {
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
 