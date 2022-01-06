<template>
  <div class="ranges">
    <div class="__chekt-range">
      <input @input="setValue()" type="range" id="__chekt-range" min="0" max="100" value="0" />
      <div class="__chekt-range-slider">
        <div class="__chekt-range-track"></div>
        <div class="__chekt-range-range"></div>
        <div class="__chekt-range-thumb"></div>
      </div>
    </div>
    <div class="__chekt-range">
      <input @input="setValueRangeSmall()" type="range" id="__chekt-range-small" min="0" max="100" value="0" />
      <div class="__chekt-range-small-slider">
        <div class="__chekt-range-small-track"></div>
        <div class="__chekt-range-small-range"></div>
        <div class="__chekt-range-small-thumb"></div>
      </div>
    </div>
    <div class="__chekt-range disable" title="Disabled">
      <input type="range" id="__chekt-range" min="0" max="100" value="0" />
      <div class="__chekt-range-slider">
        <div class="__chekt-range-track"></div>
        <div class="__chekt-range-range"></div>
        <div class="__chekt-range-thumb"></div>
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

      inputSmall: '',
      thumbSmall: '',
      rangeSmall: ''

      
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
      this.input = document.getElementById("__chekt-range")
      this.thumb = document.querySelector(".__chekt-range-slider > .__chekt-range-thumb")
      this.range = document.querySelector(".__chekt-range-slider > .__chekt-range-range")

      this.inputSmall = document.getElementById("__chekt-range-small")
      this.thumbSmall = document.querySelector(".__chekt-range-small-slider > .__chekt-range-small-thumb")
      this.rangeSmall = document.querySelector(".__chekt-range-small-slider > .__chekt-range-small-range")
    },
    setValue: function () {
      const _this = this.input;
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)]
      // input, thumb 같이 움직이도록
      const percent = ((_this.value - min) / (max - min)) * 100
      this.thumb.style.left = percent + "%"
      this.range.style.width = percent + "%"
    },
    setValueRangeSmall: function () {
      const _this = this.inputSmall;
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)]
      // input, thumb 같이 움직이도록
      const percent = ((_this.value - min) / (max - min)) * 100
      this.thumbSmall.style.left = percent + "%"
      this.rangeSmall.style.width = percent + "%"
    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-range.css */
.ranges {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
}
</style>
