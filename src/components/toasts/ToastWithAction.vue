<template>
  <div class="wrapper">
    <div class="buttons">
      <div @click="onClickToastButton()" class="button default"> Click me </div>
    </div>

    <div id="__chekt-toast-action" class="right" v-bind:class="{show:showToastRight}">
      <div class="toast-wrapper">
        <div class="toast-text">Message has been moved to Trash.</div>
        <div @click="onClickUndoButton()" class="toast-action">Undo</div>
      </div>
    </div>
    <div id="__chekt-toast-action" class="right" v-bind:class="{show:showUndoSuccessToast}">
      <div class="toast-wrapper">
        <div class="toast-text">You've successfully undo.</div>
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
      await this.$tool.wait(5000)
      this.showToastRight = false
    },
    onClickUndoButton: async function () {
      if (this.showUndoSuccessToast) return
      this.showToastRight = false
      this.showUndoSuccessToast = true
      await this.$tool.wait(5000)
      this.showUndoSuccessToast = false
    }
  },
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
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
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
#__chekt-toast-action.right > .toast-wrapper {
  right: 30px;
}
#__chekt-toast-action.right.show > .toast-wrapper {
  visibility: visible;
  transform: translateY(0%);
}

#__chekt-toast-action > .toast-wrapper > .toast-action {
  color: var(--chekt-primary-color);
  cursor: pointer;
}
#__chekt-toast-action > .toast-wrapper > .toast-action:hover {
  color: var(--chekt-primary-tint-color);
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
