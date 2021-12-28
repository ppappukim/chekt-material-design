<template>
	<div class="empty">
    <IconsBody/>
  </div>
</template>

<script>
import IconsBody from './icons/IconsBody'
export default {
  components: {
    IconsBody
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
</style>
