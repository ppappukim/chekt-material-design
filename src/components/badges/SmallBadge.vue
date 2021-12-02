<template>
  <div class="badges">
    <div class="icon">
      <MyIcon v-bind:icon="'bell'" v-bind:width="32" />
      <div class="small-badge"></div>
    </div>
    <div class="icon">
      <MyIcon v-bind:icon="'bell'" v-bind:width="24" />
      <div class="smaller-badge"></div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon,
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
.badges {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
.icon {
  position: relative;
  margin-right: 20px;
}
.smaller-badge {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 5px;
  height: 5px;
  background-color: var(--chekt-badge);
  border-radius: 50%;
}
.small-badge {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 8px;
  height: 8px;
  background-color: var(--chekt-badge);
  border-radius: 50%;
}
</style>
