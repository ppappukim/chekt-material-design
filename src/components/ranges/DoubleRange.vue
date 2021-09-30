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

.__chekt-double-range-middle {
  position: relative;
  width: 50%;
  max-width: 500px;
}

.__chekt-double-range-slider {
  position: relative;
  z-index: 1;
  height: 6px;
  margin: 0 10px;
}
.__chekt-double-range-slider > .__chekt-double-range-track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #c4dff6;
}
.__chekt-double-range-slider > .__chekt-double-range-range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: var(--chekt-primary-color);
}
.__chekt-double-range-slider > .__chekt-double-range-thumb {
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: var(--chekt-primary-color);
  border-radius: 50%;
}
.__chekt-double-range-slider > .__chekt-double-range-thumb.left {
  left: 25%;
  transform: translate(-10px, -6px);
}
.__chekt-double-range-slider > .__chekt-double-range-thumb.right {
  right: 25%;
  transform: translate(10px, -6px);
}

input[type="range"] {
  position: absolute;
  /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 6px;
  width: 100%;
  opacity: 0;
}
input[type="range"]::-webkit-slider-thumb {
  /* 겹쳐진 두 thumb를 모두 활성화 */
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0 none;
  background-color: red;
  cursor: pointer;


  /* appearance를 해야 위의 스타일들을 볼 수 있음 */
  -webkit-appearance: none;
}

</style>
