<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickToastButton('left')" class="button default"> Click me left </div>
        <div @click="onClickToastButton('center')" class="button default"> Click me center </div>
        <div @click="onClickToastButton('right')" class="button default"> Click me right </div>
      </div>
      <div class="button-rows">
        <div @click="onClickToastButton('success')" class="button default"> Click me success </div>
        <div @click="onClickToastButton('danger')" class="button default"> Click me danger </div>
        <div @click="onClickToastButton('warning')" class="button default"> Click me warning </div>
      </div>
      
    </div>

    <div id="__chekt-toast" class="right" v-bind:class="{show:showToastRight}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a right toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="center" v-bind:class="{show:showToastCenter}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a Center toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="left" v-bind:class="{show:showToastLeft}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a left toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="right success" v-bind:class="{show:showToastSuccess}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a success toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="right danger" v-bind:class="{show:showToastDanger}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a danger toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="right warning" v-bind:class="{show:showToastWarning}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a warning toast message.</div>
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
      showToastRight: false,
      showToastLeft: false,
      showToastCenter: false,
      showToastSuccess: false,
      showToastDanger: false,
      showToastWarning: false,
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    onClickToastButton: async function (position) {
      switch (position) {
        case 'right':
          if (this.showToastRight) return
          this.showToastRight = true
          await this.$tool.wait(5000)
          this.showToastRight = false
          break;
        case 'center':
          if (this.showToastCenter) return
          this.showToastCenter = true
          await this.$tool.wait(5000)
          this.showToastCenter = false
          break;
        case 'left':
          if (this.showToastLeft) return
          this.showToastLeft = true
          await this.$tool.wait(5000)
          this.showToastLeft = false
          break;
        case 'success':
          if (this.showToastSuccess) return
          this.showToastSuccess = true
          await this.$tool.wait(5000)
          this.showToastSuccess = false
          break;
        case 'danger':
          if (this.showToastDanger) return
          this.showToastDanger = true
          await this.$tool.wait(5000)
          this.showToastDanger = false
          break;
        case 'warning':
          if (this.showToastWarning) return
          this.showToastWarning = true
          await this.$tool.wait(5000)
          this.showToastWarning = false
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>

.toast-wrapper {
  background-color: var(--chekt-gray-high);
  color: white;
  font-size: 14px;
  max-width: 600px;
  min-width: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 9000;
  bottom: 30px;
  padding: 20px 20px;
  box-shadow: 
    0 7px 14px 0 rgb(60 66 87 / 8%),
    0 3px 6px 0 rgb(0 0 0 / 12%);
  visibility: hidden;
  transform: translateY(150%);

  /* ANINATION */
  transition: transform .5s;
}


/*****************/
/***** Right *****/
/*****************/

#__chekt-toast.right > .toast-wrapper {
  right: 30px;
}
#__chekt-toast.right.show > .toast-wrapper {
  visibility: visible;
  transform: translateY(0%);
}

/******************/
/***** Center *****/
/******************/

#__chekt-toast.center {
  display: flex;
  justify-content: center;
}
#__chekt-toast.center.show > .toast-wrapper {
  visibility: visible;
  transform: translateY(0%);
}

/****************/
/***** Left *****/
/****************/

#__chekt-toast.left > .toast-wrapper {
  left: 30px;
}
#__chekt-toast.left.show > .toast-wrapper {
  visibility: visible;
  transform: translateY(0%);
}


/*******************/
/***** Success *****/
/*******************/
#__chekt-toast.right.success > .toast-wrapper {
  background-color: var(--chekt-success-shadow-color);
}

/*******************/
/***** Danger *****/
/*******************/
#__chekt-toast.right.danger > .toast-wrapper {
  background-color: var(--chekt-danger-shadow-color);
}

/*******************/
/***** Warning *****/
/*******************/
#__chekt-toast.right.warning > .toast-wrapper {
  background-color: var(--chekt-warning-shadow-color);
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
</style>
