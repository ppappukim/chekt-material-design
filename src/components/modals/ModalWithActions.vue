<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton('default')" class="button default"> Click me </div>
        <div @click="onClickModalButton('large')" class="button default"> Click me large </div>
        <div @click="onClickModalButton('small')" class="button default"> Click me small </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- Default -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showModal}">
      <div class="modal" v-bind:class="{show:showModal}">
        <div class="modal-wrapper">
          <MyIcon style="color:var(--chekt-warning-color);" v-bind:icon="'warning'" v-bind:width="32" />
          <div class="modal-title">This is title</div>
          <div class="modal-desc">To access certain parts of the Dashboard, please confirm your password.</div>
        </div>
        <div class="modal-actions">
          <div class="button default" @click="closeButton()" >Cancel</div>
          <div class="button primary" @click="closeButton()">Action</div>
        </div>
      </div>
    </div>

    <!-- Large -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showLargeModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showLargeModal}">
      <div class="modal large" v-bind:class="{show:showLargeModal}">
        <div class="modal-wrapper">
          <MyIcon style="color:var(--chekt-warning-color);" v-bind:icon="'warning'" v-bind:width="32" />
          <div class="modal-title">This is large title</div>
          <div class="modal-desc">
            Refunds take 5-10 days to appear on a customer's statement. 
            Stripe's fees for the original payment won't be returned, but there are no additional fees for the refund.
            You’re in test mode, so your customer won’t be charged for this subscription. 
            Customers and products created in test mode can’t be used for live subscriptions.
          </div>
        </div>
        <div class="modal-actions">
          <div class="button default" @click="closeButton()" >Cancel</div>
          <div class="button primary" @click="closeButton()">Action</div>
        </div>
      </div>
    </div>

    <!-- Small -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showSmallModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showSmallModal}">
      <div class="modal small" v-bind:class="{show:showSmallModal}">
        <div class="modal-wrapper">
          <MyIcon style="color:var(--chekt-warning-color);" v-bind:icon="'warning'" v-bind:width="32" />
          <div class="modal-title">Small title</div>
          <div class="modal-desc">
            take 5-10 days. 
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
    closeButton: function () {
      // 스크롤 가능
      document.body.style.overflow = 'auto';
      this.showModal = false
      this.showLargeModal = false
      this.showSmallModal = false
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
  width: 320px;
  box-shadow: 0 7px 14px 0 rgb(60 66 87 / 8%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  border-radius: 5px;
  text-align: center;
  background-color: var(--chekt-blue-gray-lower);
  z-index: 9100;
  position: relative;
  transform: scale(.8);
  max-height: calc(100vh - 2 * 50px);
  max-width: calc(100% - 40px);
  min-width: 300px;
  
}
#__chekt-modal .modal-wrapper {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 50px;
  overflow: hidden;
  overflow: auto;
}
#__chekt-modal .modal.show  {
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1)
}

/*******************/
/***** Large *******/
/*******************/
#__chekt-modal .modal.large {
  width: 500px; 
}

/*******************/
/***** Small *******/
/*******************/
#__chekt-modal .modal.small {
  width: 240px
}



.modal-title {
  font-size: 18px;
  margin-top: 5px;
}
.modal-desc {
  font-size: 14px;
  color: var(--chekt-blue-gray-higher);
  margin-top: 10px;
  line-height: 20px;
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
</style>
