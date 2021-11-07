<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton('default')" class="button default"> Click me </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- Default -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showModal}">
      <div class="modal" v-bind:class="{show:showModal}">
        <div class="modal-header">
          <div>Title</div>
        </div>
        <div class="modal-wrapper">
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


        </div>
        <div class="modal-actions">
          <div class="button default" @click="closeButton()" >Cancel</div>
          <div class="button primary" @click="closeButton()">Action</div>
        </div>
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
      showModal: false,
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
  beforeDestroy: function () {
  },
  methods: {
    onClickModalButton: async function (position) {
      // 스크롤 막기
      document.body.style.overflow = 'hidden'; 
      switch (position) {
        case 'default':
          this.showModal = true
          break;
        default:
          break;
      }
    },
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
    },
    closeButton: function () {
      // 스크롤 가능
      document.body.style.overflow = 'auto';
      this.showModal = false
    },
  }
}
</script>

<style scoped>

#__chekt-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  visibility: hidden;
  z-index: 9100;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
}
#__chekt-modal.show  {
  visibility: visible;
}

/*******************/
/***** Default *****/
/*******************/

#__chekt-modal .modal {
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 7px 14px 0 rgb(60 66 87 / 8%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  border-radius: 5px;
  background-color: var(--chekt-blue-gray-lower);
  z-index: 9100;
  position: relative;
  transform: scale(.8);
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  max-height: calc(100vh - 2 * 50px);
  max-width: calc(100% - 40px);
  min-width: 300px;
}
#__chekt-modal .modal-header {
  padding: 16px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: solid 1px var(--chekt-border);
}
#__chekt-modal .modal-wrapper {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  overflow: hidden;
  overflow: auto;
}
#__chekt-modal .modal.show  {
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1)
}




.modal-actions {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: end;
  grid-gap: 10px;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: solid 1px var(--chekt-border);
}

/********************/
/***** Backdrop *****/
/********************/

#__chekt-modal-backdrop {
  visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--chekt-backdrop-color);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9000;
  opacity: 0;
}
#__chekt-modal-backdrop.show {
  visibility: visible;
  opacity: 1;
  transition: opacity .2s;
}


/******************/
/***** Button *****/
/******************/

.buttons {
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
}
.button-rows {
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
}
.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}
/* primary color button */
.button.primary {
  background-color: var(--chekt-primary-color);
}
.button.primary:hover {
  background-color: var(--chekt-primary-shadow-color);
}


/****************/
/***** Tab *****/
/***************/

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
 