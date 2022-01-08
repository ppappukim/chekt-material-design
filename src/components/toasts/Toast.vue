<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickToastButton('left')" class="__chekt-button default"> Click me left </div>
        <div @click="onClickToastButton('center')" class="__chekt-button default"> Click me center </div>
        <div @click="onClickToastButton('right')" class="__chekt-button default"> Click me right </div>
      </div>
      <div class="button-rows">
        <div @click="onClickToastButton('success')" class="__chekt-button default"> Click me success </div>
        <div @click="onClickToastButton('danger')" class="__chekt-button default"> Click me danger </div>
        <div @click="onClickToastButton('warning')" class="__chekt-button default"> Click me warning </div>
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
    }
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
    onClickToastButton: async function (position) {
      switch (position) {
        case 'right':
          if (this.isDefaultToastShowRight) return
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_RIGHT', true)
          await this.$tool.wait(5000)
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_RIGHT', false)
          break;
        case 'center':
          if (this.isDefaultToastShowCenter) return
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_CENTER', true)
          await this.$tool.wait(5000)
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_CENTER', false)
          break;
        case 'left':
          if (this.isDefaultToastShowLeft) return
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_LEFT', true)
          await this.$tool.wait(5000)
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_LEFT', false)
          break;
        case 'success':
          if (this.isDefaultToastShowSuccess) return
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_SUCCESS', true)
          await this.$tool.wait(5000)
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_SUCCESS', false)
          break;
        case 'danger':
          if (this.isDefaultToastShowDanger) return
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_DANGER', true)
          await this.$tool.wait(5000)
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_DANGER', false)
          break;
        case 'warning':
          if (this.isDefaultToastShowWarning) return
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_WARNING', true)
          await this.$tool.wait(5000)
          this.$store.commit('IS_DEFAULT_TOAST_SHOW_WARNING', false)
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
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
