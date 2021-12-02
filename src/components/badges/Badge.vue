<template>
  <div class="badges">
    <div class="icon">
      <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
      <div class="badge">2</div>
    </div>
    <div class="icon">
      <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
      <div class="badge">23</div>
    </div>
    <div class="icon">
      <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
      <div class="badge">+99</div>
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
.badge {
  position: absolute;
  top: -2px;
  right: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  background-color: var(--chekt-badge);
  border-radius: 10px;
  color: white;
  font-size: 13px;
  font-weight: 500;
}

</style>
