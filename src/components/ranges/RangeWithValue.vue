<template>
  <div class="__chekt-range-value-wrapper" style="margin-top:30px;">
    <div class="__chekt-range-value">
      <input @input="setValue()" type="range" id="__chekt-range-value" min="0" max="100" value="0" />
      <div class="__chekt-range-value-slider">
        <div class="__chekt-range-value-track"></div>
        <div class="__chekt-range-value-range"></div>
        <div class="__chekt-range-value-thumb">
          <div class="__chekt-range-value-info">{{value}}</div>
        </div>
      </div>
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
      input: '',
      thumb: '',
      range: '',
      value: '0',
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      this.input = document.getElementById("__chekt-range-value")
      this.thumb = document.querySelector(".__chekt-range-value-slider > .__chekt-range-value-thumb")
      this.range = document.querySelector(".__chekt-range-value-slider > .__chekt-range-value-range")
    },
    setValue: function () {
      const _this = this.input;
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)]
      // input, thumb 같이 움직이도록
      const percent = ((_this.value - min) / (max - min)) * 100
      this.thumb.style.left = percent + "%"
      this.range.style.width = percent + "%"
      this.value = _this.value
    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-range.css */
</style>
