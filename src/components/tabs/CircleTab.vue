<template>
  <div class="tab">
    <div class="__chekt-circle-tab-header">
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-all')" id="__chekt-circle-default-open">All</div>
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-succeeded')">Succeeded</div>
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-refunded')">Refunded</div>
      <div class="__chekt-circle-tablink" @click="openCity($event, '__chekt-circle-uncaptured')">Uncaptured</div>
    </div>

    <div id="__chekt-circle-all" class="__chekt-circle-tabcontent">
      <div class="tabcontent-title">No payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been will show up here.</div>
    </div>

    <div id="__chekt-circle-succeeded" class="__chekt-circle-tabcontent">
      <div class="tabcontent-title">No succeeded payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been succeeded will show up here.</div>
    </div>

    <div id="__chekt-circle-refunded" class="__chekt-circle-tabcontent">
      <div class="tabcontent-title">No refunded payments</div>
      <div class="tabcontent-desc">Authorized payments whose funds haven't been refunded will show up here.</div>
    </div>

    <div id="__chekt-circle-uncaptured" class="__chekt-circle-tabcontent">
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
    document.getElementById("__chekt-circle-default-open").click();
  },
  methods: {
    openCity: function (e, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("__chekt-circle-tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("__chekt-circle-tablink");
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

.__chekt-circle-tab-header {
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
  font-size: 14px;
  font-weight: 500;
  color: var(--chekt-blue-gray-higher);
}

.__chekt-circle-tablink {
  cursor: pointer;
  padding: 3px 12px;
  border-radius: 20px;
}
.__chekt-circle-tablink:hover {
  /* color: var(--chekt-gray-high); */
  background-color: var(--chekt-blue-gray-mideum);
}


.__chekt-circle-tablink.active {
  color: white;
  background-color: var(--chekt-primary-color);
  transition-delay: .1s
}


/* Style the tab content */
.__chekt-circle-tabcontent {
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
