<template>
  <div class="tab">
    <div class="tab-header">
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-all')" id="__chekt-tab-default-open">All</div>
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-succeeded')">Succeeded</div>
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-refunded')">Refunded</div>
      <div class="__chekt-tablink" @click="openCity($event, '__chekt-tab-uncaptured')">Uncaptured</div>
    </div>

    <div id="__chekt-tab-all" class="__chekt-tabcontent">
      <div class="tabcontent-title">No payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been will show up here.</div>
    </div>

    <div id="__chekt-tab-succeeded" class="__chekt-tabcontent">
      <div class="tabcontent-title">No succeeded payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been succeeded will show up here.</div>
    </div>

    <div id="__chekt-tab-refunded" class="__chekt-tabcontent">
      <div class="tabcontent-title">No refunded payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been refunded will show up here.</div>
    </div>

    <div id="__chekt-tab-uncaptured" class="__chekt-tabcontent">
      <div class="tabcontent-title">No uncaptured payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
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
    document.getElementById("__chekt-tab-default-open").click();
  },
  methods: {
    openCity: function (e, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("__chekt-tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("__chekt-tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      e.currentTarget.className += " active";
    }
  }
}
</script>

<style scoped>
.tab {
  width: 100%;
}

.tab-header {
  display: flex;
  flex-direction: row;
  grid-gap: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--chekt-blue-gray-high);
  border-bottom: solid 1px var(--chekt-border);
}

.__chekt-tablink {
  cursor: pointer;
  padding-bottom: 7px;
  border-bottom: solid 2px rgba(255, 255, 255, 0);
}
.__chekt-tablink:hover {
  color: var(--chekt-gray-high);
}


.__chekt-tablink.active {
  color: var(--chekt-primary-color);
  border-bottom: solid 2px var(--chekt-primary-color);
  transition: border-bottom 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: .1s
}


/* Style the tab content */
.__chekt-tabcontent {
  display: none;
  padding: 60px;
  text-align: center;
}

.tabcontent-title {
  font-size: 20px;
  font-weight: 500;
}
.tabcontent-desc {
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  color: var(--chekt-blue-gray-higher);
}




</style>
