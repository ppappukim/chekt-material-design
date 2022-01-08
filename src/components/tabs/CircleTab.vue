<template>
  <div class="__chekt-circle-tab">
    <div class="__chekt-circle-tab-header">
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-all')" ref="chektCircleDefaultOpen">All</div>
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-succeeded')">Succeeded</div>
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-refunded')">Refunded</div>
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-uncaptured')">Uncaptured</div>
    </div>

    <div id="__chekt-circle-all" class="__chekt-circle-tabcontent">
      <div class="__chekt-circle-tabcontent-title">No payments</div>
      <div class="__chekt-circle-tabcontent-desc">Authorized payments whose funds haven't been will show up here.</div>
    </div>

    <div id="__chekt-circle-succeeded" class="__chekt-circle-tabcontent">
      <div class="__chekt-circle-tabcontent-title">No succeeded payments</div>
      <div class="__chekt-circle-tabcontent-desc">Authorized payments whose funds haven't been succeeded will show up here.</div>
    </div>

    <div id="__chekt-circle-refunded" class="__chekt-circle-tabcontent">
      <div class="__chekt-circle-tabcontent-title">No refunded payments</div>
      <div class="__chekt-circle-tabcontent-desc">Authorized payments whose funds haven't been refunded will show up here.</div>
    </div>

    <div id="__chekt-circle-uncaptured" class="__chekt-circle-tabcontent">
      <div class="__chekt-circle-tabcontent-title">No uncaptured payments</div>
      <div class="__chekt-circle-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
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
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
    // Get the element with id="defaultOpen" and click on it
    this.$refs.chektCircleDefaultOpen.click();
  },
  methods: {
    openCity: function (e, name) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("__chekt-circle-tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("__chekt-circle-tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(name).style.display = "block";
      e.currentTarget.className += " active";
    }
  }
}
</script>

<style scoped>
/* src/styles/dealer-tab.css */
</style>
