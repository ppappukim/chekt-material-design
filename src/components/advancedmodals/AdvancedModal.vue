<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton('default')" class="__chekt-button default"> Click me </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- Dialog -->
    <div 
    ref="dialogDefaultBottom"
    id="__chekt-dialog" 
    class="bottom">
      <div
      v-for="i in tablinksHideTextArray"
      v-bind:key="i">{{i}}</div>
    </div>

    <!-- Backdrop -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showModal}"></div>


    <!-- Modal -->
    <div @click="closeButton($event)" id="__chekt-advanced-modal" v-bind:class="{show:showModal}">

      <!-- Modal body -->
      <div class="__chekt-advanced-modal-body" v-bind:class="{show:showModal}">
        <!-- Navi -->
        <div class="__chekt-advanced-modal-leftnav">
          <div class="title">Title</div>
          <div class="sub">Sub title</div>
          <div class="desc">Description</div>
        </div>

        <!-- Content -->
        <div class="__chekt-advanced-modal-contents">
          <div class="__chekt-tab custom">
            <div class="__chekt-tab-header custom">
              <div ref="chektTabHeaderTextWrapper" style="width:100%;">
                <div class="header-tabtext" ref="chektTabHeaderText">
                  <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-1')" ref="chektTabDefaultOpen">TREVOR</div>
                  <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-2')">BOBBY</div>
                  <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-3')">KEVIN</div>
                  <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-4')">RIDER</div>
                  <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-5')">DOSUNG</div>
                  <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-6')">LEO</div>
                  <!-- <div class="__chekt-tablink advanced show" @click="openMenu($event, '__chekt-tab-7')">DAVID</div> -->
                  <div v-if="showTabMoreIcon" @click="openMenu($event, '__chekt-tab-more')" class="__chekt-tablink">
                    <MyIcon style="color:var(--chekt-blue-gray-high);" v-bind:icon="'double-arrow'" v-bind:width="16" />
                  </div>
                </div>
              </div>
              <div class="header-icons">
                <div><MyIcon style="color:var(--chekt-blue-gray-higher);" v-bind:icon="'more-vert'" v-bind:width="24" /></div>
                <div><MyIcon style="color:var(--chekt-blue-gray-higher);" v-bind:icon="'close'" v-bind:width="24" /></div>
              </div>
            </div>

            <div id="__chekt-tab-1" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been will show up here.</div>
            </div>

            <div id="__chekt-tab-2" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No succeeded payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been succeeded will show up here.</div>
            </div>

            <div id="__chekt-tab-3" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No refunded payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been refunded will show up here.</div>
            </div>

            <div id="__chekt-tab-4" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No uncaptured payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
            <div id="__chekt-tab-5" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No uncaptured payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
            <div id="__chekt-tab-6" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No uncaptured payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
            <div id="__chekt-tab-more" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">No uncaptured payments</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
          </div>
        </div>

      </div>

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
      showModal: false,
      showLargeModal: false,
      showSmallModal: false,
      showTabMoreIcon: false,
      storedHabHeader: 0,
      tablinksHideTextArray: []
    }
  },
  watch: {
    storedHabHeader: function () {
    }
  },
  created: function () {
    window.addEventListener("resize", this.onResizeScreen) 
  },
  mounted: function () {
    // Get the element with id="defaultOpen" and click on it
    this.$nextTick(() => { 
      this.$refs.chektTabDefaultOpen.click();
      // this.onResizeScreen()
    })
  },
  beforeDestroy: function () {
    window.addEventListener("resize", this.onResizeScreen) 
  },
  methods: {
    onClickModalButton: async function (position) {
      // 스크롤 막기
      document.body.style.overflow = 'hidden'; 
      switch (position) {
        case 'default':
          this.showModal = true
          break;
        case 'large':
          this.showLargeModal = true
          break;
        case 'small':
          if (this.showToastLeft) return
          this.showSmallModal = true
          break;
        default:
          break;
      }
    },
    closeButton: function (e) {

      ////////////
      // DIALOG // 
      ////////////
      if (!this.dialogEl) return
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-dialog")) return

      // ACTION
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')

      
      ///////////
      // MODAL // 
      ///////////

      // 스크롤 가능
      document.body.style.overflow = 'auto';
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-advanced-modal .__chekt-advanced-modal-body")) return
      this.showModal = false
      this.showLargeModal = false
      this.showSmallModal = false
    },
    openMenu: function (e, name) {
      e.stopPropagation()
      if (name == '__chekt-tab-more') {
        this.onClickShowDialog(e)
        return
      }

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
    },
    onResizeScreen: function () {
      // INIT
      var tabHeader = this.$refs.chektTabHeaderText
      var tabHeaderWrapper = this.$refs.chektTabHeaderTextWrapper
      var tablinksShow = document.getElementsByClassName("__chekt-tablink advanced show");
      var tablinksHide = document.getElementsByClassName("__chekt-tablink advanced hide");
      var tablinksHideTextArray = []

      // CHECK
      if (!tabHeader) return
      if (!tablinksShow) return

      // ACTION - 화면이 tab menu width보다 크면 숨겨져있던 메뉴중 젤 첫번째를 보여주고 같으면 마지막껄 숨겨라.
      if (tabHeader.offsetWidth < tabHeaderWrapper.offsetWidth) {
        if (!tablinksHide) return
        var lastHideTablinks = tablinksHide[0]
        if (!lastHideTablinks) return
        lastHideTablinks.classList.add("show");
        lastHideTablinks.classList.remove("hide");
      }
      
      if (tabHeader.offsetWidth == tabHeaderWrapper.offsetWidth) {
        var lastArrary = tablinksShow.length-1
        var lastShowTablinks = tablinksShow[lastArrary]
        if (lastShowTablinks.classList.contains("active")) lastShowTablinks = tablinksShow[lastArrary-1]
        lastShowTablinks.classList.remove("show");
        lastShowTablinks.classList.add("hide");
      }

      if (tablinksHide.length > 0) {
        this.showTabMoreIcon = true
      }
      else this.showTabMoreIcon = false

      // GET - More Dialog Text 
      for (let i = 0; i < tablinksHide.length; i++) {
        const hideText = tablinksHide[i];
        tablinksHideTextArray.push(hideText.innerHTML)
      }
      this.tablinksHideTextArray = tablinksHideTextArray
    },
    onClickShowDialog: function (e) {
      e.stopPropagation()

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // GET - dialog element
      this.dialogEl = this.$refs.dialogDefaultBottom
      if (!this.dialogEl) return
      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.dialogEl.style.left = this.targetRect.x  +'px'



      // ACTION - show tooltip
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-advanced-modal.css */
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


#__chekt-advanced-modal {
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
#__chekt-advanced-modal.show  {
  visibility: visible;
}
.__chekt-advanced-modal-body {
  display: flex;
  flex-direction: row;
  box-shadow: var(--chekt-shadow-large);
  border-radius: 5px;
  background-color: var(--chekt-white-text-higher);
  z-index: 9100;
  position: relative;
  transform: scale(1);
  width: 1050px;
  max-width: calc(100% - 2 * 40px);
  min-width: 300px;

  height: 720px;
  max-height: calc(100vh - 2 * 40px);

  overflow: hidden;
  overflow: auto;
}
.__chekt-advanced-modal-leftnav {
  min-width: 220px;
  background-color: var(--chekt-primary-color);
  padding: 30px;
}
.__chekt-advanced-modal-leftnav > .title {
  font-size: 18px;
  font-weight: 500;
  color: var(--chekt-white-text-higher);
  padding-bottom: 10px;
}
.__chekt-advanced-modal-leftnav > .sub {
  font-size: 16px;
  color: var(--chekt-white-text-high);
  padding-bottom: 5px;
}
.__chekt-advanced-modal-leftnav > .desc {
  font-size: 14px;
  color: var(--chekt-white-text-medium);
}
.__chekt-tab-header.custom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.__chekt-tab-header .header-tabtext {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 24px;
  padding: 30px 20px 0px 20px;
}
.__chekt-tab-header .header-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  margin-right: 20px;
  /* position: absolute;
  right: 10px; */
}

.__chekt-tablink.advanced {
  display: none;
}
.__chekt-tablink.advanced.show {
  display: block;
}

.__chekt-advanced-modal-contents {
  width: 100%;
}
.__chekt-tablink-more {
}
</style>
