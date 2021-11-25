<template>
  <div class="wrapper">
    <div class="buttons">
      <div @click="onClickToastButton()" class="button default"> Click me </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
    isActionsToastShow: function () {
      return this.$store.getters.isActionsToastShow
    },
    isActionsAfterToastShow: function () {
      return this.$store.getters.isActionsAfterToastShow
    }
  },
  data: function() {
    return {
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
      if (this.isActionsToastShow) return
      this.$store.commit('IS_ACTIONS_TOAST_SHOW', true)
      this.toastShow$t = setTimeout(() => { this.$store.commit('IS_ACTIONS_TOAST_SHOW', false) }, 5000)
      this.$store.commit('ACTIONS_TOAST_$T', this.toastShow$t)
    },
    // onClickUpdateButton: async function () {
    //   if (this.showUndoSuccessToast) return
    //   this.showToastRight = false
    //   this.showUndoSuccessToast = true
    //   await this.$tool.wait(5000)
    //   this.showUndoSuccessToast = false
    // },
    // onClickCancelButton: async function () {
    //   if (this.toastShow$t) {
    //     clearTimeout(this.toastShow$t)
    //     this.toastShow$t = null
    //   }
    //   this.showToastRight = false
    // }
  },
}
</script>

<style scoped>

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
