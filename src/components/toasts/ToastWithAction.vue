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
    isActionToastShow: function () {
      return this.$store.getters.isActionToastShow
    },
    isActionAfterToastShow: function () {
      return this.$store.getters.isActionAfterToastShow
    },
  },
  data: function() {
    return {
      toastShow$t: null
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
      if (this.isActionToastShow) return
      if (this.isActionAfterToastShow) return
      this.$store.commit('IS_ACTION_TOAST_SHOW', true)
      this.toastShow$t = setTimeout(() => { this.$store.commit('IS_ACTION_TOAST_SHOW', false) }, 5000)
      this.$store.commit('ACTION_TOAST_$T', this.toastShow$t)
      // this.$store.commit('IS_ACTION_TOAST_SHOW', false)
    },
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
