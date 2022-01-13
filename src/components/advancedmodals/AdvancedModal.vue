<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton()" class="__chekt-button default"> Click me </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- More Tab Dialog -->
    <div 
    ref="dialogMoreTabMenu"
    id="__chekt-dialog" 
    class="bottom-right custom">
      <div
      @click="onClickMoreMenu($event)"
      v-for="i in tablinksHideTextArray"
      v-bind:key="i">{{i}}</div>
    </div>

    <!-- More Icon Dialog -->
    <div 
    ref="dialogMoreIconMenu"
    id="__chekt-dialog"
    class="bottom-left">
      <div>ACTION 1</div>
      <div>ACTION 2</div>
      <div class="delete">ACTION 3</div>
    </div>

    <!-- Backdrop -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showAdvacnedModal}"></div>


    <!-- Modal -->
    <div @click="closeButton($event)" id="__chekt-advanced-modal" v-bind:class="{show:showAdvacnedModal}">

      <!-- Modal body -->
      <div class="__chekt-advanced-modal-body" v-bind:class="{show:showAdvacnedModal}">
        <!-- Navi -->
        <div class="__chekt-advanced-modal-leftnav" :class="{hide:hideLeftNavi}">
          <div class="title">Title</div>
          <div class="sub">Sub title</div>
          <div class="desc">Description</div>

          <!-- For Check Height Scroll -->
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>
          <div class="desc">.</div>

        </div>

        <!-- Content -->
        <div class="__chekt-advanced-modal-contents">
          
          <!-- Detail Page -->
          <transition name="slide-fade">
          <AdvancedModalTabContentPage v-if="advacnedModalDetialPageShowHide"/>
          </transition>
          
          <!-- General Page -->
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
                  <div v-if="showTabMoreIcon" @click="openMenu($event, '__chekt-tab-more')" class="__chekt-tablink" ref="chektTabMore">
                    <MyIcon style="color:var(--chekt-blue-gray-high);" v-bind:icon="'double-arrow'" v-bind:width="16" />
                  </div>
                </div>
              </div>
              <div class="__chekt-advanced-modal-header-actions">
                <div @click="onClickMoreButton($event)" class="__chekt-advanced-modal-header-action">
                  <MyIcon style="color:var(--chekt-blue-gray-higher);" v-bind:icon="'more-vert'" v-bind:width="24" />
                  </div>
                <div @click="closeButtonSudo()" class="__chekt-advanced-modal-header-action">
                  <MyIcon style="color:var(--chekt-blue-gray-higher);" v-bind:icon="'close'" v-bind:width="24" />
                </div>
              </div>
            </div>

            <div id="__chekt-tab-1" class="__chekt-tabcontent custom">
              <!-- Tab Page -->
              <AdvancedModalTabContent/>
            </div>

            <div id="__chekt-tab-2" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">BOBBY</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been succeeded will show up here.</div>
            </div>

            <div id="__chekt-tab-3" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">KEVIN</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been refunded will show up here.</div>
            </div>

            <div id="__chekt-tab-4" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">RIDER</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
            <div id="__chekt-tab-5" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">DOSUNG</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
            <div id="__chekt-tab-6" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">LEO</div>
              <div class="__chekt-tabcontent-desc">Authorized payments whose funds haven't been captured will show up here.</div>
            </div>
            <div id="__chekt-tab-more" class="__chekt-tabcontent">
              <div class="__chekt-tabcontent-title">More</div>
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
import AdvancedModalTabContent from '@/components/advancedmodals/AdvancedModalTabContent'
import AdvancedModalTabContentPage from '@/components/advancedmodals/AdvancedModalTabContentPage'
export default {
  components: {
    MyIcon,
    AdvancedModalTabContent,
    AdvancedModalTabContentPage
  },
  computed: {
    advacnedModalDetialPageShowHide: function () {
      return this.$store.getters.advacnedModalDetialPageShowHide
    },
    showAdvacnedModal: function () {
      return this.$store.getters.showAdvacnedModal
    },
  },
  data: function() {
    return {
      showTabMoreIcon: false,
      hideLeftNavi: false,
      tablinksHideTextArray: [],
      globalTablinksHide: [],
      globalTablinksShow: [],

      showTabDetailPage: false,
      chektAdvancedModalContentsWidth: null,
    }
  },
  watch: {
    showAdvacnedModal: function () {
      this.onResizeScreen()
    },
  },
  created: function () {
    window.addEventListener("resize", this.onResizeScreen)
  },
  mounted: function () {
    // Get the element with id="defaultOpen" and click on it
    this.$nextTick(() => { 
      this.$refs.chektTabDefaultOpen.click();
    })
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResizeScreen)
  },
  methods: {
    onClickModalButton: async function () {
      // 스크롤 막기
      document.body.style.overflow = 'hidden'; 
      this.$store.commit('SHOW_ADVANCED_MODAL', true)
    },
    closeButton: function (e) {
      e.stopPropagation()
      ////////////
      // DIALOG // 
      ////////////
      this.closeDialog(e)

      ///////////
      // MODAL // 
      ///////////

      // 스크롤 가능
      
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-advanced-modal .__chekt-advanced-modal-body")) return
      this.$store.commit('SHOW_ADVANCED_MODAL', false)
      document.body.style.overflow = 'auto';
    },
    closeButtonSudo: function () {
      document.body.style.overflow = 'auto';
      this.$store.commit('SHOW_ADVANCED_MODAL', false)
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
      this.onResizeDialog()
      // INIT
      var tabHeader = this.$refs.chektTabHeaderText
      var tabHeaderWrapper = this.$refs.chektTabHeaderTextWrapper
      var tablinksShow = document.getElementsByClassName("__chekt-tablink advanced show");
      var tablinksHide = document.getElementsByClassName("__chekt-tablink advanced hide");
      var tablinksHideTextArray = []

      // CHECK
      if (!tabHeader) return
      if (!tablinksShow) return

      // ACTION - Left Navi show / hide
      if (window.innerWidth < 680) {
        this.hideLeftNavi = true
      }
      else this.hideLeftNavi = false

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
      else {
        this.showTabMoreIcon = false

        // ACTION - Close Dialog
        if (!this.dialogEl) return
        this.dialogEl.classList.remove('active')
        this.targetEl.classList.remove('active')
      }

      // GET - More Dialog Text 
      for (let i = 0; i < tablinksHide.length; i++) {
        const hideText = tablinksHide[i];
        tablinksHideTextArray.push(hideText.innerHTML)
      }

      this.tablinksHideTextArray = tablinksHideTextArray
      this.globalTablinksHide = tablinksHide
      this.globalTablinksShow = tablinksShow
    },
    onClickShowDialog: function (e) {
      e.stopPropagation()

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // GET - dialog element
      this.dialogEl = this.$refs.dialogMoreTabMenu
      if (!this.dialogEl) return
      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
      this.dialogEl.style.left = this.targetRect.x  +'px'

      // ACTION - show tooltip
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onResizeDialog: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      if (this.dialogEl.classList.contains('bottom-right')) {
        // ADD - position css
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
        this.dialogEl.style.left = this.targetRect.x  +'px'
      }
      if (this.dialogEl.classList.contains('bottom-left')) {
        // ADD - position css
        this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
        this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth + 'px'
      }
    },
    closeDialog: function (e) {
      e.stopPropagation()

      if (!this.dialogEl) return
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-dialog")) return

      // ACTION
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onClickMoreMenu: function (e) {
      // 보여지는 텝에 마지막 Tab을 클릭한 Tab과 바꾼다.
      var lastGlobalTablinksShow = this.globalTablinksShow[this.globalTablinksShow.length-1]
      lastGlobalTablinksShow.classList.remove("show");
      lastGlobalTablinksShow.classList.add("hide");

      for (let i = 0; i < this.globalTablinksHide.length; i++) {
        const globalTablinkHide = this.globalTablinksHide[i];
        if (e.currentTarget.innerHTML == globalTablinkHide.innerHTML) {
          this.dialogEl.classList.remove('active')
          globalTablinkHide.classList.remove("hide");
          globalTablinkHide.classList.add("show");
          globalTablinkHide.click()
        }
      }
      // tablinksHideTextArray 한번 갱신해주기!
      this.onResizeScreen()
    },
    onClickMoreButton: function (e) {
      e.stopPropagation()

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // GET - dialog element
      this.dialogEl = this.$refs.dialogMoreIconMenu
      if (!this.dialogEl) return
      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 + 'px'
      this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth + 'px'

      // ACTION - show tooltip
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    ///////////////////////////////////////////////////////
    // 특정 element가 resize될 때마다 그 값을 트리거해서 가져온다.
    // onResizeObserver: function () {
    //   var contents = document.getElementsByClassName("__chekt-advanced-modal-contents")[0];
    //   const resizeObserver = new ResizeObserver(entries => {
    //       for (let entry of entries) {
    //         if(entry.contentBoxSize) {
    //           // Firefox implements `contentBoxSize` as a single content rect, rather than an array
    //           const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
    //           this.chektAdvancedModalContentsWidth = contentBoxSize.inlineSize
    //         } else {
    //           this.chektAdvancedModalContentsWidth = entry.contentRect.width
    //         }
    //       }
    //   })
    //   // 안 쓸때는 꼭 unobserve 해줘야 함!
    //   resizeObserver.observe(contents);
    // }
    ///////////////////////////////////////////////////////
  }
}
</script>

<style scoped>
/* src/styles/dealer-advancedmodal.css */
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
</style>
