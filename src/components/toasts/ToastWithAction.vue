<template>
  <div class="wrapper">
    <div class="buttons">
      <div @click="onClickToastButton()" class="__chekt-button default"> Click me </div>
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
</style>
