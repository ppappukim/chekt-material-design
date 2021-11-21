<template>
	<div>
    <div class="main">
      <div class="main-img">
        <!-- background -->
        <div class="main-img-bg">
          <div class="main-img-bg-left">
            <img src="../../assets/main-bg-left.png" alt="">
          </div>
          <div class="main-img-bg-center">
            <!-- chekt text -->
            <div class="chekt-indicator one" v-bind:class="{ move:aniStart }" style="z-index:2;">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-3.png" alt=""></div>
              <div class="chekt-cursor"><img src="../../assets/designer-pink.png" alt="" width="100px"></div>
            </div>
            <div class="chekt-indicator two" v-bind:class="{ move:aniTwo }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-3.png" alt=""></div>
              <div class="chekt-cursor"><img src="../../assets/developer-yellow.png" alt="" width="100px"></div>
            </div>
            <div class="chekt-indicator three" v-bind:class="{ move:aniThree }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-3.png" alt=""></div>
              <div class="chekt-cursor"><img src="../../assets/developer-lightgreen.png" alt="" width="100px"></div>
            </div>
            <div class="chekt-indicator four" v-bind:class="{ move:aniFour }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-5.png" alt=""></div>
              <div class="chekt-cursor"><img src="../../assets/pm-lightblue.png" alt="" width="70px"></div>
            </div>
            <div class="chekt-indicator five" v-bind:class="{ move:aniFive }" style="z-index:1;">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-2.png" alt=""></div>
              <div class="chekt-cursor"><img src="../../assets/designer-deepblue.png" alt="" width="100px"></div>
            </div>
            <div class="chekt-indicator six" v-bind:class="{ move:aniSix }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-5.png" alt=""></div>
              <div class="chekt-cursor"><img src="../../assets/developer-red.png" alt="" width="100px"></div>
            </div>
            <!-- chekt text -->
            <img src="../../assets/main-bg-center-test.png" alt="" style="margin-left:-2px;">
          </div>
          <div class="main-img-bg-right">
            <img src="../../assets/main-bg-right.png" alt="" style="margin-left:-2px;">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  data: function() {
    return {
      aniStart: false,
      aniTwo: false,
      aniThree: false,
      aniFour: false,
      aniFive: false,
      aniSix: false,
    }
  },
  watch: {
  },
  created: function () {
    window.addEventListener("resize", this.onResizeScreen)
  },
  mounted: function () {
    this.startAnimaiton()
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    startAnimaiton: async function () {
      await this.$tool.wait(1000)
      this.aniStart = true
      await this.$tool.wait(500)
      this.aniTwo = true
      await this.$tool.wait(300)
      this.aniThree = true
      await this.$tool.wait(300)
      this.aniFour = true
      await this.$tool.wait(200)
      this.aniFive = true
      await this.$tool.wait(200)
      this.aniSix = true
    },
    onResizeScreen: function () {
      console.log(this.scrollPositon);
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 72px;

}
.main-img {
  position: absolute;
  width: 100%;
}
.main-img-chekt {
  display: block;
  position: relative;
}

.main-img-bg {
  display: flex;
  justify-content: center;
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.main-img-bg-center {
  position: relative;
}

.chekt-indicator {
  position: absolute;
}



/* ANIMATION 1 */
.chekt-indicator.one {
  transform : translate( -200px, -200px);
}
.chekt-indicator.one.move {
  transform : translate( 62px, 193px);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.chekt-indicator.one .chekt-cursor {
  position: relative;
  left: 80px;
  top: -20px;
}

/* ANIMATION 2 */
.chekt-indicator.two {
  transform : translate( 200px, 500px);
  opacity: 0;
}
.chekt-indicator.two.move {
  transform : translate( 62px, 323px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1), opacity .3s;
}
.chekt-indicator.two .chekt-cursor {
  position: relative;
  left: -50px;
  top: -20px;
}

/* ANIMATION 3 */
.chekt-indicator.three {
  transform : translate( -200px, 500px);
  opacity: 0;
}
.chekt-indicator.three > .chekt-lego {
  transform: rotate(90deg);
}
.chekt-indicator.three.move {
  transform : translate( -6px, 257px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.three .chekt-cursor {
  position: relative;
  left: -55px;
  top: -50px;
}

/* ANIMATION 4 */
.chekt-indicator.four {
  transform : translate( 300px, 400px);
  opacity: 0;
}
.chekt-indicator.four.move {
  transform : translate( 192px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.four .chekt-cursor {
  position: relative;
  left: 15px;
  top: -20px;
}

/* ANIMATION 5 */
.chekt-indicator.five {
  transform : translate( 300px, 50px);
  opacity: 0;
}
.chekt-indicator.five.move {
  transform : translate( 224px, 257px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.five .chekt-cursor {
  position: relative;
  left: 15px;
  top: -20px;
}

/* ANIMATION 6 */
.chekt-indicator.six {
  transform : translate( 370px, 350px);
  opacity: 0;
}

.chekt-indicator.six.move {
  transform : translate( 290px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.six .chekt-cursor {
  position: relative;
  left: 15px;
  top: -20px;
}


</style>
