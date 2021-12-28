<template>
	<div>
    <div
    v-for="v in iconList"
    v-bind:key="v">
      <img @click="onClickDownloadSVG($event)" src="@/icons/search.svg" alt="" ref="bobby">
    </div>
    <!-- <div @click="onClickDownloadSVG($event)">??</div> -->
    <a download="bobby.svg" href="`https://firebasestorage.googleapis.com/v0/b/chekt-design.appspot.com/o/icons%2Fsearch.svg?alt=media&token=37b6a811-591f-4267-954e-e360675d2f36">??</a>
    <!-- <img alt="" ref="bobby"> -->
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
    iconList: function () {
      return this.$store.getters.iconList
    },
  },
  data: function() {
    return {
      src: '@/icons/search.svg'
    }
  },
  watch: {
  },
  created: function () {
    this.$store.commit('GET_ICON_DATA')
    this.updateIconList()
  },
  methods: {
      onClickDownloadSVG: async function () {
        
        let svgSrc = 'https://firebasestorage.googleapis.com/v0/b/chekt-design.appspot.com/o/icons%2Fsearch.svg?alt=media&token=37b6a811-591f-4267-954e-e360675d2f36'
        console.log(svgSrc);
        let blobURL = this.$tool.getBase64FromObjectURL(svgSrc)
        let dataURL = await this.$tool.readAsDataURL(blobURL)
        console.log(dataURL);

        // ACTION - Download Img
        this.$tool.downloadObjectURL(svgSrc, 'bobby2')
      },
      updateIconList: function () {

      }
  }
}
</script>

<style scoped>
</style>
