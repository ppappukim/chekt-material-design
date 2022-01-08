<template>
  <div class="__chekt-tab">
    <div class="__chekt-tab-header">
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-all')" ref="chektTabDefaultOpen">All</div>
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-succeeded')">Succeeded</div>
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-refunded')">Refunded</div>
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-uncaptured')">Uncaptured</div>
    </div>

    <div id="__chekt-tab-all" class="__chekt-tabcontent">
      <div class="__chekt-tabcontent-title">No payments</div>
      <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been will show up here.</div>
    </div>

    <div id="__chekt-tab-succeeded" class="__chekt-tabcontent">
      <div class="__chekt-tabcontent-title">No succeeded payments</div>
      <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been succeeded will show up here.</div>
    </div>

    <div id="__chekt-tab-refunded" class="__chekt-tabcontent">
      <div class="__chekt-tabcontent-title">No refunded payments</div>
      <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been refunded will show up here.</div>
    </div>

    <div id="__chekt-tab-uncaptured" class="__chekt-tabcontent">
      <div class="__chekt-tabcontent-title">No uncaptured payments</div>
      <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
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
    this.$refs.chektTabDefaultOpen.click();
  },
  methods: {
    openCity: function (e, name) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("__chekt-tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("__chekt-tablink");
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
