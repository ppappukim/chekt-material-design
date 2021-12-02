<template>
  <div>
    <div class="loadings">
      <div class="default icon loading">
        <div class="icon loading">
          <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-blue-gray-higher);" />
          <div class="loading-text">Loading...</div>
        </div>
      </div>
    </div>
    <div class="loadings" style="margin-top:50px;">
      <div class="icon-column loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-blue-gray-higher);" />
        <div class="loading-text">Loading Data...</div>
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
  beforeDestroy: function () {
  },
  methods: {
  }
}
</script>

<style scoped>

.loadings {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

.loading.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 7px;
}
.loading.icon-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
}
.loading-text {
  color: var(--chekt-blue-gray-higher);
}


</style>
