<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton('default')" class="__chekt-button default"> Click me </div>
        <div @click="onClickModalButton('large')" class="__chekt-button default"> Click me large </div>
        <div @click="onClickModalButton('small')" class="__chekt-button default"> Click me small </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- Default -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showModal}"></div>
    <div @click="closeButton($event)" id="__chekt-modal" v-bind:class="{show:showModal}">
      <div class="__chekt-modal" v-bind:class="{show:showModal}">
        <div class="__chekt-modal-wrapper">
          <MyIcon style="color:var(--chekt-warning-color);" v-bind:icon="'warning'" v-bind:width="32" />
          <div class="__chekt-modal-title">This is title</div>
          <div class="__chekt-modal-desc">To access certain parts of the Dashboard, please confirm your password.</div>
        </div>
      </div>
    </div>

    <!-- Large -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showLargeModal}"></div>
    <div @click="closeButton($event)" id="__chekt-modal" v-bind:class="{show:showLargeModal}">
      <div class="__chekt-modal large" v-bind:class="{show:showLargeModal}">
        <div class="__chekt-modal-wrapper">
          <MyIcon style="color:var(--chekt-warning-color);" v-bind:icon="'warning'" v-bind:width="32" />
          <div class="__chekt-modal-title">This is large title</div>
          <div class="__chekt-modal-desc">
            Refunds take 5-10 days to appear on a customer's statement. 
            Stripe's fees for the original payment won't be returned, but there are no additional fees for the refund.
            You’re in test mode, so your customer won’t be charged for this subscription. 
            Customers and products created in test mode can’t be used for live subscriptions.
          </div>
        </div>
      </div>
    </div>

    <!-- Small -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showSmallModal}"></div>
    <div @click="closeButton($event)" id="__chekt-modal" v-bind:class="{show:showSmallModal}">
      <div class="__chekt-modal small" v-bind:class="{show:showSmallModal}">
        <div class="__chekt-modal-wrapper">
          <MyIcon style="color:var(--chekt-warning-color);" v-bind:icon="'warning'" v-bind:width="32" />
          <div class="__chekt-modal-title">Small title</div>
          <div class="__chekt-modal-desc">
            Refunds take 5-10 days. 
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
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
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
      // 스크롤 가능
      document.body.style.overflow = 'auto';
      // closest() - #__chekt-modal > modal 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-modal .modal")) return
      this.showModal = false
      this.showLargeModal = false
      this.showSmallModal = false
    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-modal.css */

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
</style>
