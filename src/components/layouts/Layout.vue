<template>
  <div class="layout">
    <div class="layout-wrapper" style="height:100%;">
      <div class="appbar"></div>
      <div class="contents">
        <!-- Navi -->
        <div class="navi" v-bind:class="{ show:isNavisubShow }">
          <div class="navimain">
            <div @click="onClickNaviBtn()" v-bind:class="{ show:isNavisubShow }" class="navi-icon"><MyIcon style="color:var(--chekt-primary-color);" v-bind:icon="'arrow-right'" v-bind:width="18" /></div>
          </div>
          <div class="navisub" v-bind:class="{ show:isNavisubShow }"></div>   
        </div>
        <!-- body -->
        <div v-if="isLayout1200" id="__chekt-layout-1200"  class="body">
          <div class="board-1200"></div>
          <div class="board-1200"></div>
          <div class="board-1200"></div>
          <div class="board-1200"></div>
          <div class="board-1200"></div>
        </div>
        <div v-else-if="isLayout600" id="__chekt-layout-600"  class="body">
          <div class="col">
            <div class="board-600 one"></div>
            <div class="board-600 two"></div>
          </div>
          <div class="col">
            <div class="board-600 three"></div>
            <div class="board-600 four"></div>
          </div>
        </div>
        <div v-else-if="isLayout800" id="__chekt-layout-800"  class="body">
          <div class="col">
            <div class="board-400 one"></div>
          </div>
          <div class="col">
            <div class="board-800 two"></div>
            <div class="board-800 three"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- buttons -->
    <div class="buttons">
      <div @click="openBodyType('__chekt-layout-1200')" v-bind:class="{ active:isLayout1200 }" class="button"><MyIcon style="color:white;" v-bind:icon="'layout-1200'" v-bind:width="24" /></div>
      <div @click="openBodyType('__chekt-layout-600')" v-bind:class="{ active:isLayout600 }" class="button"><MyIcon style="color:white;" v-bind:icon="'layout-600'" v-bind:width="24" /></div>
      <div @click="openBodyType('__chekt-layout-800')" v-bind:class="{ active:isLayout800 }" class="button"><MyIcon style="color:white;" v-bind:icon="'layout-800'" v-bind:width="24" /></div>
      <div @click="onClickClose()" class="button"><MyIcon style="color:white;" v-bind:icon="'close'" v-bind:width="24" /></div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon
  },
  computed: {
  },
  data: function() {
    return {
      isNavisubShow: false,
      isLayout1200: true,
      isLayout600: false,
      isLayout800: false,
    }
  },
  watch: {
  },
  created: function () {
    window.addEventListener("resize", this.onResizeScreen)
  },
  mounted: function () {
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    onClickClose: function () {
      const bodyContainer = document.getElementById('__chekt-body-container')
      bodyContainer.style.height = 'auto'
      bodyContainer.style.overflow = 'auto'
      this.$emit('updateclose', false)
    },
    onClickNaviBtn: function () {
      if(!this.isNavisubShow) this.isNavisubShow = true
      else this.isNavisubShow = false
    },
    openBodyType: function (tabName) {
      switch (tabName) {
        case '__chekt-layout-1200':
          this.isLayout1200 = true 
          this.isLayout600 = false 
          this.isLayout800 = false 
          break;
        case '__chekt-layout-600':
          this.isLayout1200 = false 
          this.isLayout600 = true 
          this.isLayout800 = false 
          break;
        case '__chekt-layout-800':
          this.isLayout1200 = false 
          this.isLayout600 = false 
          this.isLayout800 = true 
          break;                
        default:
          break;
      }
    },
    onResizeScreen: function () {
      var intFrameWidth = window.innerWidth;
      if(890 > intFrameWidth) {
        this.isNavisubShow = false
      }
    }
    
  }
}
</script>

<style scoped>
.layout {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 7000;
  height: 100%;
  overflow: auto;
}
.appbar {
  background-color: #E6EFFD;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.contents {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0;
  min-height: 100%;
  
}
.navi {
  padding-top: 50px;
  display: flex;
  flex: 0 0 50px;
  transition: flex .4s;
}
.navi.show {
  flex: 0 0 250px;
  transition: flex .4s;
}
.navimain {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #C6D2EA;
  height: 100%;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  border-top: 0px;
  min-width: 50px;
  margin-top: -1px;
  z-index: 1;
}
.navisub {
  position: fixed;
  width: 250px;
  height: 100%;
  background-color: #DAE3F5;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  margin-top: -1px;
  margin-left: -300px;
  transition: margin-left .3s;
}
.navisub.show {
  margin-left: -1px;
  transition: margin-left .4s;
}
.navi-icon {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}
.navi-icon.show {
  transform: rotate(180deg);
  transition-delay: .3s;
}

/* 1200 */

#__chekt-layout-1200.body {
  padding-top: 70px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
  width: 100%;
  overflow: auto;
  flex: 1 0 600px;
  flex-wrap: wrap;
}

.board-1200 {
  width: 100%;
  max-width: 1200px;
  min-width: 600px;
  min-height: 500px;
  background-color: #D6E0E9;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  /* box-shadow: inset 0 1px var(--chekt-primary-color); */
}

/* 600 */

#__chekt-layout-600.body {
  padding-top: 70px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  flex-direction: row;
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  flex: 1 0 300px;
}

#__chekt-layout-600 .col {
  flex-direction: column;
  display: flex;
  flex: 1;
  height: 100%;
  grid-gap: 10px;
  max-width: 600px;
}
.board-600 {
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  background-color: #D6E0E9;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  /* box-shadow: inset 0 1px var(--chekt-primary-color); */
}
.board-600.one {
  flex: .7;
}
.board-600.two {
  flex: .3;
}
.board-600.three {
  flex: .3;
}
.board-600.four {
  flex: .7;
}

/* 800 */
#__chekt-layout-800.body {
  padding-top: 70px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  flex-direction: row;
  display: flex;
  grid-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  flex: 1 0 300px;
}
#__chekt-layout-800 .col:first-child {
  flex-direction: column;
  display: flex;
  flex: 1;
  height: 100%;
  grid-gap: 10px;
  max-width: 600px;
}
#__chekt-layout-800 .col:last-child {
  flex-direction: column;
  display: flex;
  flex: 1;
  height: 100%;
  grid-gap: 10px;
  max-width: 800px;
}
.board-400 {
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  background-color: #D6E0E9;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
  /* box-shadow: inset 0 1px var(--chekt-primary-color); */
}
.board-800 {
  width: 100%;
  max-width: 800px;
  min-width: 300px;
  background-color: #D6E0E9;
  box-shadow: inset 0 0 0 1px var(--chekt-primary-color);
}
.board-400.one {
  flex: 1;
}
.board-800.two {
  flex: .3;
}
.board-800.three {
  flex: .7;
}


/* button */
.buttons {
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 7100;
  margin: 30px;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--chekt-blue-gray-highest);
  color: white;
  width: 50px;
  height: 50px;
  opacity: .9;
  border-radius: 50%;
  box-shadow: 0 7px 14px 0 rgb(60 66 87 / 8%), 0 3px 6px 0 rgb(0 0 0 / 12%);
}
.button.active {
  background-color: var(--chekt-primary-color);
}
.button:hover {
  /* background-color: var(--chekt-blue-gray-higher); */
  cursor: pointer;
}

@media screen and (max-width: 699px) {
  .board-600.four {
    margin-bottom: 20px;
  }
}

</style>
