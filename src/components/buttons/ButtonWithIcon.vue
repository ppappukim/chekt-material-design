<template>
  <div>
    <div class="buttons">
      <div class="__chekt-button default icon">
        <MyIcon v-bind:icon="'download'" v-bind:width="18" />
        Button
      </div>
      <div class="__chekt-button default icon">
        Button
        <MyIcon v-bind:icon="'download'" v-bind:width="18" />
      </div>
    </div>
    <div class="buttons" style="margin-top:50px;">
      <div class="__chekt-button-small default icon">
        <MyIcon v-bind:icon="'download'" v-bind:width="14" />
        Button
      </div>
      <div class="__chekt-button-large default icon">
        <MyIcon v-bind:icon="'download'" v-bind:width="22" />
        Button
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon
  },
  computed: {
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
  }
}
</script>

<style scoped>
/* src/styles/dealer-button.css */
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

</style>
