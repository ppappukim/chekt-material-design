<template>
  <div>
    <div class="loadings">
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-text-high);" />
      </div>
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-text-high);" />
      </div>
      <div class="primary icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="32" style="stroke:var(--chekt-text-high);" />
      </div>
      <div class="primary icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="48" style="stroke:var(--chekt-text-high);" />
      </div>
    </div>
    <div class="loadings" style="margin-top:50px;">
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-blue-gray-higher);" />
      </div>
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-blue-gray-high);" />
      </div>
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-blue-gray-mideum);" />
      </div>
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-danger-color);" />
      </div>
      <div class="default icon loading">
        <MyIcon v-bind:icon="'loader'" v-bind:width="24" style="stroke:var(--chekt-success-color);" />
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
