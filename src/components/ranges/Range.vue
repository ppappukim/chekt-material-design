<template>
  <div class="range">
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
.range {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
}

.__chekt-range {
  position: relative;
  width: 50%;
  max-width: 500px;
}

.__chekt-range-slider {
  position: relative;
  z-index: 1;
  height: 6px;
  margin: 0 10px;
}
.__chekt-range-slider > .__chekt-range-track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #c4dff6;
}
.__chekt-range-slider > .__chekt-range-range {
  position: absolute;
  z-index: 2;
  width: 0%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: var(--chekt-primary-color);
}
.__chekt-range-slider > .__chekt-range-thumb {
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: var(--chekt-primary-color);
  border-radius: 50%;
}
.__chekt-range-slider > .__chekt-range-thumb {
  left: 0%;
  transform: translate(-10px, -6px);
}

input#__chekt-range {
  position: absolute;
  /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 6px;
  width: 100%;
  opacity: 0;
}
input#__chekt-range::-webkit-slider-thumb {
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

/*********************/
/* DISABLE RANGE */
/*********************/

.__chekt-range.disable > input#__chekt-range::-webkit-slider-thumb {
  pointer-events: none;
}

.__chekt-range.disable .__chekt-range-track{
  background-color: var(--chekt-blue-gray-mideum);
}

.__chekt-range.disable .__chekt-range-thumb{
  background-color: var(--chekt-gray-low);
  left: 20%;
}

.__chekt-range.disable .__chekt-range-range{
  background-color: var(--chekt-gray-low);
  width: 20%;
}



/*********************/
/* SMALL RANGE */
/*********************/

.__chekt-range {
  position: relative;
  width: 50%;
  max-width: 500px;
}

.__chekt-range-small-slider {
  position: relative;
  z-index: 1;
  height: 4px;
  margin: 0 7px;
}
.__chekt-range-small-slider > .__chekt-range-small-track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #c4dff6;
}
.__chekt-range-small-slider > .__chekt-range-small-range {
  position: absolute;
  z-index: 2;
  width: 0%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: var(--chekt-primary-color);
}
.__chekt-range-small-slider > .__chekt-range-small-thumb {
  position: absolute;
  z-index: 3;
  width: 14px;
  height: 14px;
  background-color: var(--chekt-primary-color);
  border-radius: 50%;
}
.__chekt-range-small-slider > .__chekt-range-small-thumb {
  left: 0%;
  transform: translate(-7px, -4px);
}

input#__chekt-range-small {
  position: absolute;
  /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 4px;
  width: 100%;
  opacity: 0;
}
input#__chekt-range-small::-webkit-slider-thumb {
  /* 겹쳐진 두 thumb를 모두 활성화 */
  pointer-events: all;
  width: 14px;
  height: 14px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  cursor: pointer;

  /* appearance를 해야 위의 스타일들을 볼 수 있음 */
  -webkit-appearance: none;
}

</style>
