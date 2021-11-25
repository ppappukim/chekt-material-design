<template>
	<div class="empty">
    <div class="empty-img">
      <img src="../../assets/lego-empty.png" width="180px" alt="">
    </div>
    <div class="empty-text">
      Monitoring Portal Under Development
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
  }
}
</script>

<style scoped>

.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 353px);
  margin-left: auto;
  margin-right: auto;
}
.empty-text {
  font-size: 18px;
  margin-top: 20px;
  font-family: roboto mono;
}
</style>
