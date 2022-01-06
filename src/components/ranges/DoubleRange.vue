<template>
  <div class="__chekt-double-range-middle">
    <div>
      <input @input="setLeftValue()" type="range" id="__chekt-double-range-left" min="0" max="100" value="25" />
      <input @input="setRightValue()" type="range" id="__chekt-double-range-right" min="0" max="100" value="75" />

      <div class="__chekt-double-range-slider">
        <div class="__chekt-double-range-track"></div>
        <div class="__chekt-double-range-range"></div>
        <div class="__chekt-double-range-thumb left"></div>
        <div class="__chekt-double-range-thumb right"></div>
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
      inputLeft: '',
      inputRight: '',
      thumbLeft: '',
      thumbRight: '',
      range: '',
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
      this.inputLeft = document.getElementById("__chekt-double-range-left")
      this.inputRight = document.getElementById("__chekt-double-range-right")

      this.thumbLeft = document.querySelector(".__chekt-double-range-slider > .__chekt-double-range-thumb.left")
      this.thumbRight = document.querySelector(".__chekt-double-range-slider > .__chekt-double-range-thumb.right")
      this.range = document.querySelector(".__chekt-double-range-slider > .__chekt-double-range-range")
    },
    setLeftValue: function () {
      const _this = this.inputLeft;
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)]
      // 교차되지 않게, 1을 빼준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해.
      _this.value = Math.min(parseInt(_this.value), parseInt(this.inputRight.value) - 1)
      // input, thumb 같이 움직이도록
      const percent = ((_this.value - min) / (max - min)) * 100
      this.thumbLeft.style.left = percent + "%"
      this.range.style.left = percent + "%"
    },
    setRightValue: function () {
      const _this = this.inputRight
      const [min, max] = [parseInt(_this.min), parseInt(_this.max)]
      // 교차되지 않게, 1을 더해준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해.
      _this.value = Math.max(parseInt(_this.value), parseInt(this.inputLeft.value) + 1)
      // input, thumb 같이 움직이도록
      const percent = ((_this.value - min) / (max - min)) * 100
      this.thumbRight.style.right = 100 - percent + "%"
      this.range.style.right = 100 - percent + "%"
    }
  }
}
</script>

<style scoped>
/* src/styles/dealer-range.css */
</style>
