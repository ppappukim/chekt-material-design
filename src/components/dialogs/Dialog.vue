<template>
  <div id="dialog-wrapper">
    <span>
      <div v-bind:class="{ active:isDialogShow }" id="dialog">
        <div>Edit</div>
        <div>Download</div>
        <div class="delete">Delete</div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
  },
  computed: {
    isDialogShow: function () {
      return this.$store.getters.isDialogShow
    },
  },
  data: function () {
    return {
    }
  },
  watch: {
  },
  created: function () {
  },
  methods: {
  }
}
</script>


<style scoped>
#dialog-wrapper {
}
#dialog {
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px var(--chekt-border);
  border: 1px solid var(--chekt-border);
  border-radius: 5px;
  min-width: 100px;
  background-color: white;
  white-space: nowrap;
  z-index: 300;
  opacity: 0;
  transform:scale(0.8);
}
#dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}
#dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
#dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
#dialog div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
}
</style>
