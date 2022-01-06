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
    isActionsToastShow: function () {
      return this.$store.getters.isActionsToastShow
    },
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
