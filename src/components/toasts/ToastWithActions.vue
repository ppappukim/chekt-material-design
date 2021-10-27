<template>
  <div class="wrapper">
    <div class="buttons">
      <div @click="onClickToastButton()" class="button default"> Click me </div>
    </div>

    <div id="__chekt-toast-actions" class="right" v-bind:class="{show:showToastRight}">
      <div class="toast-wrapper">
        <div class="toast-text" style="padding:0px 30px;">Message updates avaliable.</div>
        <div class="toast-actions">
          <div @click="onClickUpdateButton()" class="toast-action primary">Update</div>
          <div @click="onClickCancelButton()" class="toast-action danger">Cancel</div>
        </div>
      </div>
    </div>
    <div id="__chekt-toast" class="right" v-bind:class="{show:showUndoSuccessToast}">
      <div class="toast-wrapper">
        <div class="toast-text">Message is successfully updated.</div>
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
      showUndoSuccessToast: false,
      toastShow$t: null,
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    onClickToastButton: async function () {
      if (this.showToastRight) return
      if (this.showUndoSuccessToast) return
      this.showToastRight = true
      this.toastShow$t = setTimeout(() => { this.showToastRight = false }, 5000)
    },
    onClickUpdateButton: async function () {
      if (this.showUndoSuccessToast) return
      this.showToastRight = false
      this.showUndoSuccessToast = true
      await this.$tool.wait(5000)
      this.showUndoSuccessToast = false
    },
    onClickCancelButton: async function () {
      if (this.toastShow$t) {
        clearTimeout(this.toastShow$t)
        this.toastShow$t = null
      }
      this.showToastRight = false
    }
  },
}
</script>

<style scoped>
#__chekt-toast-actions > .toast-wrapper {
  background-color: var(--chekt-gray-high);
  color: white;
  font-size: 14px;
  max-width: 600px;
  min-width: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
  position: fixed;
  z-index: 9000;
  bottom: 30px;
  /* padding: 20px 20px; */
  box-shadow: 
    0 7px 14px 0 rgb(60 66 87 / 8%),
    0 3px 6px 0 rgb(0 0 0 / 12%);
  visibility: hidden;
  transform: translateY(150%);

  /* ANINATION */
  transition: transform .5s;
}
#__chekt-toast-actions.right > .toast-wrapper {
  right: 30px;
}
#__chekt-toast-actions.right.show > .toast-wrapper{
  visibility: visible;
  transform: translateY(0%);
}
#__chekt-toast-actions .toast-action {
  cursor: pointer;
}
#__chekt-toast-actions .toast-action.primary {
  color: var(--chekt-primary-color);
}
#__chekt-toast-actions .toast-action.primary:hover {
  color: var(--chekt-primary-tint-color);
}
#__chekt-toast-actions > .toast-wrapper > .toast-actions {
  font-size: 12px;
  border-left: solid .5px var(--chekt-border-dark);
}
#__chekt-toast-actions > .toast-wrapper > .toast-actions > .toast-action {
  padding: 10px 16px;
  text-align: center;
  border-bottom: solid .5px var(--chekt-border-dark);
}



#__chekt-toast > .toast-wrapper {
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
  right: 30px;
  padding: 20px 20px;
  box-shadow: 
    0 7px 14px 0 rgb(60 66 87 / 8%),
    0 3px 6px 0 rgb(0 0 0 / 12%);
  visibility: hidden;
  transform: translateY(150%);

  /* ANINATION */
  transition: transform .5s;
}
#__chekt-toast.right.show > .toast-wrapper {
  visibility: visible;
  transform: translateY(0%);
}


/******************/
/***** Button *****/
/******************/

.buttons {
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
