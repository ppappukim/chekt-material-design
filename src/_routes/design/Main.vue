<template>
	<div>
    <div class="main">
      <div class="main-img">
        <!-- background -->
        <div class="main-img-bg"></div>
        <!-- chekt text -->
        <div class="chekt-indicator one" v-bind:class="{ move:aniStart }">
          <div class="chekt-lego"><img src="../../assets/chekt-lego-3.png" alt=""></div>
          <div class="chekt-cursor"><img src="../../assets/designer-pink.png" alt="" width="120px"></div>
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
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
    this.startAnimaiton()
  },
  methods: {
    startAnimaiton: async function () {
      await this.$tool.wait(1000)
      this.aniStart = true
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
  position: relative;
  display: block;
  width: 100%;
  height: 620px;
  background-size: cover;
  background-image: url(../../assets/main-bg.png);
  background-position: center;
  overflow: hidden;
}

.chekt-indicator {
  position: relative;
}

.chekt-indicator.one {
  transform : translate( -220px, 0px);
}
.chekt-indicator.one.move {
  transform : translate( 340px, 200px);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.chekt-indicator.one .chekt-cursor {
  position: relative;
  left: 80px;
  top: 20px;
}
</style>
