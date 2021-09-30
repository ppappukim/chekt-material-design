<template>
  <div class="range" style="margin-top:30px;">
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
.range {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
}

.__chekt-range-value {
  position: relative;
  width: 50%;
  max-width: 500px;
}

.__chekt-range-value-slider {
  position: relative;
  z-index: 1;
  height: 6px;
  margin: 0 10px;
}
.__chekt-range-value-slider > .__chekt-range-value-track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #c4dff6;
}
.__chekt-range-value-slider > .__chekt-range-value-range {
  position: absolute;
  z-index: 2;
  width: 0%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: var(--chekt-primary-color);
}
.__chekt-range-value-slider > .__chekt-range-value-thumb {
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: var(--chekt-primary-color);
  border-radius: 50%;
}
.__chekt-range-value-slider > .__chekt-range-value-thumb {
  left: 0%;
  transform: translate(-10px, -6px);
}

.__chekt-range-value-info {
  position:absolute;
  top: calc(-100% + -10px);
  left: -50%;
  padding: 3px 10px;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  color: var(--chekt-blue-gray-highest);
  box-shadow: 0px 0px 5px var(--chekt-border);
  border: solid 1px var(--chekt-border);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}

input#__chekt-range-value {
  position: absolute;
  /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 6px;
  width: 100%;
  opacity: 0;
}
input#__chekt-range-value::-webkit-slider-thumb {
  /* 겹쳐진 두 thumb를 모두 활성화 */
  pointer-events: all;
  width: 20px;
  height: 20px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  cursor: pointer;

  /* appearance를 해야 위의 스타일들을 볼 수 있음 */
  -webkit-appearance: none;
}


</style>
