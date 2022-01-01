<template>
	<div>
    <!-- Mobile Img -->
    <div v-if="showMobileMainImg" class="main">
      <img src="../../assets/main-mobile.png" width="100%" alt="">
    </div>
    <!-- Web Img -->
    <div v-else class="main">
      <div class="main-img">
        <!-- background -->
        <div class="main-img-bg">
          <div class="main-img-bg-left">
            <img src="../../assets/main-bg-left.png" alt="">
          </div>
          <div class="main-img-bg-center">
            <!-- chekt text -->
            <!-- C -->
            <div class="chekt-indicator one" v-bind:class="{ move:aniStart }" style="z-index:2;">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-c-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #FF8A00;">Bobby Kim</div>
              </div>
            </div>
            <div class="chekt-indicator two" v-bind:class="{ move:aniTwo }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-c-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img right" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #12D226;">Trevor Seo</div>
              </div>           
            </div>
            <div class="chekt-indicator three" v-bind:class="{ move:aniThree }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-c-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img right" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #3A36FF;">Kevin Park</div>
              </div>           
            </div>
            <!-- H -->
            <div class="chekt-indicator four" v-bind:class="{ move:aniFour }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-h-1.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #4D89FF;">Josh So</div>
              </div>
            </div>
            <div class="chekt-indicator five" v-bind:class="{ move:aniFive }" >
              <div class="chekt-lego"><img src="../../assets/chekt-lego-h-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #F97ABE;">Elly Lee</div>
              </div>            
            </div>
            <!-- E -->
            <div class="chekt-indicator six" v-bind:class="{ move:aniSix }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-e-1.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #302A7B;">Chas Park</div>
              </div>
            </div>
            <div class="chekt-indicator seven" v-bind:class="{ move:aniSeven }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-e-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img right" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #A012D2;">Stella Lee</div>
              </div>
            </div>
            <div class="chekt-indicator eight" v-bind:class="{ move:aniEight }" style="z-index:2;">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-e-3.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #D21258;">Amber Lee</div>
              </div>
            </div>
            <!-- K -->
            <div class="chekt-indicator nine" v-bind:class="{ move:aniNine }" style="z-index:2;">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-k-1.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img right" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #00C2FF;">Rider Kim</div>
              </div>            
            </div>
            <div class="chekt-indicator ten" v-bind:class="{ move:aniTen }" style="z-index:1;">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-k-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #2B4F51;">Leo Park</div>
              </div>            
            </div>
            <!-- T -->
            <div class="chekt-indicator ten-one" v-bind:class="{ move:aniTenOne }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-t-1.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #009962;">Do Sung</div>
              </div>            
            </div>
            <div class="chekt-indicator ten-two" v-bind:class="{ move:aniTenTwo }">
              <div class="chekt-lego"><img src="../../assets/chekt-lego-t-2.png" alt=""></div>
              <div class="chekt-cursor" v-bind:class="{ remove:AllcursorRemove }">
                <img src="../../assets/web-arrow.png" class="cursor-img" alt="" width="12px">
                <div class="chekt-member-label" style="background-color: #FF6320;">David Erickson</div>
              </div>            
            </div>
            <!-- chekt text -->
            <img src="../../assets/main-bg-center.png" alt="">
          </div>
          <div class="main-img-bg-right">
            <img src="../../assets/main-bg-right.png" alt="">
          </div>
        </div>
      </div>
      
    </div>
    <!-- Portal Introduce -->
    <div class="contents">
      <div class="portals">
        <div class="portals-header">
          <div class="portals-title">Welcome to CHeKT</div>
          <div class="portals-subtitle">Use chekt most popular design and development resources with your latest project</div>
        </div>
        <div class="portals-body">
          <div @click="onClickPortal('dealer')" class="portal-boxwrapper">
            <div class="portal-box">
              <div class="portal-img"><img src="../../assets/portal-dealer.png" alt=""></div>
              <div class="portal-text">
                <div class="portal-text-title">Dealer Portal</div>
                <div class="portal-text-subtitle">Manager site mainly used by dealers. Can manage and set up sites or dealers.</div>
              </div>
            </div>
          </div>
          <div @click="onClickPortal('monitoring')" class="portal-boxwrapper">
            <div class="portal-box">
              <div class="portal-img"><img src="../../assets/portal-monitoring.png" alt=""></div>
              <div class="portal-text">
                <div class="portal-text-title">Monitoring Portal</div>
                <div class="portal-text-subtitle">Monitor customer video events. Mainly used by operators.</div>
              </div>              
            </div>
          </div>
          <div @click="onClickPortal('enduser')" class="portal-boxwrapper">
            <div class="portal-box">
              <div class="portal-img"><img src="../../assets/portal-enduser.png" alt=""></div>
              <div class="portal-text">
                <div class="portal-text-title">Enduser App</div>
                <div class="portal-text-subtitle">App used by end users. Can set arm/disarm, view the camera or activity log.</div>
              </div>              
            </div>
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
      aniSeven: false,
      aniEight: false,
      aniNine: false,
      aniTen: false,
      aniTenOne: false,
      aniTenTwo: false,
      AllcursorRemove: false,
      showMobileMainImg: false
    }
  },
  watch: {
  },
  created: function () {
    window.addEventListener("resize", this.onResizeScreen)
    this.onResizeScreen()
  },
  mounted: function () {
    this.$tool.scrollTo(0, 0)
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
      await this.$tool.wait(200)
      this.aniSeven = true
      await this.$tool.wait(300)
      this.aniEight = true
      await this.$tool.wait(200)
      this.aniNine = true
      await this.$tool.wait(200)
      this.aniTen = true
      await this.$tool.wait(200)
      this.aniTenOne = true
      await this.$tool.wait(200)
      this.aniTenTwo = true
      await this.$tool.wait(3000)
      this.AllcursorRemove = true
    },
    onClickPortal: function (type) {
      switch (type) {
        case 'dealer':
          this.$router.push({path: `/design/dealer/home`})
          break;
        case 'monitoring':
          this.$router.push({path: `/design/monitoring`})
          break;
        case 'enduser':
          this.$router.push({path: `/design/enduser`})
          break;                
        default:
          break;
      }
    },
    onResizeScreen: function () {
      if (window.innerWidth < 850) this.showMobileMainImg = true
      else this.showMobileMainImg = false
    }
  }
}
</script>

<style scoped>


/* Main */
.main {
  padding-top: 72px;
  position: relative;

}
.main-img {
  position: relative;
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

img {
  padding: 0;
  margin: 0;
}

.chekt-member-label {
  position: absolute;
  color: white;
  font-size: 12px;
  font-weight: 500;
  background-color: black;
  padding: 5px 12px;
  border-radius: 3px;
  width: max-content;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.chekt-cursor {
  position: absolute;
}
.chekt-cursor .cursor-img {
  position: absolute;
  left: -15px;
  top: -24px;
}
.chekt-cursor .cursor-img.right {
  left: 85px;
  transform: scaleX(-1);
  top: -24px;
}

.chekt-cursor.remove {
  opacity: 0;
  transition: opacity 1s;
}


/* contents */
.contents {
  max-width: 1240px;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 128px;
  padding-left: 40px;
  padding-right: 40px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  box-sizing: border-box;
}
.portals-header {
  margin-bottom: 20px;
}
.portals-title {
  font-size: 32px;
}
.portals-subtitle {
  margin-top: 10px;
  font-size: 16px;
  color: var(--chekt-gray-mideum);
}
.portals-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -20px;
}
.portals-body > div {
  flex-basis: 33.333%;
  max-width: 33.333%;
}
.portal-img img {
  width: 100%;
}
.portal-box {
  padding: 20px;
  outline: solid 2px rgba(255, 255, 255, 0);
  cursor: pointer;
}
.portal-box:hover {
  transition: outline .3s;
  outline: solid 2px var(--chekt-blue-gray-mideum);
}
.portal-text-title {
  margin-top: 20px;
  font-size: 22px;
}
.portal-text-subtitle {
  margin-top: 10px;
  line-height: 24px;
  color: var(--chekt-gray-mideum);
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
  left: 70px;
  top: 0px;
}
.chekt-indicator.one  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( -100px);
  transition: opacity 1s, transform 1s;
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
  top: 5px;
}
.chekt-indicator.two  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( 100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 3 */
.chekt-indicator.three {
  transform : translate( -100px, 500px);
  opacity: 0;
}
.chekt-indicator.three > .chekt-lego {
  transform: rotate(90deg);
}
.chekt-indicator.three.move {
  transform : translate( -4px, 255px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.three .chekt-cursor {
  position: relative;
  left: -50px;
  top: -10px;
}
.chekt-indicator.three  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateX( -100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 4 */
.chekt-indicator.four {
  transform : translate( 300px, 400px);
  opacity: 0;
}
.chekt-indicator.four.move {
  transform : translate( 193px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.four .chekt-cursor {
  position: relative;
  left: 25px;
  top: -20px;
}
.chekt-indicator.four  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( 100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 5 */
.chekt-indicator.five {
  transform : translate( 300px, 50px);
  opacity: 0;
}
.chekt-indicator.five.move {
  transform : translate( 290px, 194px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.five .chekt-cursor {
  position: relative;
  left: 25px;
  top: 0px;
}
.chekt-indicator.five  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( 100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 6 */
.chekt-indicator.six {
  transform : translate( 370px, 350px);
  opacity: 0;
}

.chekt-indicator.six.move {
  transform : translate( 387px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.six .chekt-cursor {
  position: relative;
  left: 45px;
  top: -40px;
}
.chekt-indicator.six  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( -100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 7 */
.chekt-indicator.seven {
  transform : translate( 400px, 50px);
  opacity: 0;
}
.chekt-indicator.seven.move {
  transform : translate( 355px, 225px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.seven .chekt-cursor {
  position: relative;
  left: -75px;
  top: -30px;
}
.chekt-indicator.seven  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( -100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 8 */
.chekt-indicator.eight {
  transform : translate( 500px, 50px);
  opacity: 0;
}
.chekt-indicator.eight.move {
  transform : translate( 387px, 323px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.eight .chekt-cursor {
  position: relative;
  left: 55px;
  top: 0px;
}
.chekt-indicator.eight  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( 100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 9 */
.chekt-indicator.nine {
  transform : translate( 850px, 400px);
  opacity: 0;
}
.chekt-indicator.nine.move {
  transform : translate( 516px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.nine .chekt-cursor {
  position: relative;
  left: -80px;
  top: -65px;
}
.chekt-indicator.nine  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( -100px);
  transition: opacity 1s, transform 1s;
}


/* ANIMATION 10 */
.chekt-indicator.ten {
  transform : translate( 400px, 400px);
  opacity: 0;
}
.chekt-indicator.ten.move {
  transform : translate( 549px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.ten .chekt-cursor {
  position: relative;
  left: 60px;
  top: -30px;
}
.chekt-indicator.ten  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateY( 100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 11 */
.chekt-indicator.ten-one {
  transform : translate( 470px, 100px);
  opacity: 0;
}
.chekt-indicator.ten-one.move {
  transform : translate( 678px, 193px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.ten-one .chekt-cursor {
  position: relative;
  left: 120px;
  top: 0px;
}
.chekt-indicator.ten-one  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateX( 100px);
  transition: opacity 1s, transform 1s;
}

/* ANIMATION 12 */
.chekt-indicator.ten-two {
  transform : translate( 870px, 300px);
  opacity: 0;
}
.chekt-indicator.ten-two.move {
  transform : translate( 711px, 225px);
  opacity: 1;
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1) .5s, opacity .3s;
}
.chekt-indicator.ten-two .chekt-cursor {
  position: relative;
  left: 30px;
  top: 5px;
}
.chekt-indicator.ten-two  > .chekt-cursor.remove {
  opacity: 0;
  transform : translateX( 100px);
  transition: opacity 1s, transform 1s;
}

@media screen and (min-width: 521px) and (max-width: 920px) {
  .portals-body > div {
    flex-basis: 50%;
    max-width: 50%;
  }
}
@media screen and (max-width: 521px) {
  .portals-body > div {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>
