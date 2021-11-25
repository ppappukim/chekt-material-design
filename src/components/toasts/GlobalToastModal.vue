<template>
  <div>

    <!-- DEFAULT -->
    <div id="__chekt-toast" class="right" v-bind:class="{show:isDefaultToastShowRight}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a right toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="center" v-bind:class="{show:isDefaultToastShowCenter}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a Center toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="left" v-bind:class="{show:isDefaultToastShowLeft}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a left toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="right success" v-bind:class="{show:isDefaultToastShowSuccess}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a success toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="right danger" v-bind:class="{show:isDefaultToastShowDanger}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a danger toast message.</div>
      </div>
    </div>
    <div id="__chekt-toast" class="right warning" v-bind:class="{show:isDefaultToastShowWarning}">
      <div class="toast-wrapper">
        <div class="toast-text">This is a warning toast message.</div>
      </div>
    </div>

    <!-- WITH ACTION -->
    <div id="__chekt-toast-action" class="right" v-bind:class="{show:isActionToastShow}">
      <div class="toast-wrapper">
        <div class="toast-text">Message has been moved to Trash.</div>
        <div @click="onClickUndoButton()" class="toast-action">Undo</div>
      </div>
    </div>
    <div id="__chekt-toast-action" class="right" v-bind:class="{show:isActionAfterToastShow}">
      <div class="toast-wrapper">
        <div class="toast-text">You've successfully undo.</div>
      </div>
    </div>

    <!-- WITH ACTIONS -->
    <div id="__chekt-toast-actions" class="right" v-bind:class="{show:isActionsToastShow}">
      <div class="toast-wrapper">
        <div class="toast-text" style="padding:0px 30px;">Message updates avaliable.</div>
        <div class="toast-actions">
          <div @click="onClickUpdateButton()" class="toast-action primary">Update</div>
          <div @click="onClickCancelButton()" class="toast-action danger">Cancel</div>
        </div>
      </div>
    </div>
    <div id="__chekt-toast" class="right" v-bind:class="{show:isActionsAfterToastShow}">
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
    isDefaultToastShowLeft: function () {
      return this.$store.getters.isDefaultToastShowLeft
    },
    isDefaultToastShowRight: function () {
      return this.$store.getters.isDefaultToastShowRight
    },
    isDefaultToastShowCenter: function () {
      return this.$store.getters.isDefaultToastShowCenter
    },
    isDefaultToastShowSuccess: function () {
      return this.$store.getters.isDefaultToastShowSuccess
    },
    isDefaultToastShowDanger: function () {
      return this.$store.getters.isDefaultToastShowDanger
    },
    isDefaultToastShowWarning: function () {
      return this.$store.getters.isDefaultToastShowWarning
    },
    isActionToastShow: function () {
      return this.$store.getters.isActionToastShow
    },
    isActionAfterToastShow: function () {
      return this.$store.getters.isActionAfterToastShow
    },
    isActionsToastShow: function () {
      return this.$store.getters.isActionsToastShow
    },
    isActionsAfterToastShow: function () {
      return this.$store.getters.isActionsAfterToastShow
    },
    actionToast$t: function () {
      return this.$store.getters.actionsToast$t
    },
    actionsToast$t: function () {
      return this.$store.getters.actionsToast$t
    },
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
  },
  methods: {

    // Action
    onClickUndoButton: async function () {
      if (this.isActionAfterToastShow) return
      this.$store.commit('IS_ACTION_TOAST_SHOW', false)
      this.removeActionsToast$t(this.actionToast$t)
      this.$store.commit('IS_ACTION_AFTER_TOAST_SHOW', true)
      await this.$tool.wait(5000)
      this.$store.commit('IS_ACTION_AFTER_TOAST_SHOW', false)
    },

    // Actions
    onClickUpdateButton: async function () {
      if (this.isActionsAfterToastShow) return
      this.$store.commit('IS_ACTIONS_TOAST_SHOW', false)
      this.removeActionsToast$t(this.actionsToast$t)
      this.$store.commit('IS_ACTIONS_AFTER_TOAST_SHOW', true)
      await this.$tool.wait(5000)
      this.$store.commit('IS_ACTIONS_AFTER_TOAST_SHOW', false)
    },
    onClickCancelButton: async function () {
      this.$store.commit('IS_ACTIONS_TOAST_SHOW', false)
      this.removeActionsToast$t(this.actionsToast$t)
    },
    removeActionToast$t: function (timeSet) {
      if (timeSet) {
        clearTimeout(timeSet)
      }  
    },
    removeActionsToast$t: function () {
      if (this.actionsToast$t) {
        clearTimeout(this.actionsToast$t)
      }  
    },
  }
}
</script>

<style scoped>

/*******************/ 
/***** Default *****/
/*******************/

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


/*******************/
/***** Action *****/
/*******************/

#__chekt-toast-action > .toast-wrapper {
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

/*******************/
/***** Actions *****/
/*******************/

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


</style>
